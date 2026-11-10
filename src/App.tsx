import { useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowUpRight,
  Check,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Sun,
  X,
} from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Navigate, Route, Routes } from 'react-router-dom'
import { resume } from './data/resume'
import { useTheme } from './hooks/useTheme'
import type { ResumeProject } from './types/resume'
import './App.css'

const navigation = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['Credentials', 'credentials'],
  ['Contact', 'contact'],
] as const

function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  )
}

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function Header() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="wordmark" href="#home" aria-label="Pratiksha Patil home">
          <span className="wordmark-mark" aria-hidden="true">PP</span>
          <span className="wordmark-copy">
            <strong>PRATIKSHA PATIL</strong>
            <small>SENIOR FRONTEND ENGINEER</small>
          </span>
        </a>
        <nav className={`desktop-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          {navigation.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="icon-button theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <a className="header-contact" href="#contact">
            Get in touch <ArrowUpRight size={15} />
          </a>
          <button
            className="icon-button menu-toggle"
            type="button"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
    </header>
  )
}

function DownloadActions() {
  const [busy, setBusy] = useState<'pdf' | 'docx' | null>(null)
  const [error, setError] = useState('')

  async function handleDownload(format: 'pdf' | 'docx') {
    setError('')
    setBusy(format)
    try {
      if (format === 'pdf') {
        const { downloadPdf } = await import('./utils/exportPdf')
        await downloadPdf(resume)
      } else {
        const { downloadDocx } = await import('./utils/exportDocx')
        await downloadDocx(resume)
      }
    } catch (downloadError) {
      console.error(`Unable to generate ${format.toUpperCase()} resume`, downloadError)
      setError(`The ${format.toUpperCase()} download could not be generated. Please try again.`)
    } finally {
      setBusy(null)
    }
  }

  return (
    <div className="download-group">
      <button
        className="button button-primary"
        type="button"
        onClick={() => void handleDownload('pdf')}
        disabled={busy !== null}
      >
        <ArrowDownToLine size={16} />
        {busy === 'pdf' ? 'Preparing PDF…' : 'Download PDF'}
      </button>
      <button
        className="button button-secondary"
        type="button"
        onClick={() => void handleDownload('docx')}
        disabled={busy !== null}
      >
        {busy === 'docx' ? 'Preparing DOCX…' : 'Word document'}
      </button>
      {error && <p className="form-status error" role="alert">{error}</p>}
    </div>
  )
}

function Hero() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="availability">
            <span className="availability-dot" />
            <span>{resume.profile.location}</span>
          </div>
          <p className="hero-kicker">{resume.profile.title}</p>
          <h1 id="hero-title">
            {resume.profile.name.split(' ')[0]}
            <br />
            <span>{resume.profile.name.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="hero-summary">{resume.profile.summary}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experience">
              Explore experience <ArrowDown size={16} />
            </a>
            <a className="text-link" href={`mailto:${resume.profile.email}`}>
              Contact <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="hero-contact-row">
            <a href={`mailto:${resume.profile.email}`}><Mail size={15} />{resume.profile.email}</a>
            <a href={`tel:${resume.profile.phone.replace(/\s/g, '')}`}><Phone size={15} />{resume.profile.phone}</a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="hero-monogram">PP</div>
          <div className="hero-coordinate">PUNE, INDIA</div>
          <div className="hero-caption">REACT · TYPESCRIPT · UI ENGINEERING</div>
        </div>
      </div>
      <div className="hero-bottom">
        <span>Scroll to explore</span>
        <span className="hero-line" />
        <span>Portfolio / React + TypeScript</span>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="content-section about-section" id="about">
      <div className="section-layout">
        <SectionTitle eyebrow="02 / PROFILE" title="About" />
        <Reveal className="about-content">
          <p className="about-lead">{resume.profile.summary}</p>
          <div className="about-facts">
            <div><span>Based in</span><strong>{resume.profile.location}</strong></div>
            <div><span>Experience</span><strong>{resume.profile.experienceYears}</strong></div>
            <div><span>Focus</span><strong>Frontend engineering</strong></div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="content-section skills-section" id="skills">
      <SectionTitle eyebrow="03 / TOOLKIT" title="Technical skills" />
      <div className="skills-grid">
        {resume.skills.map((group, index) => (
          <Reveal className="skill-card" key={group.category} delay={(index % 3) * 0.06}>
            <span className="skill-index">{String(index + 1).padStart(2, '0')}</span>
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: ResumeProject; index: number }) {
  return (
    <Reveal delay={index * 0.07}>
      <a className="project-card" href={`#experience-${project.id}`} aria-label={`Jump to ${project.title} experience`}>
        <div className="project-card-top">
          <span className="project-number">0{index + 1}</span>
          <ArrowUpRight size={17} aria-hidden="true" />
        </div>
        <h3>{project.title}</h3>
        <p className="project-client">{project.client}</p>
        <div className="project-stack">
          {project.techStack.slice(0, 5).map((technology) => <span key={technology}>{technology}</span>)}
        </div>
      </a>
    </Reveal>
  )
}

function Projects() {
  return (
    <section className="content-section projects-section" id="projects">
      <div className="section-heading-row">
        <SectionTitle eyebrow="05 / SELECTED WORK" title="Projects" />
        <p className="section-aside">Selected client platforms and applications</p>
      </div>
      <div className="projects-grid">
        {resume.projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="content-section experience-section" id="experience">
      <div className="section-heading-row">
        <SectionTitle eyebrow="04 / CAREER" title="Experience" />
        <p className="section-aside">Professional experience</p>
      </div>
      <div className="timeline">
        {resume.experience.map((role, roleIndex) => (
          <Reveal className="timeline-item" key={`${role.organization}-${role.period}`} delay={roleIndex * 0.05}>
            <div className="timeline-meta">
              <span className="timeline-marker" />
              <span>{role.period}</span>
            </div>
            <div className="timeline-body">
              <div className="role-heading">
                <div>
                  <h3>{role.title}</h3>
                  <p className="role-company">{role.organization}{role.promotion && <span> · {role.promotion}</span>}</p>
                  {role.focus && <p className="role-focus">{role.focus}</p>}
                </div>
                {role.domain && <span className="role-domain">{role.domain}</span>}
              </div>
              {role.projects.map((project) => (
                <article className="experience-project" id={`experience-${project.id}`} key={project.id}>
                  <div className="experience-project-heading">
                    <h4>{project.title}</h4>
                    <span>{project.client}</span>
                  </div>
                  <p className="techline"><strong>Tech stack:</strong> {project.techStack.join(', ')}</p>
                  <ul className="experience-bullets">
                    {project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Credentials() {
  return (
    <section className="content-section credentials-section" id="credentials">
      <div className="credentials-grid">
        <div id="certifications">
          <SectionTitle eyebrow="06 / LEARNING" title="Certifications" />
          <ol className="credential-list">
            {resume.certifications.map((certification, index) => (
              <li key={certification}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{certification}</p>
                <Check size={15} aria-hidden="true" />
              </li>
            ))}
          </ol>
        </div>
        <div className="education-block" id="education">
          <SectionTitle eyebrow="07 / EDUCATION" title="Education" />
          <div className="education-card">
            <span className="education-year">{resume.education.period}</span>
            <h3>{resume.education.degree}</h3>
            <p>{resume.education.institution}</p>
            <strong>{resume.education.result}</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

function Achievements() {
  return (
    <section className="content-section achievements-section" id="achievements">
      <SectionTitle eyebrow="08 / RECOGNITION" title="Achievements" />
      <div className="achievement-list">
        {resume.achievements.map((achievement, index) => (
          <Reveal className="achievement-item" key={achievement} delay={index * 0.07}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{achievement}</p>
            <ArrowUpRight size={16} aria-hidden="true" />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '')
    const email = String(formData.get('email') ?? '')
    const message = String(formData.get('message') ?? '')
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`)
    window.location.href = `mailto:${resume.profile.email}?subject=${subject}&body=${body}`
    setStatus('Your email app should open with your message ready to send.')
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-grid">
        <div className="contact-intro">
          <span className="eyebrow">09 / CONTACT</span>
          <h2>Let&apos;s make<br /><span>good work.</span></h2>
          <p>Get in touch</p>
          <a className="contact-email" href={`mailto:${resume.profile.email}`}>
            {resume.profile.email}<ArrowUpRight size={17} />
          </a>
          <div className="contact-location"><MapPin size={15} />{resume.profile.location}</div>
          <div className="social-links">
            {resume.profile.linkedinUrl && (
              <a href={resume.profile.linkedinUrl} target="_blank" rel="noreferrer">
                <span className="social-monogram" aria-hidden="true">in</span> LinkedIn <ArrowUpRight size={13} />
              </a>
            )}
            {resume.profile.githubUrl && (
              <a href={resume.profile.githubUrl} target="_blank" rel="noreferrer">
                <span className="social-monogram" aria-hidden="true">GH</span> GitHub <ArrowUpRight size={13} />
              </a>
            )}
          </div>
          <DownloadActions />
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Your name
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            Email address
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows={4} required />
          </label>
          <button className="button button-light" type="submit">
            Prepare message <ArrowUpRight size={16} />
          </button>
          {status && <p className="form-status" role="status">{status}</p>}
          <p className="form-note">This form opens your default email application. Your message is not stored on this website.</p>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} {resume.profile.name}</span>
      <span>{resume.profile.title}</span>
      <a href="#home">Back to top ↑</a>
    </footer>
  )
}

function Portfolio() {
  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Credentials />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
