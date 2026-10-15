import React from 'react';

export const ResumeContent: React.FC = () => {
    return (
        <div className="space-y-8 text-neutral-300">
            {/* Header / Summary */}
            <div className="space-y-4">
                <div>
                    <h3 className="text-2xl font-bold text-white uppercase italic">OGBORMEH AUSTIN JOHN IFEANYI</h3>
                    <p className="text-cyan-500 font-mono text-sm tracking-wider">Abuja, Nigeria</p>
                    <p className="text-sm font-mono mt-1">austinjohn337@gmail.com • +2347057585612</p>
                    <p className="text-xs font-mono mt-2 text-cyan-500/80 uppercase tracking-tighter font-bold">
                        FULL STACK DEVELOPER | FINTECH SYSTEMS | AI ENGINEER
                    </p>
                    <p className="text-[10px] font-mono opacity-50 uppercase tracking-widest">
                        Full Stack Development • Fintech Systems • AI Engineer
                    </p>
                    <p className="text-xs font-mono mt-3 opacity-50">Portfolio: https://datawithaustin.com/</p>
                </div>

                <div className="p-4 bg-neutral-900/50 rounded-xl border border-neutral-800">
                    <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-2">Professional Summary</h4>
                    <p className="text-sm leading-relaxed text-neutral-400">
                        Full Stack Developer with 4+ years of experience building banking and fintech systems. Head of IT at Net Microfinance Bank, where I led the Corporate Internet Banking platform and manage payment integrations with NIBSS, Interswitch and Remita. Co-CEO and CTO of DigAjo, and founder of TrueFlow AI and TrueStay Insight, two AI products running in production. Experienced across financial services, fintech, and hospitality.
                    </p>
                </div>
            </div>

            {/* Core Skills */}
            <div className="space-y-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-widest border-b border-neutral-800 pb-2">Core Skills</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                    <ul className="list-disc list-inside space-y-1 marker:text-cyan-500">
                        <li>Full Stack Development</li>
                        <li>React & React Native</li>
                        <li>TypeScript & Node.js</li>
                        <li>REST API Design & Integration</li>
                        <li>Payment & Banking Integrations</li>
                        <li>LLM & Voice AI Development</li>
                    </ul>
                    <ul className="list-disc list-inside space-y-1 marker:text-cyan-500">
                        <li>Python Scripting & Automation</li>
                        <li>SQL Analysis & Reporting</li>
                        <li>IT Infrastructure & Systems Management</li>
                        <li>Cybersecurity & Regulatory Compliance</li>
                        <li>Cross-functional Leadership</li>
                        <li>Stakeholder Communication</li>
                    </ul>
                </div>
            </div>

            {/* Experience */}
            <div className="space-y-6">
                <h4 className="text-sm font-bold text-white uppercase tracking-widest border-b border-neutral-800 pb-2">Experience</h4>

                <div className="space-y-6">

                    {/* NetMFB Head of IT */}
                    <div>
                        <div className="flex justify-between items-baseline flex-wrap gap-2">
                            <h5 className="font-bold text-white">Head of Information Technology</h5>
                            <span className="text-xs font-mono text-neutral-500">January 2025 - Present</span>
                        </div>
                        <p className="text-cyan-500 text-xs uppercase tracking-wide mb-2">Net Microfinance Bank (NETMFB), Abuja</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-neutral-400 marker:text-neutral-600">
                            <li>Led development and deployment of a Corporate Internet Banking platform integrated with the core banking API, delivering account management, transfers and multi-level approval workflows to corporate customers on a multi-tenant architecture.</li>
                            <li>Manage integrations with NIBSS, Interswitch, Remita, Dojah and multiple settlement banks, and support for wholesale API partners consuming the bank's services, maintaining transaction flow across inward and outward payment rails.</li>
                            <li>Recovered unsettled interbank transactions by reconciling bank records against 42,000+ line settlement statements, identifying value credited to customers but never settled, and driving resolution with NIBSS and the settlement bank.</li>
                            <li>Lead the bank's 2026 CBN Cybersecurity Self Assessment Tool submission and established a formal risk register and regulatory incident reporting process, closing a documentation gap ahead of examination.</li>
                            <li>Manage core banking vendor relationships and platform infrastructure, driving root cause investigation and remediation of production defects affecting transaction integrity, and enforcing interim operational controls to prevent recurrence.</li>
                        </ul>
                    </div>

                    {/* DigAjo */}
                    <div>
                        <div className="flex justify-between items-baseline flex-wrap gap-2">
                            <h5 className="font-bold text-white">Co-CEO & CTO</h5>
                            <span className="text-xs font-mono text-neutral-500">June 2026 - Present</span>
                        </div>
                        <p className="text-cyan-500 text-xs uppercase tracking-wide mb-2">DigAjo</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-neutral-400 marker:text-neutral-600">
                            <li>Co-founded and lead engineering for DigAjo - a mobile fintech app that digitizes Nigeria's traditional ajo/esusu rotating savings practice.</li>
                            <li>Led technical architecture: automated contribution scheduling, rotating payout distribution, real-time transaction ledger, and digital wallet.</li>
                            <li>Built on regulated Nigerian banking infrastructure - guaranteed payouts, no manual coordination, full transparency.</li>
                            <li>Available on Android, iOS launching soon.</li>
                        </ul>
                    </div>

                    {/* TrueFlow AI */}
                    <div>
                        <div className="flex justify-between items-baseline flex-wrap gap-2">
                            <h5 className="font-bold text-white">Founder & CEO</h5>
                            <span className="text-xs font-mono text-neutral-500">2025 - Present</span>
                        </div>
                        <p className="text-cyan-500 text-xs uppercase tracking-wide mb-2">TrueFlow AI</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-neutral-400 marker:text-neutral-600">
                            <li>Built TrueFlow AI - a Meta-approved AI sales assistant that replies to Instagram DMs in under 5 seconds for Nigerian businesses.</li>
                            <li>Designed the full product: Instagram API integration, AI intent classification, smart discount negotiation engine, and real-time hot lead alerts.</li>
                            <li>Passed Meta App Review and achieved official Tech Provider status - zero account risk for customers.</li>
                            <li>Handles product questions, price negotiations, and purchase intent detection automatically - 24/7 without human involvement.</li>
                        </ul>
                    </div>

                    {/* TrueStay Insight */}
                    <div>
                        <div className="flex justify-between items-baseline flex-wrap gap-2">
                            <h5 className="font-bold text-white">Founder</h5>
                            <span className="text-xs font-mono text-neutral-500">2025 - Present</span>
                        </div>
                        <p className="text-cyan-500 text-xs uppercase tracking-wide mb-2">TrueStay Insight (TSI)</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-neutral-400 marker:text-neutral-600">
                            <li>Built an AI-powered voice feedback system that automatically calls hotel guests post-checkout, collects structured feedback, and surfaces insights to management in real time.</li>
                            <li>Increased guest feedback collection rate by 5-7x compared to email surveys (~10% to ~55-70%).</li>
                            <li>Reduced complaint discovery time from days or weeks to same day.</li>
                            <li>Designed end-to-end: Voice AI (Retell AI), workflow orchestration (n8n, Make.com), data pipeline, escalation alerts, and live management dashboard.</li>
                        </ul>
                    </div>

                    {/* NetMFB IT Support */}
                    <div>
                        <div className="flex justify-between items-baseline flex-wrap gap-2">
                            <h5 className="font-bold text-white">IT Support Specialist</h5>
                            <span className="text-xs font-mono text-neutral-500">October 2023 - January 2025</span>
                        </div>
                        <p className="text-cyan-500 text-xs uppercase tracking-wide mb-2">Net Microfinance Bank (NETMFB), Abuja</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-neutral-400 marker:text-neutral-600">
                            <li>Built recurring operational and performance reports, reducing manual reporting time by over 50%.</li>
                            <li>Monitored platform performance metrics and transaction behavior, identifying failure patterns before escalation.</li>
                            <li>Supported data-driven incident management that improved uptime consistency and reduced repeat failures.</li>
                        </ul>
                    </div>

                    {/* Data Quality Contract */}
                    <div>
                        <div className="flex justify-between items-baseline flex-wrap gap-2">
                            <h5 className="font-bold text-white">Data Quality & Search Evaluation Analyst (Contract)</h5>
                            <span className="text-xs font-mono text-neutral-500">May 2022 - October 2023</span>
                        </div>
                        <p className="text-cyan-500 text-xs uppercase tracking-wide mb-2">Appen</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-neutral-400 marker:text-neutral-600">
                            <li>Worked on large-scale data quality and relevance evaluation projects involving thousands of records per batch.</li>
                            <li>Applied structured validation frameworks to identify quality gaps and inconsistencies in training and evaluation data.</li>
                        </ul>
                    </div>

                    {/* NDC */}
                    <div>
                        <div className="flex justify-between items-baseline flex-wrap gap-2">
                            <h5 className="font-bold text-white">Administrative Data & Reporting Assistant</h5>
                            <span className="text-xs font-mono text-neutral-500">April 2021 - May 2022</span>
                        </div>
                        <p className="text-cyan-500 text-xs uppercase tracking-wide mb-2">National Defence College (NDC), Abuja</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-neutral-400 marker:text-neutral-600">
                            <li>Maintained structured administrative datasets and reporting records used for internal reviews and management decisions.</li>
                            <li>Supported data entry, reconciliation and documentation workflows across multiple departments.</li>
                        </ul>
                    </div>

                    {/* Rhemadok */}
                    <div>
                        <div className="flex justify-between items-baseline flex-wrap gap-2">
                            <h5 className="font-bold text-white">IT Support Specialist</h5>
                            <span className="text-xs font-mono text-neutral-500">November 2020 - February 2021</span>
                        </div>
                        <p className="text-cyan-500 text-xs uppercase tracking-wide mb-2">Rhemadok Oil & Gas Co. Ltd</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-neutral-400 marker:text-neutral-600">
                            <li>Prepared daily operational reports on IT system performance and staff usage, enabling management to identify inefficiencies.</li>
                            <li>Analyzed support request types and frequency, and recommended solutions that reduced recurring issues by 15%.</li>
                        </ul>
                    </div>

                    {/* NNPC */}
                    <div>
                        <div className="flex justify-between items-baseline flex-wrap gap-2">
                            <h5 className="font-bold text-white">IT Intern</h5>
                            <span className="text-xs font-mono text-neutral-500">February 2019 - August 2020</span>
                        </div>
                        <p className="text-cyan-500 text-xs uppercase tracking-wide mb-2">Nigerian National Petroleum Corporation (NNPC), Abuja</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-neutral-400 marker:text-neutral-600">
                            <li>Maintained incident logs, asset records, and operational tracking across multiple units.</li>
                            <li>Supported internal teams with system monitoring, documentation, and technical record keeping.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Education & Stack */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-neutral-800">
                <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-3">Education</h4>
                    <p className="font-bold text-white">B.Sc. Computer & Information Technology</p>
                    <p className="text-sm text-neutral-500">Veritas University, Abuja</p>
                    <p className="text-xs text-neutral-600">January 2018 - October 2021</p>
                </div>
                <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-3">Core Stack</h4>
                    <p className="text-sm leading-relaxed text-neutral-400">
                        React • React Native • TypeScript • Node.js • Python • SQL • REST APIs • PayPal APIs • Meta APIs • Instagram API • LLM APIs • Voice AI (Retell AI) • n8n • Make.com
                    </p>
                </div>
            </div>

            <div className="pt-6 sticky bottom-0 bg-[#09090b]/90 backdrop-blur pb-2">
                <a
                    href={`${((import.meta as any).env).BASE_URL}CV.pdf`}
                    download="Austin_John_CV.pdf"
                    className="flex w-full items-center justify-center gap-2 bg-white text-black px-6 py-4 rounded-xl font-bold hover:bg-cyan-400 transition-colors uppercase tracking-widest text-sm shadow-xl"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download PDF
                </a>
            </div>
        </div>
    );
};
