import type { ResumeData } from '../types/resume'

export const resume: ResumeData = {
  profile: {
    name: 'PRATIKSHA PATIL',
    title: 'Senior Frontend Engineer',
    location: 'Pune, India',
    phone: '7887429993',
    email: 'pratikshap313@gmail.com',
    experienceYears: '5.8 years',
    summary:
      'Senior frontend engineer and React specialist with 5.8 years of experience building enterprise web and mobile applications in React.js, JavaScript (ES6+), TypeScript and Redux Toolkit across insurance, logistics and healthcare. Owns features end to end—from requirements and Figma handoff through responsive, accessible UI development, REST API integration, testing, QA and deployment. Experienced in frontend module leadership and mentoring 2–3 junior developers, with hands-on strengths in reusable components, performance optimization, legacy code rewrite and module migration. Currently at TCS on a US client Accident and Health insurance provider web application, contributing to UI redesign and ADA accessibility improvements. Uses GitHub Copilot, Claude AI, agentic AI, AI agent creation and prompt engineering to accelerate development and optimize AI usage and cost. Experienced in Jest, Playwright, React Native, and cross-functional collaboration with backend, QA and product teams.',
    linkedinUrl: '',
    githubUrl: '',
  },
  skills: [
    {
      category: 'Frontend',
      items: ['React.js', 'React Hooks', 'Functional Components', 'JavaScript (ES6+)', 'TypeScript', 'JSX', 'HTML5', 'CSS3', 'Micro Frontends', 'React Native'],
    },
    {
      category: 'State Management',
      items: ['Redux Toolkit', 'Redux', 'Redux Saga', 'Redux Thunk', 'Zustand'],
    },
    {
      category: 'UI Development',
      items: ['Reusable Components', 'Component-Based Architecture', 'Responsive Web Design', 'Fluent UI', 'Material UI', 'Tailwind CSS', 'Design System', 'Figma (design handoff)'],
    },
    {
      category: 'Accessibility',
      items: ['ADA Compliance', 'ARIA', 'Semantic HTML', 'Keyboard Navigation', 'NVDA screen reader', 'WCAG (working knowledge)'],
    },
    {
      category: 'API Integration',
      items: ['REST APIs', 'GraphQL', 'Postman', 'Insomnia', 'Bruno', 'Proxyman', 'Magento', 'CMS: Adobe Experience Manager (AEM) content integration'],
    },
    {
      category: 'Testing and Quality',
      items: ['Jest', 'Playwright', 'UI Automation', 'Unit Testing', 'Code Coverage', 'Debugging', 'Code Reviews'],
    },
    {
      category: 'Performance',
      items: ['Lazy Loading', 'Virtualization', 'Code Optimization'],
    },
    {
      category: 'Build, CI/CD and Tools',
      items: ['Vite', 'Git', 'GitHub', 'Jenkins', 'Azure DevOps', 'Azure Pipelines', 'AWS', 'GitHub Copilot'],
    },
    {
      category: 'Practices',
      items: ['SAFe Agile', 'Agile', 'Waterfall', 'QA Collaboration', 'Backend Collaboration', 'Product Support'],
    },
    {
      category: 'AI-Assisted Development',
      items: ['GitHub Copilot', 'Claude AI', 'Agentic AI', 'AI Agent Creation', 'Prompt Engineering', 'Cost-aware AI Usage'],
    },
  ],
  experience: [
    {
      title: 'IT Analyst – Senior Frontend Engineer',
      organization: 'Tata Consultancy Services (TCS)',
      focus: 'Senior Frontend Engineer',
      domain: 'US Client',
      period: 'Aug 2026 – Present',
      projects: [
        {
          id: 'accident-health-insurance',
          title: 'Accident and Health Insurance Provider Web Application',
          client: 'US Client',
          techStack: ['React.js', 'Vite', 'TypeScript', 'JavaScript', 'Redux Toolkit', 'Micro Frontends', 'SCSS', 'CSS3', 'REST APIs', 'Jest', 'Playwright', 'NVDA', 'GitHub', 'Azure DevOps', 'Figma'],
          bullets: [
            'Lead the frontend UI module for an Accident and Health insurance provider web application serving four products: accident, hospital indemnity, critical illness and cancer coverage.',
            'Lead UI redesign and React, Vite and TypeScript development; build responsive, reusable React components with SCSS and CSS using frontend best practices.',
            'Guide and mentor 2–3 junior developers through implementation support, code reviews and day-to-day problem solving.',
            'Own UI delivery end to end, including REST API integration, Jest unit tests and Playwright UI automation.',
            'Optimize frontend performance and rewrite or migrate legacy Remix functionality to React while preserving behavior across modules.',
            'Implement ADA accessibility with semantic HTML, ARIA, keyboard navigation and NVDA screen-reader checks.',
            'Attend Agile/Scrum calls, provide daily status updates, and collaborate with QA, backend teams and Product Owners; deploy to QA test environments through Azure DevOps and support monthly releases.',
            'Apply prompt engineering with GitHub Copilot, Claude AI, agentic AI and AI agent creation to accelerate development and optimize AI usage and cost.',
          ],
        },
      ],
    },
    {
      title: 'App Development Senior Analyst',
      organization: 'Accenture',
      period: 'Dec 2023 – Aug 2026',
      projects: [
        {
          id: 'logistics-delivery-platform',
          title: 'Enterprise Logistics and Delivery Management Platform',
          client: 'US Client',
          techStack: ['React.js', 'TypeScript', 'JavaScript', 'Redux Toolkit', 'Fluent UI', 'CSS3', 'REST APIs', 'Jest', 'Insomnia', 'GitHub', 'Jenkins', 'Figma', 'Java backend integration'],
          bullets: [
            'Owned end-to-end feature development for delivery and pickup workflows: refined requirements and acceptance criteria with Product Owners and Scrum Masters, then built, tested and released the features.',
            'Built address correction and address resolution functionality and Track ID search, integrating the REST APIs exposed by the Java backend team.',
            'Applied lazy loading and list virtualization on data-heavy screens to keep the UI responsive with large result sets.',
            'Modernised legacy modules by migrating existing functionality to React, covering both class and functional components.',
            'Translated Figma designs into responsive Fluent UI screens, created prototypes and mock-ups when requirements were unclear, and wrote Jest tests for new code.',
            'Managed the delivery cycle through GitHub pull requests, peer reviews, Jenkins CI/CD deployments, release activities and QA evidence.',
          ],
        },
        {
          id: 'jewellery-ecommerce-mobile-app',
          title: 'Jewellery E-Commerce Mobile Application (React Native)',
          client: 'Indian Client',
          techStack: ['React Native', 'TypeScript', 'JavaScript', 'Redux Toolkit', 'REST APIs', 'Jest', 'Magento', 'AEM', 'Postman', 'Proxyman', 'Git', 'GitHub', 'Figma'],
          bullets: [
            'Developed Android and iOS screens from scratch in React Native and TypeScript, using Redux Toolkit for state and responsive styling for different device sizes.',
            'Integrated REST APIs across Magento, AEM and other backend services, working with the API teams to settle contracts and fix integration issues.',
            'Traced API and application defects with Proxyman and Postman, and wrote Jest unit tests with coverage tracking.',
            'Ran Android and iOS builds through CI/CD pipelines, generated build numbers and shared builds with QA for validation.',
          ],
        },
      ],
    },
    {
      title: 'Associate Consultant',
      organization: 'Atos Syntel',
      period: 'Mar 2021 – Nov 2023',
      projects: [
        {
          id: 'healthcare-provider-web-app',
          title: 'Healthcare Provider Web Application',
          client: 'US Client',
          techStack: ['React.js', 'TypeScript', 'Redux Saga', 'Material UI', 'Tailwind CSS', 'Design System', 'Jest', 'Git', 'Azure Pipelines'],
          bullets: [
            'Developed responsive web screens and new features from scratch in React.js, TypeScript and Redux Saga, working from user stories and business requirements.',
            'Built reusable, styled UI components on the project\'s centralised component library (Material UI, Tailwind CSS) and design standards.',
            'Integrated new REST APIs through Redux Saga as part of an application rewrite, modernisation and new feature work.',
            'Wrote Jest unit tests, took part in code reviews and cleaned up code following frontend best practices.',
            'Raised Git pull requests and ran Azure Pipeline deployments to QA, coordinating with testers and cross-functional teams for releases.',
          ],
        },
      ],
    },
  ],
  projects: [
    {
      id: 'accident-health-insurance',
      title: 'Accident and Health Insurance Provider Web Application',
      client: 'Tata Consultancy Services (TCS) · US Client',
      techStack: ['React.js', 'Vite', 'TypeScript', 'Redux Toolkit', 'Micro Frontends'],
      bullets: [],
    },
    {
      id: 'logistics-delivery-platform',
      title: 'Enterprise Logistics and Delivery Management Platform',
      client: 'Accenture · US Client',
      techStack: ['React.js', 'TypeScript', 'Redux Toolkit', 'Fluent UI', 'Jenkins'],
      bullets: [],
    },
    {
      id: 'jewellery-ecommerce-mobile-app',
      title: 'Jewellery E-Commerce Mobile Application (React Native)',
      client: 'Accenture · Indian Client',
      techStack: ['React Native', 'TypeScript', 'Redux Toolkit', 'Magento', 'AEM'],
      bullets: [],
    },
    {
      id: 'healthcare-provider-web-app',
      title: 'Healthcare Provider Web Application',
      client: 'Atos Syntel · US Client',
      techStack: ['React.js', 'TypeScript', 'Redux Saga', 'Material UI', 'Tailwind CSS'],
      bullets: [],
    },
  ],
  certifications: [
    'Microsoft Certified: Azure Fundamentals (AZ-900)',
    'Reinvention with Agentic AI – Accenture',
    'Generative AI Essentials for Software Development',
    'Micro Frontends with React – A Complete Developer\'s Guide',
    'Complete React Developer Course with Hooks and Redux',
    'Complete React Native Hooks Course',
    'Postman API Testing from Scratch',
  ],
  achievements: [
    'Received the Client Award at Accenture for technical excellence, ownership and quality of delivery.',
    'Promoted from Analyst to Senior Analyst at Accenture on the basis of technical performance and delivery ownership.',
    'Published an international journal paper on an IoT-based intelligent jacket during undergraduate studies.',
  ],
  education: {
    degree: 'Bachelor of Engineering in Computer Science',
    institution: 'D. Y. Patil College of Engineering and Technology, Kolhapur',
    result: '70%',
    period: '2019 – 2020',
  },
}
