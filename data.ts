import { JourneyNode, Project, Tool } from './types';

export const JOURNEY_DATA: JourneyNode[] = [
  { id: '0', title: 'BSc Computer Science', caption: 'Academic foundation in systems, software engineering, and logic.', status: 'past', date: '2021' },
  { id: '1', title: 'Data Foundations', caption: 'SQL, Excel, & Statistical fundamentals.', status: 'past', date: '2022' },
  { id: '2', title: 'Automation & ETL', caption: 'Python pipelines for data optimization.', status: 'past', date: '2022' },
  { id: '3', title: 'Analytics Systems', caption: 'Dashboards, BI, & strategic metrics.', status: 'past', date: '2023' },
  { id: '4', title: 'Intelligent Automation & Decision Support', caption: 'AI-assisted workflows, decision tools, and automation', status: 'past', date: '2024' },
  { id: '5', title: 'Building AI Products', caption: 'Shipping real AI products — TrueFlow AI, TrueStay Insight, DigAjo & beyond.', status: 'present', date: '2025 — Now' },
];

export const PROJECTS: Project[] = [
  {
    id: 'p4',
    title: 'TrueFlow AI — AI Sales Assistant for Instagram DMs',
    subtitle: 'AI Sales Automation · Founder',
    tldr: 'An AI-powered Instagram DM assistant that replies to customers in under 5 seconds, answers product questions, negotiates smartly, and alerts business owners the moment a customer is ready to buy.',
    problem: 'Nigerian businesses selling on Instagram lose sales every day to slow DM replies. Customers message multiple stores and buy from whoever replies first. Sellers can\'t be online 24/7 — and answering the same questions about price, availability, and delivery burns hours every day.',
    built: 'I built TrueFlow AI — a Meta-approved Instagram DM automation platform that handles every incoming message instantly: answering product questions from a live catalog, negotiating discounts within set rules, detecting purchase intent, and sending real-time alerts when a customer is ready to pay.',
    impact: [
      { metric: 'Reply Time', value: '< 5 Seconds', description: 'Average AI response time — 24/7, including nights, weekends, and public holidays.' },
      { metric: 'Leads Lost', value: '0', description: 'Every DM gets an instant, intelligent reply no matter when it arrives.' },
      { metric: 'Setup Time', value: '< 1 Hour', description: 'Connect Instagram, upload catalog, go live — no technical setup required.' },
      { metric: 'Meta Verified', value: '✓ Approved', description: 'Official Meta App Review approved — zero risk of account disable.' }
    ],
    tools: ['AI', 'Instagram API', 'Meta App Review', 'Sales Automation', 'NLP'],
    image: 'trueflow-og.png',
    link: 'https://trueflowai.dev/',
    deepDive: {
      situation: 'Selling on Instagram in Nigeria is fast-paced and competitive. Customers DM 5 stores at once and buy from whoever replies first. The average Instagram shopper moves on in under 3 minutes with no reply. Most business owners can\'t be glued to their phones 24/7 — and their teams spend hours every day answering the exact same 10 questions.',
      task: 'Build an AI sales assistant that handles Instagram DMs automatically — replying instantly, answering product questions accurately, negotiating intelligently, and alerting the owner only when a customer is truly ready to buy. All without risking the Instagram account.',
      action: 'I designed and built TrueFlow AI as a Meta-approved platform using the official Instagram Messaging API. The system: connects to any business Instagram page in one click; ingests a product catalog so the AI knows every price, variant, and delivery detail; replies to every incoming DM in seconds with accurate, natural responses; negotiates discounts in steps based on owner-defined rules; detects hot lead signals (payment mentions, urgency, buy intent) and fires instant email alerts; hands off gracefully to a human when requested; and provides a dashboard of all conversations, leads, and performance metrics.',
      result: '• Every customer DM answered in under 5 seconds — 24/7\n• Zero leads lost to slow or missed replies\n• Business owners only engage when a customer is ready to pay\n• Handles pidgin, ₦ pricing, and Nigerian buying patterns naturally\n• Officially Meta-approved — no account risk whatsoever\n• Up and running in under an hour with no technical knowledge needed',
      logic: '• On incoming DM: classify intent (question, negotiation, buy signal, human request)\n• If product question: match to catalog and reply with accurate details\n• If price negotiation: apply discount rules — step down gradually, never jump to max\n• If buy signal detected: send instant email alert to owner with conversation context\n• If human handoff requested: pause AI, notify owner, resume after resolution\n• All conversations logged and visible in owner dashboard',
      architecture: '• Official Instagram Messaging API (Meta App Review approved)\n• AI engine trained on product catalog, business tone, and Nigerian market context\n• Real-time intent classification layer (question / negotiation / hot lead / handoff)\n• Rules-based discount negotiation engine with owner-configurable limits\n• Hot lead alert pipeline — instant email notification with conversation context\n• Owner dashboard for conversation history, lead tracking, and performance analytics\n• Pricing: Starter ₦25,000/month · Growth ₦50,000/month',
      metricsImproved: [
        'Instagram DM response time',
        'Lead capture rate from DM conversations',
        'Time spent on repetitive customer questions',
        'Sales conversion from Instagram',
        'Owner visibility into customer buying intent'
      ]
    }
  },
  {
    id: 'p3',
    title: 'DigAjo — Digital Ajo Savings Platform',
    subtitle: 'Community Fintech · CTO',
    tldr: 'A mobile fintech app that digitizes the traditional Nigerian ajo/esusu savings practice — automating contributions, guaranteeing payouts, and bringing community savings into the modern financial system.',
    problem: 'Informal rotating savings groups (ajo/esusu) have no way to enforce contributions, track payments, or guarantee payouts. Missed contributions, lack of transparency, and manual coordination break trust and leave members exposed.',
    built: 'As CTO, I co-built DigAjo — a mobile app that automates the entire ajo cycle: scheduling contributions, collecting payments, distributing rotating payouts, and maintaining full transaction visibility for every member, built on a regulated Nigerian bank.',
    impact: [
      { metric: 'Payout Guarantee', value: '100%', description: 'Every member receives their payout — no missed rounds, no chasing.' },
      { metric: 'Manual Work', value: 'Eliminated', description: 'Contribution scheduling, reminders, and distribution fully automated.' },
      { metric: 'Transparency', value: 'Full', description: 'All transactions visible to every group member in real time.' },
      { metric: 'Platform', value: 'Android + iOS', description: 'Available on Android, iOS coming soon.' }
    ],
    tools: ['Mobile', 'Fintech', 'Automation', 'Digital Payments', 'React Native'],
    image: 'digajo-og.png',
    link: 'https://digajo.com',
    deepDive: {
      situation: 'Ajo and esusu are generations-old community savings practices deeply embedded in Nigerian culture. But they run on trust, phone calls, and manual tracking — making them fragile. Missed contributions collapse entire cycles, and there is no accountability layer or financial infrastructure backing the system.',
      task: 'As CTO, design and build a mobile platform that preserves the social and cultural nature of ajo while solving its core reliability problems — guaranteeing contributions, automating payouts, and providing a transparent shared record for all members.',
      action: 'Built DigAjo as a mobile-first fintech product on a regulated Nigerian banking infrastructure. The platform handles: invite-only group creation with configurable contribution schedules; automated payment collection on synchronized dates; rotating payout distribution to each member in turn; full transaction visibility for all group members; a digital wallet for receiving and spending payouts; and a clean, minimal interface designed for all age groups familiar with the ajo tradition.',
      result: '• Fully automated ajo cycles with zero manual coordination\n• Guaranteed payouts backed by regulated financial infrastructure\n• Complete transparency — every member sees every transaction\n• Cultural continuity — the product feels like ajo, not a bank\n• Available on Android with iOS launching soon',
      logic: '• When contribution date arrives, auto-debit all active members\n• If payment fails, retry and notify member\n• When all contributions are collected, distribute payout to the next member in the rotation\n• All transactions are logged and visible to every group member\n• Platform fee, CBN stamp duty, and standard bank charges only — no hidden fees',
      architecture: '• Mobile-first React Native app for Android and iOS\n• Regulated Nigerian banking infrastructure for payment processing\n• Automated contribution scheduling and payout distribution engine\n• Real-time transaction ledger shared across all group members\n• Digital wallet layer for payout receipt and spending\n• Invite-only group system with configurable rotation settings',
      metricsImproved: [
        'Contribution reliability and enforcement',
        'Payout guarantee and trust between members',
        'Transparency of group finances',
        'Time spent coordinating and chasing contributions',
        'Access to structured savings for informal groups'
      ]
    }
  },
  {
    id: 'p1',
    title: 'AI-Powered Guest Feedback & Operations Intelligence for Hospitality',
    subtitle: 'End-to-End Operational Intelligence & Feedback Automation',
    tldr: 'An automated conversational AI system that handles post-stay guest follow-ups, sentiment analysis, and operational reporting.',
    problem: 'Hotels struggle to reliably collect post stay guest feedback. Manual calls are inconsistent, email surveys have low response rates, and serious service issues are often discovered too late. Management lacks real time visibility into guest experience and operational quality.',
    built: 'I built an automated AI voice feedback system that calls guests after checkout, collects structured feedback, detects escalations, and feeds real time insights into a management dashboard with automated alerts and reporting.',
    impact: [
      { metric: 'Collection Rate', value: '5–7× Increase', description: 'From ~10% (email surveys) to ~55–70% using AI voice calls.' },
      { metric: 'Issue Detection', value: '< 24 Hours', description: 'Reduced complaint discovery time from days or weeks to same day.' },
      { metric: 'Manual Work', value: '~85% Reduction', description: 'Automated calling, analysis, and routing replace human workload.' },
      { metric: 'Visibility', value: '100%', description: 'All guest feedback and escalations in one real-time dashboard.' }
    ],
    tools: ['Voice AI', 'Make.com', 'n8n', 'Airtable', 'Operational BI'],
    image: 'tsibg-optimized.png',
    link: 'https://truestayinsight.com/',
    deepDive: {
      situation: 'The hotel had no reliable way to collect consistent post stay feedback. Front desk follow ups were manual, email surveys had low response rates, and management had no unified view of guest satisfaction or service issues.',
      task: 'Design and implement an automated system that can reliably collect guest feedback, detect serious issues, and present actionable insights to management without increasing staff workload.',
      action: 'I designed and built an automated system using conversational voice AI, workflow orchestration, and a data pipeline that: Schedules calls automatically after guest checkout; Uses AI to conduct structured feedback conversations; Extracts ratings, comments, sentiment, and escalation signals; Routes critical issues to management in real time; Stores all results in a structured analytics database; Visualizes performance and trends in a live dashboard.',
      result: '• Consistent and scalable feedback collection\n• Real time visibility into guest satisfaction and service quality\n• Faster response to critical issues\n• Reduced operational overhead for staff\n• A reusable system that can be deployed across multiple hotels',
      logic: '• If guest is not yet contacted and checkout time has passed, schedule a call\n• If guest is busy, retry later based on status rules\n• If a call completes successfully, store results and update guest status\n• If escalation is detected, notify management immediately\n• If rating is high, send an SMS to guest to leave a review\n• If no response or failure, retry based on retry limits',
      architecture: 'The system is built as an event driven automation pipeline:\n• Guest data enters via Google Sheets or Airtable\n• A workflow engine schedules and triggers outbound calls\n• A voice AI agent conducts the call and analyzes responses\n• Webhooks return structured results\n• Automation workflows route, store, and process the data\n• A central data table feeds a real time management dashboard\n• Escalations trigger email or SMS alerts automatically',
      metricsImproved: [
        'Feedback collection rate',
        'Time to detect serious service issues',
        'Management visibility into daily operations',
        'Staff time spent on manual follow ups',
        'Volume and quality of actionable guest insights'
      ]
    }
  },
  {
    id: 'p2',
    title: 'Maji Ndogo Water Access Improvement Analytics',
    subtitle: 'National Infrastructure & Budget Optimization',
    tldr: 'A data-driven analysis of national water access to prioritize infrastructure investments and track multi-million dollar budget allocations.',
    problem: 'Government stakeholders lacked visibility into real-world water access gaps and the impact of infrastructure spending across different provinces and towns.',
    built: 'I developed a comprehensive Power BI analytics system that redefined "basic access" metrics, integrated complex relational data, and tracked cumulative financial sustainability.',
    impact: [
      { metric: 'Access Visibility', value: '100% Granularity', description: 'From national down to town-level mapping of water sources.' },
      { metric: 'Budget Tracking', value: 'Real-time', description: 'Cumulative budget vs. actual cost monitoring for long-term sustainability.' },
      { metric: 'Logic Accuracy', value: 'High', description: 'Corrected filter context issues for complex multi-table relationships.' },
      { metric: 'Decision Support', value: 'Prioritized', description: 'Identified highest-impact investment areas using improved population metrics.' }
    ],
    tools: ['Power BI', 'DAX', 'SQL', 'Data Modeling', 'Business Intelligence'],
    image: 'DaAustin 1.png',
    secondaryImage: 'DaAustin 2.png',
    deepDive: {
      situation: 'Maji Ndogo required a strategic approach to improving water access for its citizens. With limited resources and a wide national coverage, the government needed to move away from anecdotal decision-making and towards a data-driven model for infrastructure investment and budget management.',
      task: 'My role was to design an analytical framework to answer critical questions: What is the current state of "basic water access"? Where are the most critical gaps? How is the budget being spent, and which projects yield the highest return in terms of people served?',
      action: 'Designed a star-schema data model handles many-to-one relationships across water sources, locations, and project progress tables. I defined "Basic Water Access" using custom DAX logic encompassing clean wells, in-home taps, and shared taps with queue times under 30 minutes. I implemented cumulative budget vs. cost measures using CALCUATE and FILTER to handle slicer interference and provide long-term financial visibility. Created drill-through visuals to allow stakeholders to move from national overviews to town-specific project statuses.',
      result: 'The analysis provided clear, actionable visibility into water access gaps, enabling stakeholders to prioritize investments where they would have the highest population impact. We achieved accurate tracking of "budget burn" over time, ensuring financial sustainability. This shifted the national strategy from reactive fixes to proactive, logic-driven infrastructure planning.',
      logic: '• Define "Basic Access" if (Source = Tap-in-home) OR (Source = Well AND Pollution = Clean) OR (Source = Shared Tap AND Queue < 30m).\n• Calculate Cumulative Costs: Sum of completion cost for all projects where Date <= Current Filter Date.\n• Population Access %: (Population with Access) / (Total Population) per Region.',
      architecture: '• Relational Data: Bridging Fact tables (Visits, Pollution, Projects) with Dimension tables (Location, Source Type).\n• DAX Layer: Heavy use of TREATAS and ALL to maintain filter integrity across incomplete dates.\n• Visual Layer: Bookmarks for scenario switching and drill-through for deep-dive exploration.',
      metricsImproved: [
        'Accuracy of "Basic Access" reporting',
        'Clarity on budget utilization per province',
        'Timeliness of infrastructure project tracking',
        'Identification of high-priority investment zones'
      ]
    }
  }
];

export const TOOLS: Tool[] = [
  { name: 'LLM APIs', category: 'AI & Intelligence' },
  { name: 'AI Agents', category: 'AI & Intelligence' },
  { name: 'Voice AI', category: 'AI & Intelligence' },
  { name: 'Prompt Engineering', category: 'AI & Intelligence' },
  { name: 'n8n', category: 'Automation & Pipelines' },
  { name: 'Make.com', category: 'Automation & Pipelines' },
  { name: 'Python', category: 'Automation & Pipelines' },
  { name: 'Instagram API', category: 'Product & APIs' },
  { name: 'Meta Platform', category: 'Product & APIs' },
  { name: 'React Native', category: 'Product & APIs' },
  { name: 'Airtable', category: 'Product & APIs' },
  { name: 'SQL', category: 'Data & Analytics' },
  { name: 'Power BI', category: 'Data & Analytics' },
];