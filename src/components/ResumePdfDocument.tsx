import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer'
import type { ResumeData } from '../types/resume'

const pdfStyles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingBottom: 42,
    paddingHorizontal: 44,
    fontFamily: 'Helvetica',
    color: '#1b2430',
    backgroundColor: '#ffffff',
  },
  header: { marginBottom: 10 },
  name: { fontSize: 22, fontFamily: 'Helvetica-Bold', color: '#111827', marginBottom: 2 },
  title: { fontSize: 10, color: '#2e5a4d', marginBottom: 5, letterSpacing: 0.3 },
  contact: { fontSize: 8, color: '#4c5865', marginBottom: 12 },
  section: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: '#123d33',
    marginTop: 12,
    marginBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#d6ddd8',
    paddingBottom: 4,
  },
  body: { fontSize: 9, color: '#3d4a52', lineHeight: 1.5, marginBottom: 3 },
  group: { marginBottom: 8 },
  roleTitle: { fontSize: 9, fontFamily: 'Helvetica-Bold', color: '#1d2936', marginBottom: 2 },
  roleMeta: { fontSize: 8, color: '#54626d', marginBottom: 4 },
  projectTitle: { fontSize: 8.5, fontFamily: 'Helvetica-Bold', color: '#1d2936', marginBottom: 2 },
  skillRow: { fontSize: 8.5, color: '#3d4a52', marginBottom: 4 },
  bullet: { fontSize: 8.3, color: '#3d4a52', lineHeight: 1.45, marginBottom: 2, paddingLeft: 10 },
  fact: { fontSize: 8.5, color: '#3d4a52', marginBottom: 3 },
  strong: { fontFamily: 'Helvetica-Bold', color: '#1d2936' },
})

export function ResumePdfDocument({ data }: { data: ResumeData }) {
  return (
    <Document title={`${data.profile.name} — Resume`} author={data.profile.name} subject={data.profile.title}>
      <Page size="A4" style={pdfStyles.page} wrap>
        <View style={pdfStyles.header}>
          <Text style={pdfStyles.name}>{data.profile.name}</Text>
          <Text style={pdfStyles.title}>{data.profile.title}</Text>
          <Text style={pdfStyles.contact}>
            {data.profile.location}  |  {data.profile.phone}  |  {data.profile.email}
          </Text>
        </View>

        <Text style={pdfStyles.section}>ABOUT</Text>
        <Text style={pdfStyles.body}>{data.profile.summary}</Text>

        <Text style={pdfStyles.section}>TECHNICAL SKILLS</Text>
        {data.skills.map((group) => (
          <Text key={group.category} style={pdfStyles.skillRow}>
            <Text style={pdfStyles.strong}>{group.category}:</Text> {group.items.join(', ')}
          </Text>
        ))}

        <Text style={pdfStyles.section}>EXPERIENCE</Text>
        {data.experience.map((role) => (
          <View key={`${role.organization}-${role.period}`} style={pdfStyles.group}>
            <Text style={pdfStyles.roleTitle}>
              {role.title} — {role.organization}
              {role.focus ? ` — ${role.focus}` : ''}
              {role.promotion ? ` (${role.promotion})` : ''}
            </Text>
            <Text style={pdfStyles.roleMeta}>{role.period}{role.domain ? `  |  ${role.domain}` : ''}</Text>
            {role.projects.map((project) => (
              <View key={project.id || project.title} style={pdfStyles.group}>
                <Text style={pdfStyles.projectTitle}>{project.title} — {project.client}</Text>
                <Text style={pdfStyles.fact}><Text style={pdfStyles.strong}>Tech stack:</Text> {project.techStack.join(', ')}</Text>
                {project.bullets.map((bullet) => (
                  <Text key={bullet} style={pdfStyles.bullet}>• {bullet}</Text>
                ))}
              </View>
            ))}
          </View>
        ))}

        <Text style={pdfStyles.section}>PROJECTS</Text>
        {data.projects.map((project) => (
          <Text key={project.id || project.title} style={pdfStyles.skillRow}>
            <Text style={pdfStyles.strong}>{project.title}</Text> — {project.client}; {project.techStack.join(', ')}
          </Text>
        ))}

        <Text style={pdfStyles.section}>CERTIFICATIONS</Text>
        {data.certifications.map((item) => (
          <Text key={item} style={pdfStyles.bullet}>• {item}</Text>
        ))}

        <Text style={pdfStyles.section}>EDUCATION</Text>
        <Text style={pdfStyles.roleTitle}>{data.education.degree}</Text>
        <Text style={pdfStyles.fact}>{data.education.institution}</Text>
        <Text style={pdfStyles.fact}>{data.education.result}  |  {data.education.period}</Text>

        <Text style={pdfStyles.section}>ACHIEVEMENTS</Text>
        {data.achievements.map((item) => (
          <Text key={item} style={pdfStyles.bullet}>• {item}</Text>
        ))}
      </Page>
    </Document>
  )
}
