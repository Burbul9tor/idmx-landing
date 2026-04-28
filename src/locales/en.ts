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
    title: 'Every unrevoked access is a risk you don’t see yet',
    subtitle:
      'IDMX provides full visibility: who has access, on what basis, who approved it, and when it expires. Proven control — not just for audits, but at all times.',
    primaryCta: 'Check if you have a problem',
    noteTitle: 'No implementation required',
    noteText:
      'We will show real scenarios: onboarding, transfer, offboarding, audit',
    points: [
      'Centralized access management',
      'Identity lifecycle automation',
      'Business-level visibility and control',
      'Reduced operational load on IT and security teams',
    ],
    stats: [
      {
        value: '70%',
        text: 'of successful attacks exploit access and configuration vulnerabilities',
      },
      {
        value: '42%',
        text: 'of organizations don’t know how many “orphaned” accounts they have',
      },
      {
        value: '3+ days',
        text: 'average delay in deactivating terminated employees without IDM',
      },
    ],
  },

  problems: {
    eyebrow: 'BLIND SPOTS',
    title: 'What you don’t see — attackers do',
    subtitle:
      'Without an IDM system, security teams manage access blindly. Each of these situations is a real vulnerability in your infrastructure right now.',

    topCards: [
      {
        title: 'Access without an owner',
        description:
          'An employee is terminated, but the account is still active. No owner — no accountability. Only risk.',
      },
      {
        title: 'Access without justification',
        description:
          'Access was granted — but by whom, when, and why? There’s an email, but no system record. Auditors will ask.',
      },
    ],

    bottomCards: [
      {
        title: 'Access matrix is outdated',
        description:
          'The Excel file was last updated months ago. The real access landscape exists only in IT’s head.',
      },
      {
        title: 'Audit is manual',
        description:
          'Data from multiple systems, manual reconciliation, weeks of preparation — and still no confidence in the result.',
      },
      {
        title: 'Privileges accumulate over time',
        description:
          'When roles change, old permissions remain. Employees accumulate unnecessary access for years.',
      },
      {
        title: 'No decision traceability',
        description:
          'Access is granted — but who approved it? On what basis? Without IDM, this cannot be proven.',
      },
    ],

    resultLabel: 'CORE PROBLEM',
    resultText:
      'The CISO is responsible for risks they cannot see. IDMX makes every access visible, justified, and provable.',
  },

  solution: {
    eyebrow: 'WHAT YOU GET',
    title: 'Full access lineage for every permission',
    subtitle:
      'Who requested it. Who approved it. Based on which rule. When it expires. IDMX is the single source of truth for access across your infrastructure.',

    cards: [
      {
        title: 'Full visibility',
        description:
          'A unified access database: who has access to what and why — in real time. No exports or IT requests needed.',
      },
      {
        title: 'Reduced attack surface',
        description:
          'Automatic access revocation on termination or role change. Excessive privileges are detected and removed proactively.',
      },
      {
        title: 'Provable decisions',
        description:
          'Complete audit trail: who granted access, who approved it, and under which business rule. Answers for auditors in minutes.',
      },
      {
        title: 'Always audit-ready',
        description:
          'Not just during audits — continuously. Generate reports for regulators or the board in a few clicks.',
      },
    ],

    resultLabel: 'What this gives you',
    resultText:
      'A CISO who can answer “who has access, why, and on what basis” at any moment is protected both professionally and legally.',
  },

  how: {
    eyebrow: 'How it works',
    title: 'Every change in your organization instantly updates access',
    subtitle:
      'New hire, transfer, termination, contractor — IDMX reacts automatically, without IT involvement.',
    extraLabel: 'If additional access is required',

    topSteps: [
      {
        title: 'New employee',
        text: 'The system determines position and department',
      },
      {
        title: 'Base access',
        text: 'Permissions are assigned based on access matrix',
      },
      {
        title: 'Accounts',
        text: 'Accounts are created automatically',
      },
      {
        title: 'Ready to work',
        text: 'Employee gets access without delays',
      },
    ],

    bottomSteps: [
      {
        step: '1',
        title: 'Request',
        text: 'User submits a request via self-service portal',
      },
      {
        step: '2',
        title: 'Approval',
        text: 'The system routes the request for approval',
      },
      {
        step: '3',
        title: 'Provisioning',
        text: 'Access is granted automatically after approval',
      },
      {
        step: '4',
        title: 'Control',
        text: 'All actions are logged and available for audit',
      },
    ],
  },

  modulesSection: {
    eyebrow: 'Modules',
    title: 'Key platform modules',
    description:
      'IDMX combines access management, process automation, and security control in one system.',
    items: [
      {
        title: 'Access Matrix',
        subtitle: 'Role-based model',
        features: [
          'Define base roles and permissions',
          'Foundation for lifecycle automation',
          'Centralized access control',
          'Access distribution governance',
        ],
      },
      {
        title: 'Identity Management (IDM)',
        subtitle: 'Identity lifecycle management',
        features: [
          'Automatic account creation',
          'Access updates on transfers',
          'Timely deactivation on termination',
          'Always up-to-date access',
        ],
      },
      {
        title: 'Self-service portal',
        subtitle: 'Convenience for users, control for business',
        features: [
          'Unified request interface',
          'Status tracking',
          'Full history of actions',
        ],
      },
      {
        title: 'Audit & reporting',
        subtitle: 'Transparency for control and compliance',
        features: [
          'Full access history',
          'Automated audits',
          'Detailed reporting',
        ],
      },
    ],
  },

  businessEffects: {
    eyebrow: 'WHAT CISO GETS',
    title: 'Control you can prove',
    subtitle:
      'IDMX shifts the CISO role from reactive firefighting to provable risk management.',
    hero: {
      value: '21.6',
      text: 'maximum fine for personal data breach in Kazakhstan',
    },
    items: [
      {
        icon: 'load',
        title: 'Criminal liability',
        text: 'Criminal liability is being introduced for major data breaches. IDMX proves control was in place.',
      },
      {
        icon: 'human',
        title: 'Reduced insider threats',
        text: 'Excessive privileges are automatically detected. Least privilege is enforced in reality, not just policy.',
      },
      {
        icon: 'process',
        title: 'Executive visibility',
        text: 'Access reports for the board in a few clicks — not “we’re working on it”, but “here is proof”.',
      },
      {
        icon: 'audit',
        title: 'Audit in hours',
        text: 'Ready-made reports for regulators, ISO audits, or internal audits — without weeks of manual work.',
      },
    ],
  },
}

export default en