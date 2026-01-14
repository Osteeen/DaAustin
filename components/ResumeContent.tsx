import React from 'react';

export const ResumeContent: React.FC = () => {
    return (
        <div className="space-y-8 text-neutral-300">
            {/* Header / Summary */}
            <div className="space-y-4">
                <div>
                    <h3 className="text-2xl font-bold text-white uppercase italic">OGBORMEH AUSTIN JOHN IFEANYI</h3>
                    <p className="text-cyan-500 font-mono text-sm tracking-wider">Abuja, Nigeria</p>
                    <p className="text-sm font-mono mt-1">austinjohn337@gmail.com • +2347057585612 / +13322224932</p>
                    <p className="text-xs font-mono mt-2 text-cyan-500/80 uppercase tracking-tighter font-bold">
                        DATA ANALYST | BUSINESS & SYSTEMS ANALYTICS | AI ENABLED AUTOMATION
                    </p>
                    <p className="text-[10px] font-mono opacity-50 uppercase tracking-widest">
                        SQL • Reporting • Dashboards • Data Quality • Product & Operations Insights
                    </p>
                    <p className="text-xs font-mono mt-3 opacity-50">Portfolio: https://osteeen.github.io/DaAustin/</p>
                </div>

                <div className="p-4 bg-neutral-900/50 rounded-xl border border-neutral-800">
                    <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-2">Professional Summary</h4>
                    <p className="text-sm leading-relaxed text-neutral-400">
                        Data Analyst and Systems Analytics professional with over 4 years of experience supporting data driven decision making in financial services and technology environments. Strong background in SQL analysis, reporting, data validation, performance monitoring and operational dashboards. Experienced in transforming raw operational and transactional data into structured, decision ready insights for management, product and operations teams. Proven ability to work cross functionally with product, finance, operations and engineering stakeholders. Currently expanding into product analytics, experimentation and AI assisted analytics workflows.
                    </p>
                </div>
            </div>

            {/* Core Skills */}
            <div className="space-y-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-widest border-b border-neutral-800 pb-2">Core Skills</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                    <ul className="list-disc list-inside space-y-1 marker:text-cyan-500">
                        <li>SQL (Analysis, Data Validation, Reporting)</li>
                        <li>Data Analysis and Trend Identification</li>
                        <li>Dashboarding and Reporting (Excel, BI Tools)</li>
                        <li>Data Quality, Reconciliation and Auditing</li>
                        <li>KPI Definition and Performance Monitoring</li>
                        <li>Operational and Product Performance Analysis</li>
                    </ul>
                    <ul className="list-disc list-inside space-y-1 marker:text-cyan-500">
                        <li>Root Cause Analysis and Incident Analysis</li>
                        <li>Business and Operations Reporting</li>
                        <li>Experimentation Concepts (A/B Testing Fundamentals)</li>
                        <li>System Logs and Transaction Data Analysis</li>
                        <li>Cross Functional Collaboration</li>
                        <li>Insight Documentation and Stakeholder Communication</li>
                    </ul>
                </div>
            </div>

            {/* Experience */}
            <div className="space-y-6">
                <h4 className="text-sm font-bold text-white uppercase tracking-widest border-b border-neutral-800 pb-2">Professional Experience</h4>

                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between items-baseline flex-wrap gap-2">
                            <h5 className="font-bold text-white">Head of IT / Data & Systems Operations</h5>
                            <span className="text-xs font-mono text-neutral-500">January 2025 – Present</span>
                        </div>
                        <p className="text-cyan-500 text-xs uppercase tracking-wide mb-2">Net Microfinance Bank (NETMFB), Abuja</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-neutral-400 marker:text-neutral-600">
                            <li>Own and manage operational and regulatory datasets covering 10,000+ monthly transactions used for executive and compliance reporting.</li>
                            <li>Designed and maintained performance dashboards tracking transaction volumes, uptime, failure rates and customer activity, improving management visibility across all digital channels.</li>
                            <li>Used SQL and Excel to analyze transactional data, uncover anomalies, trends and performance gaps, reducing undetected issues by over 40 percent.</li>
                            <li>Partnered with Operations, Finance and Product teams to deliver data driven insights that improved system reliability and decision making.</li>
                            <li>Led root cause analysis across incidents using logs, reports and historical datasets, cutting mean resolution time by over 35 percent.</li>
                            <li>Implemented data driven process improvements that reduced system downtime by over 30 percent within the first 6 months.</li>
                            <li>Defined and tracked KPIs for digital channels and internal systems, enabling weekly performance reviews and proactive issue detection.</li>
                        </ul>
                    </div>

                    <div>
                        <div className="flex justify-between items-baseline flex-wrap gap-2">
                            <h5 className="font-bold text-white">IT Support Specialist (Data & Operations Analytics Focus)</h5>
                            <span className="text-xs font-mono text-neutral-500">October 2023 – January 2025</span>
                        </div>
                        <p className="text-cyan-500 text-xs uppercase tracking-wide mb-2">Net Microfinance Bank (NETMFB), Abuja</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-neutral-400 marker:text-neutral-600">
                            <li>Performed SQL based validation of daily transactions, settlements and reversals across thousands of records per day, improving financial data integrity.</li>
                            <li>Built recurring operational and performance reports for management using Excel and system exports, reducing manual reporting time by over 50 percent.</li>
                            <li>Monitored platform performance metrics and customer transaction behavior, identifying failure patterns and bottlenecks before they escalated.</li>
                            <li>Investigated data discrepancies and system issues using logs, reports and structured analysis workflows, supporting SLA driven incident resolution.</li>
                            <li>Worked cross functionally with Product, Operations and Vendors to drive reliability and performance improvements across core banking systems.</li>
                            <li>Supported data driven incident management that improved uptime consistency and reduced repeat failures.</li>
                        </ul>
                    </div>

                    <div>
                        <div className="flex justify-between items-baseline flex-wrap gap-2">
                            <h5 className="font-bold text-white">Data Quality & Search Evaluation Analyst (Contract)</h5>
                            <span className="text-xs font-mono text-neutral-500">May 2022 – October 2023</span>
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-sm text-neutral-400 marker:text-neutral-600">
                            <li>Worked on large scale data quality and relevance evaluation projects (Arrow, Yukon) involving thousands of records per batch.</li>
                            <li>Analyzed datasets containing queries, metadata and ranking signals to evaluate relevance and correctness.</li>
                            <li>Applied strict validation frameworks to identify misclassification, quality gaps and inconsistencies, improving dataset reliability.</li>
                            <li>Contributed to maintaining high quality training and evaluation data used in search and ranking systems.</li>
                            <li>Built strong experience in structured data review, quality scoring frameworks and analytical evaluation workflows.</li>
                        </ul>
                    </div>

                    <div>
                        <div className="flex justify-between items-baseline flex-wrap gap-2">
                            <h5 className="font-bold text-white">Administrative Data & Reporting Assistant</h5>
                            <span className="text-xs font-mono text-neutral-500">April 2021 – May 2022</span>
                        </div>
                        <p className="text-cyan-500 text-xs uppercase tracking-wide mb-2">National Defence College (NDC), Abuja</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-neutral-400 marker:text-neutral-600">
                            <li>Maintained structured administrative datasets and reporting records used for internal reviews and management decisions.</li>
                            <li>Supported data entry, reconciliation and documentation workflows across multiple departments.</li>
                            <li>Assisted in preparing periodic summary reports, improving information availability for leadership.</li>
                        </ul>
                    </div>

                    <div>
                        <div className="flex justify-between items-baseline flex-wrap gap-2">
                            <h5 className="font-bold text-white">IT Intern</h5>
                            <span className="text-xs font-mono text-neutral-500">February 2019 – August 2020</span>
                        </div>
                        <p className="text-cyan-500 text-xs uppercase tracking-wide mb-2">Nigerian National Petroleum Corporation (NNPC), Abuja</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-neutral-400 marker:text-neutral-600">
                            <li>Maintained Excel based logs for incidents, assets and operational tracking across multiple units.</li>
                            <li>Assisted with basic reporting, documentation and system monitoring activities.</li>
                            <li>Supported internal teams with data organization and technical record keeping.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Education & Tools */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-neutral-800">
                <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-3">Education</h4>
                    <p className="font-bold text-white">B.Sc. Computer & Information Technology</p>
                    <p className="text-sm text-neutral-500">Veritas University, Abuja</p>
                    <p className="text-xs text-neutral-600">January 2018 – October 2021</p>
                </div>
                <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-3">Core Stack</h4>
                    <p className="text-sm leading-relaxed text-neutral-400">
                        SQL • Excel • BI Tools • Data Validation Frameworks • Reporting Systems • Dashboards • GitHub • System Logs • AI Automation Tools
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
                    Download pdf
                </a>
            </div>
        </div>
    );
};
