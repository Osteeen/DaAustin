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
                        AI ENGINEER | PRODUCT BUILDER | FOUNDER
                    </p>
                    <p className="text-[10px] font-mono opacity-50 uppercase tracking-widest">
                        LLM APIs • Voice AI • Workflow Automation • Product Development • AI Systems
                    </p>
                    <p className="text-xs font-mono mt-3 opacity-50">Portfolio: https://datawithaustin.com/</p>
                </div>

                <div className="p-4 bg-neutral-900/50 rounded-xl border border-neutral-800">
                    <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-2">Professional Summary</h4>
                    <p className="text-sm leading-relaxed text-neutral-400">
                        AI Engineer and Product Builder with 4+ years of experience designing and shipping AI-powered systems that solve real operational problems. Founder of TrueFlow AI and TrueStay Insight. CTO of DigAjo. Currently Head of IT at Net Microfinance Bank. I build end-to-end AI products — from Instagram DM automation to voice AI feedback systems — that cut costs, save time, and create measurable business value. Experienced across financial services, fintech, and hospitality.
                    </p>
                </div>
            </div>

            {/* Core Skills */}
            <div className="space-y-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-widest border-b border-neutral-800 pb-2">Core Skills</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                    <ul className="list-disc list-inside space-y-1 marker:text-cyan-500">
                        <li>AI Systems Design & Integration</li>
                        <li>LLM & Voice AI Development</li>
                        <li>Workflow Automation (n8n, Make.com)</li>
                        <li>Product Development & Shipping</li>
                        <li>Instagram / Meta API Integration</li>
                        <li>React & React Native Development</li>
                    </ul>
                    <ul className="list-disc list-inside space-y-1 marker:text-cyan-500">
                        <li>Python Scripting & Automation</li>
                        <li>Prompt Engineering</li>
                        <li>IT Infrastructure & Systems Management</li>
                        <li>SQL Analysis & Reporting</li>
                        <li>Cross-functional Leadership</li>
                        <li>Stakeholder Communication</li>
                    </ul>
                </div>
            </div>

            {/* Experience */}
            <div className="space-y-6">
                <h4 className="text-sm font-bold text-white uppercase tracking-widest border-b border-neutral-800 pb-2">Experience</h4>

                <div className="space-y-6">

                    {/* TrueFlow AI */}
                    <div>
                        <div className="flex justify-between items-baseline flex-wrap gap-2">
                            <h5 className="font-bold text-white">Founder & CEO</h5>
                            <span className="text-xs font-mono text-neutral-500">2025 - Present</span>
                        </div>
                        <p className="text-cyan-500 text-xs uppercase tracking-wide mb-2">TrueFlow AI</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-neutral-400 marker:text-neutral-600">
                            <li>Built TrueFlow AI — a Meta-approved AI sales assistant that replies to Instagram DMs in under 5 seconds for Nigerian businesses.</li>
                            <li>Designed the full product: Instagram API integration, AI intent classification, smart discount negotiation engine, and real-time hot lead alerts.</li>
                            <li>Passed Meta App Review and achieved official Tech Provider status — zero account risk for customers.</li>
                            <li>Handles product questions, price negotiations, and purchase intent detection automatically — 24/7 without human involvement.</li>
                        </ul>
                    </div>

                    {/* TrueStay Insight */}
                    <div>
                        <div className="flex justify-between items-baseline flex-wrap gap-2">
                            <h5 className="font-bold text-white">Founder</h5>
                            <span className="text-xs font-mono text-neutral-500">2024 - Present</span>
                        </div>
                        <p className="text-cyan-500 text-xs uppercase tracking-wide mb-2">TrueStay Insight (TSI)</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-neutral-400 marker:text-neutral-600">
                            <li>Built an AI-powered voice feedback system that automatically calls hotel guests post-checkout, collects structured feedback, and surfaces insights to management in real time.</li>
                            <li>Increased guest feedback collection rate by 5-7x compared to email surveys (~10% to ~55-70%).</li>
                            <li>Reduced complaint discovery time from days or weeks to same day.</li>
                            <li>Designed end-to-end: Voice AI (Retell AI), workflow orchestration (n8n, Make.com), data pipeline, escalation alerts, and live management dashboard.</li>
                        </ul>
                    </div>

                    {/* DigAjo */}
                    <div>
                        <div className="flex justify-between items-baseline flex-wrap gap-2">
                            <h5 className="font-bold text-white">Co-Founder & CTO</h5>
                            <span className="text-xs font-mono text-neutral-500">2024 - Present</span>
                        </div>
                        <p className="text-cyan-500 text-xs uppercase tracking-wide mb-2">DigAjo</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-neutral-400 marker:text-neutral-600">
                            <li>Co-founded and lead engineering for DigAjo — a mobile fintech app that digitizes Nigeria's traditional ajo/esusu rotating savings practice.</li>
                            <li>Led technical architecture: automated contribution scheduling, rotating payout distribution, real-time transaction ledger, and digital wallet.</li>
                            <li>Built on regulated Nigerian banking infrastructure — guaranteed payouts, no manual coordination, full transparency.</li>
                            <li>Available on Android, iOS launching soon.</li>
                        </ul>
                    </div>

                    {/* NetMFB Head of IT */}
                    <div>
                        <div className="flex justify-between items-baseline flex-wrap gap-2">
                            <h5 className="font-bold text-white">Head of IT</h5>
                            <span className="text-xs font-mono text-neutral-500">January 2025 - Present</span>
                        </div>
                        <p className="text-cyan-500 text-xs uppercase tracking-wide mb-2">Net Microfinance Bank (NETMFB), Abuja</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-neutral-400 marker:text-neutral-600">
                            <li>Oversee all IT systems, infrastructure, and operations across the bank — covering 10,000+ monthly transactions.</li>
                            <li>Implemented data-driven process improvements that reduced system downtime by over 30% within the first 6 months.</li>
                            <li>Led root cause analysis across incidents using logs, reports, and historical data — cutting mean resolution time by over 35%.</li>
                            <li>Designed and maintained performance dashboards tracking transaction volumes, uptime, failure rates, and customer activity.</li>
                            <li>Partnered with Operations, Finance, and Product teams to drive system reliability and operational improvements.</li>
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
                        <ul className="list-disc list-inside space-y-1 text-sm text-neutral-400 marker:text-neutral-600">
                            <li>Worked on large-scale data quality and relevance evaluation projects involving thousands of records per batch.</li>
                            <li>Applied structured validation frameworks to identify quality gaps and inconsistencies in training and evaluation data.</li>
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
                        LLM APIs • Voice AI (Retell AI) • n8n • Make.com • Python • React • React Native • Instagram API • Airtable • SQL • Power BI
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
