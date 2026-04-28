const en = {
  nav: {
    solution: 'What you get',
    how: 'How it works',
    modules: 'Modules',
    integrations: 'Integrations',
    scenarios: 'Use cases',
    faq: 'FAQ',
    demo: 'Request demo',
  },
  hero: {
    eyebrow: 'Enterprise Identity Management',
    title: 'Every access right that is not revoked is a risk you do not yet see',
    subtitle:
      'IDMX gives you the full picture: who has access, on what basis, who approved it, and when it expires. Provable control — not just for audits, but always.',
    primaryCta: 'Check whether there is a problem',
    noteTitle: 'Before implementation',
    noteText: 'We will show real scenarios: hiring, transfer, termination, audit',
    points: [
      'Centralized access management',
      'User account lifecycle automation',
      'Transparency and control at the business level',
      'Reduced operational workload for IT and security teams',
    ],
    stats: [
      {
        value: '70%',
        text: 'of successful attacks use vulnerabilities in access rights and configuration',
      },
      {
        value: '42%',
        text: 'of organizations do not know how many “dead” accounts they have',
      },
      {
        value: '3+ days',
        text: 'average delay in blocking former employees in companies without IDM',
      },
    ],
  },
  problems: {
    eyebrow: 'BLIND SPOTS',
    title: 'What you do not see — attackers do',
    subtitle:
      'Without an IDM system, security teams manage access blindly. Each of these situations is a real vulnerability in your infrastructure right now.',

    topCards: [
      {
        title: 'Access without an owner',
        description:
          'An employee has left, but the account is still active. No owner means no accountability. There is a risk.',
      },
      {
        title: 'Access without justification',
        description:
          'A right was granted — but by whom, when, and why? There is an email thread, but the system is silent. The auditor will ask.',
      },
    ],

    bottomCards: [
      {
        title: 'The access matrix is outdated',
        description:
          'The Excel file was updated six months ago. The real picture of access rights exists only in the heads of IT employees.',
      },
      {
        title: 'Audit means manual data collection',
        description:
          'Exports from different systems, manual reconciliation, weeks of preparation. And the result is still questionable.',
      },
      {
        title: 'Excess privileges accumulate',
        description:
          'When roles change, old rights are not revoked. Employees accumulate access rights for years that they no longer need.',
      },
      {
        title: 'No decision chain',
        description:
          'Access was granted — but who approved it? On what basis? Without IDM, this cannot be proven to auditors or management.',
      },
    ],

    resultLabel: 'THE MAIN PROBLEM',
    resultText:
      'The CISO is responsible for risks they cannot see. IDMX makes every access right visible, justified, and provable.',
  },
  solution: {
    eyebrow: 'WHAT YOU GET',
    title: 'Full origin chain for every access right',
    subtitle:
      'Who requested it. Who approved it. Based on which rule. When it expires. IDMX is a single source of truth for access across the entire infrastructure.',

    cards: [
      {
        title: 'Visibility without blind spots',
        description:
          'A single access database: who has access, to which systems, and on what basis — in real time. No exports or requests to IT.',
      },
      {
        title: 'Reduced attack surface',
        description:
          'Automatic access revocation on termination or role change. Excess privileges are identified and removed on time.',
      },
      {
        title: 'Provability of every decision',
        description:
          'A full audit trail: who granted access, who approved it, and according to which business rule. Answers for auditors — in minutes.',
      },
      {
        title: 'Audit readiness — always',
        description:
          'Not only before an inspection, but continuously. Access status reports for regulators or the board of directors — in a few clicks.',
      },
    ],

    resultLabel: 'What this gives you',
    resultText:
      'A CISO who can answer at any moment “who has access, why, and on what basis” is protected professionally and legally.',
  },
  how: {
    eyebrow: 'How does it work?',
    title: 'Every team change instantly updates access rights',
    subtitle:
      'New employee, transfer, termination, contractor — IDMX reacts automatically, without IT department involvement.',
    extraLabel: 'If additional access is required',
    topSteps: [
      {
        title: 'New employee',
        text: 'The system identifies the employee’s position and department',
      },
      {
        title: 'Basic access rights',
        text: 'Rights are determined based on the access matrix',
      },
      {
        title: 'User accounts',
        text: 'User accounts are created automatically',
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
        text: 'All actions are recorded and available for control and audit',
      },
    ],
  },

  modulesSection: {
    eyebrow: 'Modules',
    title: 'Key platform modules',
    description: 'IDMX combines access management, process automation, and security control in a single system.',
    items: [
      {
        title: 'Access matrix',
        subtitle: 'Managed role-based model',
        features: [
          'Creation of basic roles and access rights',
          'Foundation for user account lifecycle automation',
          'Centralized rights management',
          'Control over access distribution',
        ],
      },
      {
        title: 'Identity Management (IDM)',
        subtitle: 'User account lifecycle management',
        features: [
          'Automatic user account creation',
          'Rights changes during employee transfers',
          'Timely blocking after termination',
          'Access rights remain up to date automatically',
        ],
      },
      {
        title: 'Self-service portal',
        subtitle: 'Convenience for users, control for the business',
        features: [
          'Request submission in a single interface',
          'Status tracking',
          'History of all operations',
        ],
      },
      {
        title: 'Audit and reporting',
        subtitle: 'Transparency for control and inspections',
        features: [
          'History of all access changes',
          'Automatic audit of user accounts',
          'Detailed report generation',
        ],
      },
    ],
  },
  businessEffects: {
    eyebrow: 'WHAT THE CISO GETS',
    title: 'Control that can be shown and proven',
    subtitle: 'IDMX changes the CISO’s position — from reactive firefighting to provable risk management.',
    hero: {
      value: '21.6',
      text: 'maximum fine for a personal data leak in Kazakhstan',
    },
    items: [
      {
        icon: 'load',
        title: 'Criminal liability',
        text: 'Criminal liability is being introduced in Kazakhstan for large-scale personal data leaks. IDMX is proof that control existed.',
      },
      {
        icon: 'human',
        title: 'Reduced insider threats',
        text: 'Excess privileges are detected automatically. The principle of least privilege works in the real configuration — not just on paper.',
      },
      {
        icon: 'process',
        title: 'Position before management',
        text: 'An access status report for the board of directors — in a few clicks. Not “we are working on it”, but “here is the evidence”.',
      },
      {
        icon: 'audit',
        title: 'Audit in hours',
        text: 'Ready-made access status reports for regulators, ISO checks, or internal audits. Without a week of manual work.',
      },
    ],
  },

  integrations: {
    eyebrow: 'Integrations',
    title: 'Fast connection to existing infrastructure',
    subtitle: 'IDMX fits easily into the corporate IT landscape',
    center: {
      title: 'Centralized management',
      text: 'IDMX works on top of your existing infrastructure and combines access management, user accounts, and control in one system.',
    },
    items: {
      top: {
        title: 'Active Directory and LDAP',
        text: 'Corporate user account management.',
      },
      left: {
        title: 'HR systems',
        text: 'Automatic retrieval of HR changes and lifecycle events.',
      },
      right: {
        title: 'ERP platforms',
        text: 'Connection with business systems, roles, and employee account data.',
      },
      bottomLeft: {
        title: 'Email services',
        text: 'Management of access to corporate email.',
      },
      bottomRight: {
        title: 'Corporate applications',
        text: 'Centralized access management across all company application systems with automatic execution.',
      },
    },
  },
  ctaFinal: {
    title: 'See what full access transparency looks like',
    subtitle: 'IDMX is not just a system, but the foundation of a controlled and secure IT environment.',
    button: 'Request demo',
  },
  scenariosSection: {
    eyebrow: 'Use cases',
    title: 'Practical application in daily processes',
    subtitle:
      'IDMX automates key access management scenarios — from employee onboarding to privileged access control and audit.',

    labels: {
      effect: 'Effect',
      application: 'Application',
    },

    items: [
      {
        effect: 'Risk reduction',
        application: 'Security, IT',
        title: 'An employee starts — access rights are already ready',
        text: 'Automatic access provisioning from the first working day.',

        previewTitle: 'Access for a new employee without manual work',
        previewText:
          'The system identifies roles, starts approval, and grants access without emails or Excel.',

        metric: {
          value: 'Up to 80%',
          text: 'reduction in access provisioning time',
        },

        result: 'The employee starts working without delays.',

        extra: {
          effect: 'Faster employee productivity',
          application: 'HR, IT, managers',
        },

        steps: [
          { icon: 'create', title: 'Creation', text: 'The employee appears in the system' },
          { icon: 'rules', title: 'Rights definition', text: 'Roles are assigned automatically' },
          { icon: 'approve', title: 'Approval', text: 'The approval workflow is completed' },
          { icon: 'access', title: 'Provisioning', text: 'Access rights are granted to systems' },
        ],
      },

      {
        icon: 'hr',
        title: 'HR changes — rights update automatically',
        text: 'Any HR changes are immediately reflected in access rights.',

        previewTitle: 'Up-to-date access for every HR change',
        previewText:
          'The system automatically recalculates rights during transfers, terminations, or role changes.',

        metric: {
          value: '24/7',
          text: 'rights stay up to date without manual checks',
        },

        result: 'Rights always match the current role.',

        extra: {
          effect: 'No outdated access rights',
          application: 'HR, security, system owners',
        },

        steps: [
          { icon: 'sync', title: 'Change', text: 'HR records the change' },
          { icon: 'rules', title: 'Recalculation', text: 'The system analyzes the rights' },
          { icon: 'control', title: 'Update', text: 'Access rights are updated' },
        ],
      },

      {
        icon: 'contractors',
        title: 'Contractors receive access only for the required period',
        text: 'Temporary access rights with automatic revocation.',

        previewTitle: 'Contractor control without risks',
        previewText:
          'Access is limited by time and scope, and is automatically disabled.',

        metric: {
          value: '0',
          text: 'extra access rights after work is completed',
        },

        result: 'Contractors do not retain access rights.',

        extra: {
          effect: 'Risk reduction',
          application: 'Security, IT',
        },

        steps: [
          { icon: 'create', title: 'Request', text: 'Access is created' },
          { icon: 'approve', title: 'Approval', text: 'Access is confirmed' },
          { icon: 'control', title: 'Auto-revocation', text: 'Access is disabled' },
        ],
      },

      {
        icon: 'audit',
        title: 'Audit without Excel and manual checks',
        text: 'Full history and transparency of access rights.',

        previewTitle: 'Audit preparation without chaos',
        previewText:
          'The entire history of access rights and changes is stored in the system.',

        metric: {
          value: '100%',
          text: 'access transparency',
        },

        result: 'Audit is completed faster.',

        extra: {
          effect: 'Process transparency',
          application: 'Security, audit, compliance',
        },

        steps: [
          { icon: 'control', title: 'Storage', text: 'Everything is recorded' },
          { icon: 'rules', title: 'Verification', text: 'Access rights are checked' },
          { icon: 'access', title: 'Report', text: 'Ready data' },
        ],
      },

      {
        icon: 'critical',
        title: 'Access to personal data under strict control',
        text: 'Special privileges and enhanced control.',

        previewTitle: 'Control of privileges to personal data',
        previewText:
          'The system tracks who received access to personal data, when, and why.',

        metric: {
          value: '100%',
          text: 'privilege control',
        },

        result: 'Data leakage risks are minimized.',

        extra: {
          effect: 'Personal data security',
          application: 'Security, compliance',
        },

        steps: [
          { icon: 'rules', title: 'Policies', text: 'Special access rules' },
          { icon: 'approve', title: 'Control', text: 'Enhanced approval' },
          { icon: 'control', title: 'Monitoring', text: 'Full transparency' },
        ],
      },
    ],
  },

  faqSection: {
    eyebrow: 'FAQ',
    title: 'Frequently asked questions',
    items: [
      {
        question: 'How long does implementation take?',
        answer:
  'Depends on the scale and readiness of the infrastructure.\n\n' +
  'IDMX implementation is carried out in stages: audit of the current infrastructure, requirements gathering, integration with AD/LDAP and HR systems, configuration of the access matrix, role model and approval workflows, testing, administrator training, pilot launch in a single department, followed by full rollout.\n\n' +
  'For companies with up to 500 employees, the basic setup can be launched within 4–6 weeks. Large enterprises with multiple systems typically require 8–12 weeks.',
      },
      {
        question: 'Can it be integrated with our systems?',
        answer:
          'Yes, IDMX supports integration with most corporate solutions, including HR systems, Active Directory, email services, and other data sources.',
      },
      {
        question: 'Is the solution suitable for large companies?',
        answer:
          'Yes, the system is designed for scalability and stable operation in complex distributed infrastructure with many users and accounts.',
      },
      {
        question: 'How is security ensured?',
        answer:
          'Security is ensured through a role-based access model, action logging, centralized control, and transparency of approval and access management processes.',
      },
    ],
  },
  footer: {
    description: 'Full control over access and user accounts for your business',
    linksLeft: [
      { label: 'Problems', href: '#problems' },
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
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Use', href: '#' },
    ],
  },
  demoModal: {
    title: 'Request a product demo',
    subtitle: 'We will show how IDMX helps automate access management, reduce risks, and simplify audits.',
    submit: 'Send request',
    note: 'After submitting the request, we will contact you shortly.',
    success: 'Request sent. We will contact you soon.',
    emailError: 'Enter a valid e-mail',
    fields: {
      firstName: 'First name',
      lastName: 'Last name',
      phone: 'Phone',
      email: 'Email',
      company: 'Company name',
      comment: 'Note...',
    },
    successTitle: 'Request received',
    successText: 'We will contact you shortly.',
    close: 'Close',

    errors: {
      required: 'Required field',
      email: 'Enter a valid email',
      phone: 'Enter a valid phone number',
    },
  },
} as const

export default en
