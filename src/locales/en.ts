const en = {
  nav: {
    solution: 'Solution',
    how: 'How it works',
    modules: 'Modules',
    
    integrations: 'Integrations',
    scenarios: 'Use cases',
    faq: 'FAQ',
    demo: 'Get demo',
  },

  hero: {
    eyebrow: 'Enterprise Identity Management',
    title: 'Full control over access and identities',
    subtitle:
      'Automate access management, reduce information security risks, and pass audits without stress',
    primaryCta: 'Get demo',
    secondaryCta: 'Request presentation',
    noteTitle: 'No implementation required',
    noteText: 'We’ll show the system using real scenarios',
    points: [
      'Centralized access management',
      'Automated identity lifecycle',
      'Visibility and control at the business level',
      'Reduced workload for IT and security teams',
    ],
  },

  problems: {
    eyebrow: 'Challenges',
    title: 'When access management gets out of control',
    subtitle:
      'In most companies, access management processes remain fragmented and non-transparent',
    topCards: [
      {
        title: 'Access is granted manually via email requests',
      },
      {
        title: 'Former employees retain access',
      },
    ],
    bottomCards: [
      {
        title: 'Approval takes days or even weeks',
      },
      {
        title: 'Audit preparation turns into stress',
      },
      {
        title: 'Access matrices are managed in Excel or missing entirely',
      },
      {
        title: 'There is no unified view of user permissions',
      },
    ],
    resultLabel: 'Result',
    resultText:
      'As a result, the company loses control, time, and is exposed to security risks',
  },

  how: {
    eyebrow: 'How it works?',
    title: 'Access is granted automatically from day one',
    subtitle:
      'IDMX builds access management based on a predefined role and permissions matrix',
    extraLabel: 'If additional access is required',
    topSteps: [
      {
        title: 'Employee role',
        text: 'The system determines the employee’s position and department',
      },
      {
        title: 'Basic access',
        text: 'Permissions are assigned according to the access matrix',
      },
      {
        title: 'Accounts',
        text: 'Accounts are created automatically',
      },
      {
        title: 'Ready to work',
        text: 'The employee receives access without delays',
      },
    ],
    bottomSteps: [
      {
        step: '1',
        title: 'Request',
        text: 'The user submits a request through the self-service portal',
      },
      {
        step: '2',
        title: 'Approval',
        text: 'The system routes the request through the approval workflow',
      },
      {
        step: '3',
        title: 'Provisioning',
        text: 'After approval, access is granted automatically',
      },
      {
        step: '4',
        title: 'Control',
        text: 'All actions are logged and available for control and audit',
      },
    ],
  },

  solution: {
    eyebrow: 'Solution',
    title: 'Unified access management system',
    subtitle:
      'IDMX is an enterprise Identity Management platform that brings identities, access management, and control together in a single system.',
    cards: [
      {
        title: 'All access is managed from a single system',
        size: 'solution-card--small',
      },
      {
        title: 'The access matrix becomes transparent and manageable',
        size: 'solution-card--wide',
      },
      {
        title: 'Access is granted automatically based on rules',
        size: 'solution-card--wide',
      },
      {
        title: 'Full control over access at every level',
        size: 'solution-card--small',
      },
    ],
    resultLabel: 'Result',
    resultText:
      'IDMX turns chaotic processes into a manageable and controlled system',
  },
  modulesSection: {
  eyebrow: 'Modules',
  title: 'Key platform modules',
  description: 'IDMX brings together access management, process automation, and security control in a single system.',
  items: [
    {
      title: 'Access Matrix',
      subtitle: 'Manageable role model',
      features: [
        'Definition of baseline roles and access rights',
        'Automation of identity lifecycle',
        'Centralized access rights management',
        'Control over access distribution',
      ],
    },
    {
      title: 'Identity Management (IDM)',
      subtitle: 'Identity lifecycle management',
      features: [
        'Automatic account creation',
        'Access changes during transfers',
        'Timely blocking on termination',
        'Access relevance is maintained automatically',
      ],
    },
    {
      title: 'Self-service portal',
      subtitle: 'Convenience for users, control for business',
      features: [
        'Request submission in a single interface',
        'Status tracking',
        'History of all operations',
      ],
    },
    {
      title: 'Audit and reporting',
      subtitle: 'Transparency for control and compliance',
      features: [
        'History of all access changes',
        'Automatic identity audit',
        'Detailed reporting',
      ],
    },
  ],
},
businessEffects: {
  eyebrow: 'Business impact',
  title: 'Costs go down, control gets stronger',
  subtitle: 'IDMX creates measurable value for business',
  hero: {
    value: 'Up to 80%',
    text: 'reduction in access provisioning time',
  },
  items: [
    {
      icon: 'load',
      title: 'Reduced workload for IT teams',
      text: 'Reduce operational workload by up to 60%',
    },
    {
      icon: 'human',
      title: 'Minimizing the human factor',
      text: 'Fewer errors in access assignment',
    },
    {
      icon: 'process',
      title: 'Better process transparency',
      text: 'Full visibility of all actions',
    },
    {
      icon: 'audit',
      title: 'Faster audit preparation',
      text: 'Prepare for audits in hours',
    },
  ],
},

integrations: {
  eyebrow: 'Integrations',
  title: 'Fast connection to existing infrastructure',
  subtitle: 'IDMX fits naturally into your corporate IT landscape',
  center: {
    title: 'Centralized management',
    text: 'IDMX works on top of your existing infrastructure and brings access management, account lifecycle, and control into a single system.',
  },
  items: {
    top: {
      title: 'Active Directory & LDAP',
      text: 'Automatic processing of HR changes and lifecycle events',
    },
    left: {
      title: 'HR systems',
      text: 'Automatic processing of HR changes and lifecycle events',
    },
    right: {
      title: 'ERP platforms',
      text: 'Connection with business systems, roles, and employee identity data.',
    },
    bottomLeft: {
      title: 'Mail services',
      text: 'Management of corporate accounts and access to email services.',
    },
    bottomRight: {
      title: 'Business applications',
      text: 'Unified provisioning and deprovisioning of access across enterprise applications',
    },
  },
},
ctaFinal: {
  title: 'Take access management under full control',
  subtitle: 'IDMX is not just a system, but the foundation of a secure and manageable IT environment.',
  button: 'Get a demo',
},
faqSection: {
  eyebrow: 'FAQ',
  title: 'Frequently asked questions',
  items: [
    {
      question: 'How long does implementation take?',
      answer:
        'The timeline depends on the scale of the infrastructure, the number of integrations, and the company’s requirements. If needed, a pilot launch can be carried out in a limited environment.',
    },
    {
      question: 'Can it be integrated with our systems?',
      answer:
        'Yes, IDMX supports integration with most corporate solutions, including HR systems, Active Directory, mail services, and other data sources.',
    },
    {
      question: 'Is the solution suitable for large companies?',
      answer:
        'Yes, the system is designed for scalability and stable operation in complex distributed infrastructures with a large number of users and accounts.',
    },
    {
      question: 'How is security ensured?',
      answer:
        'Security is ensured through a role-based access model, action logging, centralized control, and full transparency of approval and access management processes.',
    },
  ],
},
scenariosSection: {
  eyebrow: 'Use Cases',
  title: 'Practical use in daily processes',
  subtitle:
    'IDMX automates key access management scenarios — from onboarding to privileged access control and audit readiness.',

  labels: {
    effect: 'Effect',
    application: 'Use case',
  },

  items: [
    {
      title: 'Access is ready from day one',
      text: 'Automatic access provisioning from the first working day.',
      previewTitle: 'Access for new employees without manual work',
      previewText:
        'The system determines roles, launches approval, and grants access without email chains or spreadsheets.',
      metric: {
        value: 'Up to 80%',
        text: 'reduction in access provisioning time',
      },
      extra: {
        effect: 'Employees start working without delays',
        application: 'HR, IT, managers',
      },
      steps: [
        {
          icon: 'create',
          title: 'Creation',
          text: 'The employee appears in the system',
        },
        {
          icon: 'rules',
          title: 'Access definition',
          text: 'Roles are assigned automatically',
        },
        {
          icon: 'approve',
          title: 'Approval',
          text: 'The request goes through the approval flow',
        },
        {
          icon: 'access',
          title: 'Provisioning',
          text: 'Access is granted in connected systems',
        },
      ],
    },

    {
      title: 'HR changes automatically update access rights',
      text: 'Any personnel change is immediately reflected in access rights.',
      previewTitle: 'Current access rights for any HR change',
      previewText:
        'The system automatically recalculates access rights when employees are transferred, leave the company, or change roles.',
      metric: {
        value: '24/7',
        text: 'up-to-date access without manual checks',
      },
      extra: {
        effect: 'Access always matches the current role',
        application: 'HR, security, system owners',
      },
      steps: [
        {
          icon: 'sync',
          title: 'Change',
          text: 'HR records the update',
        },
        {
          icon: 'rules',
          title: 'Recalculation',
          text: 'The system analyzes access rights',
        },
        {
          icon: 'control',
          title: 'Update',
          text: 'Access rights are updated automatically',
        },
      ],
    },

    {
      title: 'Contractors get access only for the required period',
      text: 'Temporary access with automatic revocation.',
      previewTitle: 'Contractor control without risks',
      previewText:
        'Access is limited by time and scope and is automatically revoked without manual control.',
      metric: {
        value: '0',
        text: 'excess access after work is completed',
      },
      extra: {
        effect: 'Lower risks when working with contractors',
        application: 'Security, IT',
      },
      steps: [
        {
          icon: 'create',
          title: 'Request',
          text: 'Access is created with time and scope restrictions',
        },
        {
          icon: 'approve',
          title: 'Approval',
          text: 'Access is approved based on the risk level',
        },
        {
          icon: 'control',
          title: 'Auto-revocation',
          text: 'Access is automatically revoked when the period ends',
        },
      ],
    },

    {
      title: 'Audit without spreadsheets and manual checks',
      text: 'Complete history and transparency of access rights.',
      previewTitle: 'Audit preparation without chaos',
      previewText:
        'The full history of access rights and changes is stored in the system and is available for review.',
      metric: {
        value: '100%',
        text: 'transparency of access and changes',
      },
      extra: {
        effect: 'Audit preparation takes less time',
        application: 'Security, audit, compliance',
      },
      steps: [
        {
          icon: 'control',
          title: 'Storage',
          text: 'All changes are recorded in the system',
        },
        {
          icon: 'rules',
          title: 'Review',
          text: 'Access and history are checked quickly',
        },
        {
          icon: 'access',
          title: 'Reporting',
          text: 'Data is ready for analysis and audit',
        },
      ],
    },

    {
      title: 'Access to personal data stays under strict control',
      text: 'Special privileges and enhanced control.',
      previewTitle: 'Control of privileges for personal data access',
      previewText:
        'The system helps track who received access to personal data and other sensitive resources, when it was granted, and on what basis.',
      metric: {
        value: '100%',
        text: 'transparency of privileged access',
      },
      extra: {
        effect: 'Lower risks when working with personal data',
        application: 'Security, compliance, sensitive system owners',
      },
      steps: [
        {
          icon: 'rules',
          title: 'Policies',
          text: 'Special rules apply to this type of access',
        },
        {
          icon: 'approve',
          title: 'Control',
          text: 'The request goes through enhanced approval',
        },
        {
          icon: 'control',
          title: 'Monitoring',
          text: 'All changes and assignments are fully tracked',
        },
      ],
    },
  ],
},
footer: {
  description: 'Full control over access and identities for your business',
  linksLeft: [
    { label: 'Challenges', href: '#problems' },
    { label: 'Solution', href: '#solution' },
    { label: 'How it works', href: '#how' },
    { label: 'Modules', href: '#modules' },
    { label: 'Business impact', href: '#effects' },
  ],
  linksRight: [
    { label: 'Integrations', href: '#integrations' },
    { label: 'Use cases', href: '#scenarios' },
    
    { label: 'FAQ', href: '#faq' },
  ],
  email: 'Info@idmx.kz',
  phone: '+7 777 777 77 77',
  primaryCta: {
    label: 'Request demo',
    href: '#demo',
  },
  secondaryCta: {
    label: 'Support',
    href: '#support',
  },
  copyright: '© 2026 IDMX. All rights reserved.',
  legal: [
    { label: 'Privacy policy', href: '#' },
    { label: 'Terms of use', href: '#' },
  ],
},
demoModal: {
  title: 'Request a product demo',
  subtitle: 'We will show how IDMX helps automate access management, reduce risks, and simplify audits.',
  submit: 'Submit request',
  note: 'After submitting your request, we will contact you shortly.',
  success: 'Request sent. We will contact you soon.',
  emailError: 'Please enter a valid email',
  fields: {
    firstName: 'First name',
    lastName: 'Last name',
    phone: 'Phone',
    email: 'Email',
    company: 'Company name',
    comment: 'Note...',
  },
},

} as const

export default en