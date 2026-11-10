import {
  AlignmentType,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  TextRun,
} from 'docx'
import type { ResumeData } from '../types/resume'
import { downloadBlob } from './downloadBlob'

export async function downloadDocx(data: ResumeData) {
  const paragraphs: Paragraph[] = [
    new Paragraph({ text: data.profile.name, heading: HeadingLevel.TITLE, spacing: { after: 80 } }),
    new Paragraph({
      children: [new TextRun({ text: data.profile.title, bold: true, color: '2E5A4D' })],
      spacing: { after: 80 },
    }),
    new Paragraph(`${data.profile.location}  |  ${data.profile.phone}  |  ${data.profile.email}`),
  ]

  function section(title: string) {
    paragraphs.push(
      new Paragraph({
        text: title,
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 200, after: 120 },
      }),
    )
  }

  paragraphs.push(new Paragraph({ text: data.profile.summary, spacing: { after: 120 } }))

  section('TECHNICAL SKILLS')
  for (const group of data.skills) {
    paragraphs.push(new Paragraph({
      children: [
        new TextRun({ text: `${group.category}: `, bold: true }),
        new TextRun(group.items.join(', ')),
      ],
    }))
  }

  section('EXPERIENCE')
  for (const role of data.experience) {
    paragraphs.push(new Paragraph({
      children: [
        new TextRun({ text: `${role.title} — ${role.organization}`, bold: true }),
        ...(role.focus ? [new TextRun({ text: ` — ${role.focus}`, bold: true, color: '2E5A4D' })] : []),
        ...(role.promotion ? [new TextRun({ text: ` (${role.promotion})`, italics: true })] : []),
      ],
      spacing: { before: 120 },
    }))
    paragraphs.push(new Paragraph(`${role.period}${role.domain ? `  |  ${role.domain}` : ''}`))
    for (const project of role.projects) {
      paragraphs.push(new Paragraph({
        children: [new TextRun({ text: `${project.title} — ${project.client}`, bold: true })],
        spacing: { before: 80 },
      }))
      paragraphs.push(new Paragraph(`Tech stack: ${project.techStack.join(', ')}`))
      for (const bullet of project.bullets) {
        paragraphs.push(new Paragraph({ text: bullet, bullet: { level: 0 }, spacing: { after: 40 } }))
      }
    }
  }

  section('PROJECTS')
  for (const project of data.projects) {
    paragraphs.push(new Paragraph({
      children: [new TextRun({ text: `${project.title} — ${project.client}`, bold: true })],
      spacing: { before: 80 },
    }))
    paragraphs.push(new Paragraph(`${project.techStack.join(', ')}`))
  }

  section('CERTIFICATIONS')
  for (const item of data.certifications) {
    paragraphs.push(new Paragraph({ text: item, bullet: { level: 0 }, spacing: { after: 40 } }))
  }

  section('EDUCATION')
  paragraphs.push(new Paragraph({ children: [new TextRun({ text: data.education.degree, bold: true })] }))
  paragraphs.push(new Paragraph(`${data.education.institution}`))
  paragraphs.push(new Paragraph(`${data.education.result}  |  ${data.education.period}`))

  section('ACHIEVEMENTS')
  for (const item of data.achievements) {
    paragraphs.push(new Paragraph({ text: item, bullet: { level: 0 }, spacing: { after: 40 } }))
  }

  const document = new Document({
    creator: data.profile.name,
    title: `${data.profile.name} — Resume`,
    description: data.profile.title,
    sections: [{
      properties: {
        page: {
          margin: { top: 800, right: 900, bottom: 800, left: 900 },
        },
      },
      children: paragraphs,
    }],
    styles: {
      paragraphStyles: [{
        id: 'Normal',
        name: 'Normal',
        run: { font: 'Aptos', size: 20, color: '24313D' },
        paragraph: { alignment: AlignmentType.LEFT, spacing: { after: 70 } },
      }],
    },
  })

  const file = await Packer.toBlob(document)
  downloadBlob(file, 'Pratiksha-Patil-Resume.docx')
}
