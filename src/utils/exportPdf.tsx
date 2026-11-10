import { pdf } from '@react-pdf/renderer'
import { ResumePdfDocument } from '../components/ResumePdfDocument'
import type { ResumeData } from '../types/resume'
import { downloadBlob } from './downloadBlob'

export async function downloadPdf(data: ResumeData) {
  const file = await pdf(<ResumePdfDocument data={data} />).toBlob()
  downloadBlob(file, 'Pratiksha-Patil-Resume.pdf')
}
