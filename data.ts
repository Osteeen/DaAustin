import { JourneyNode, Project, Tool } from './types';

export const JOURNEY_DATA: JourneyNode[] = [
  { id: '0', title: 'BSc Computer Science', caption: 'Academic foundation in systems, software engineering, and logic.', status: 'past', date: '2021' },
  { id: '1', title: 'Data Foundations', caption: 'SQL, Excel, & Statistical fundamentals.', status: 'past', date: '2022' },
  { id: '2', title: 'Automation & ETL', caption: 'Python pipelines for data optimization.', status: 'past', date: '2022' },
  { id: '3', title: 'Analytics Systems', caption: 'Dashboards, BI, & strategic metrics.', status: 'past', date: '2023' },
  { id: '4', title: 'Intelligent Automation & Decision Support', caption: 'AI-assisted workflows, decision tools, and automation', status: 'past', date: '2024' },
  { id: '5', title: 'Analytics & Decision Systems', caption: 'Building scalable analytics-driven decision systems', status: 'present', date: '2025 - 2026' },
];

export const PROJECTS: Project[] = [
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
  }
];

export const TOOLS: Tool[] = [
  { name: 'SQL (MySQL, Postgres)', category: 'Data & Storage' },
  { name: 'Excel', category: 'Data & Storage' },
  { name: 'Python', category: 'Automation & Pipelines' },
  { name: 'n8n', category: 'Automation & Pipelines' },
  { name: 'Make.com', category: 'Automation & Pipelines' },
  { name: 'Power BI', category: 'Analytics & BI' },
  { name: 'Tableau', category: 'Analytics & BI' },
  { name: 'LLM APIs', category: 'INTELLIGENT SYSTEMS' },
  { name: 'AI Agents', category: 'INTELLIGENT SYSTEMS' },
  { name: 'Prompt Engineering', category: 'INTELLIGENT SYSTEMS' },
  { name: 'Star schemas', category: 'Modeling & Architecture' },
  { name: 'Metrics layers', category: 'Modeling & Architecture' },
  { name: 'Semantic models', category: 'Modeling & Architecture' },
];