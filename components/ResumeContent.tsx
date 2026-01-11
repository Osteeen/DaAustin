import React from 'react';

export const ResumeContent: React.FC = () => {
    return (
        <div className="space-y-8 text-neutral-300">
            {/* Header / Summary */}
            <div className="space-y-4">
                <div>
                    <h3 className="text-2xl font-bold text-white uppercase italic">Ogbormeh Austin John Ifeanyi</h3>
                    <p className="text-cyan-500 font-mono text-sm tracking-wider">Abuja, Nigeria</p>
                    <p className="text-sm font-mono mt-1">austinjohn337@gmail.com • +2347057585612 / +13322224932</p>
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
                    </ul>
                    <ul className="list-disc list-inside space-y-1 marker:text-cyan-500">
                        <li>Operational and Product Performance Analysis</li>
                        <li>Root Cause Analysis and Incident Analysis</li>
                        <li>Business and Operations Reporting</li>
                        <li>Experimentation Concepts (A/B Testing)</li>
                        <li>System Logs and Transaction Data Analysis</li>
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
                            <span className="text-xs font-mono text-neutral-500">Jan 2025 – Present</span>
                        </div>
                        <p className="text-cyan-500 text-xs uppercase tracking-wide mb-2">Net Microfinance Bank (NETMFB), Abuja</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-neutral-400 marker:text-neutral-600">
                            <li>Own and manage operational and performance datasets used for executive and regulatory reporting.</li>
                            <li>Build and maintain structured reports tracking transaction volumes, system uptime, failure rates and customer activity.</li>
                            <li>Use SQL and Excel to analyze transactional data, identify anomalies, trends and performance gaps.</li>
                            <li>Partner with Operations, Finance and Product teams to provide data driven insights for decision making.</li>
                            <li>Lead root cause analysis using logs, reports and historical datasets.</li>
                            <li>Implement data driven process improvements that reduced system downtime by over 30 percent.</li>
                        </ul>
                    </div>

                    <div>
                        <div className="flex justify-between items-baseline flex-wrap gap-2">
                            <h5 className="font-bold text-white">IT Support Specialist (Data & Operations Analytics)</h5>
                            <span className="text-xs font-mono text-neutral-500">Oct 2023 – Jan 2025</span>
                        </div>
                        <p className="text-cyan-500 text-xs uppercase tracking-wide mb-2">Net Microfinance Bank (NETMFB), Abuja</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-neutral-400 marker:text-neutral-600">
                            <li>Performed SQL based analysis to validate daily transactions, settlements, reversals and system integrity.</li>
                            <li>Built recurring operational and performance reports for management using Excel and system exports.</li>
                            <li>Monitored platform performance metrics and customer transaction behavior to identify risks and improvement opportunities.</li>
                            <li>Investigated data discrepancies and system issues using logs, reports and structured analysis workflows.</li>
                        </ul>
                    </div>

                    <div>
                        <div className="flex justify-between items-baseline flex-wrap gap-2">
                            <h5 className="font-bold text-white">Data Quality & Search Evaluation Analyst (Contract)</h5>
                            <span className="text-xs font-mono text-neutral-500">May 2022 – Oct 2023</span>
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-sm text-neutral-400 marker:text-neutral-600">
                            <li>Worked on large scale data quality and relevance evaluation projects (Arrow, Yukon).</li>
                            <li>Analyzed datasets containing queries, metadata and content rankings.</li>
                            <li>Applied strict validation rules to identify data quality issues, misclassification and inconsistencies.</li>
                            <li>Ensured accuracy, consistency and reliability of datasets used in search and ranking systems.</li>
                        </ul>
                    </div>
                    <div>
                        <div className="flex justify-between items-baseline flex-wrap gap-2">
                            <h5 className="font-bold text-white">Administrative Data & Reporting Assistant</h5>
                            <span className="text-xs font-mono text-neutral-500">Apr 2021 – May 2022</span>
                        </div>
                        <p className="text-cyan-500 text-xs uppercase tracking-wide mb-2">National Defence College (NDC), Abuja</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-neutral-400 marker:text-neutral-600">
                            <li>Maintained structured administrative datasets and internal reporting records.</li>
                            <li>Supported data entry, reconciliation and documentation workflows.</li>
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
                </div>
                <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-3">Core Stack</h4>
                    <p className="text-sm leading-relaxed text-neutral-400">
                        SQL • Excel • BI Tools • Data Validation Frameworks • GitHub • System Logs • AI Automation Tools
                    </p>
                </div>
            </div>

            <div className="pt-6 sticky bottom-0 bg-[#09090b]/90 backdrop-blur pb-2">
                <a
                    href={`${import.meta.env.BASE_URL}CV.pdf`}
                    download="Austin_John_CV.pdf"
                    className="flex w-full items-center justify-center gap-2 bg-white text-black px-6 py-4 rounded-xl font-bold hover:bg-cyan-400 transition-colors uppercase tracking-widest text-sm shadow-xl"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Full PDF
                </a>
            </div>
        </div>
    );
};
