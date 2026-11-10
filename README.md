# Pratiksha Patil — Resume Portfolio

A responsive, recruiter-focused portfolio built from the supplied resume. The resume content lives in one typed data source and is rendered as accessible HTML, a downloadable PDF, and a downloadable Word document.

## Stack

- React 18, TypeScript, Vite
- Tailwind CSS 4 and custom responsive design tokens
- Framer Motion with reduced-motion support
- React Router
- `@react-pdf/renderer` for PDF generation
- `docx` for Word export
- Vitest, Testing Library, and jsdom

The PDF and DOCX export code is loaded only when a visitor requests that format, keeping the initial portfolio bundle lighter.

## Run locally

```sh
npm install
npm run dev
```

## Commands

```sh
npm run build       # TypeScript project checks and production build
npm run lint        # ESLint
npm test            # Unit and UI tests
npm run test:watch  # Watch tests during development
npm run preview     # Preview the production build
```

## Project structure

```text
src/
  components/       # Reusable resume document components
  data/             # Typed, resume-backed content
  hooks/            # Theme state and persistence
  test/             # Test setup
  types/            # Resume interfaces
  utils/            # PDF and DOCX exports
  App.tsx           # Accessible one-page portfolio and route entry
  App.css           # Responsive portfolio components
  index.css         # Theme tokens, Tailwind import, global styles
```

## Content and profile links

Edit [`src/data/resume.ts`](./src/data/resume.ts) to update resume content. LinkedIn and GitHub URLs were not present in the supplied resume, so their profile buttons remain hidden until `linkedinUrl` and `githubUrl` are set in `resume.profile`. No social accounts or career details are guessed.

The contact form opens the visitor's default email application with the message addressed to the supplied email address. It does not send or store form data on a server.

## SEO and accessibility

The document includes a descriptive title, summary, keyword, Open Graph, and Twitter metadata. Semantic headings, keyboard-visible focus states, a skip link, labelled fields, responsive layouts, and reduced-motion behavior are included. Content is rendered as selectable HTML rather than embedded in imagery, supporting assistive technology and ATS text extraction.

Lighthouse performance depends on the deployment environment and browser; run Lighthouse against the deployed URL to validate the 95+ target.

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for AWS Amplify, S3 + CloudFront, Netlify, Vercel, and GitHub Pages instructions.
