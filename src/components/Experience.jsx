import React from 'react';
import { Network, Database, Cloud, Terminal } from 'lucide-react';

const experiences = [
    {
        role: "Specialist Programmer L2",
        company: "Infosys Ltd.",
        period: "April 2024 - Current",
        description: "Designed business-critical functionalities using Spring Boot & ORM, achieving a 20% performance boost. Mentored 4 junior developers, improving code quality and delivery efficiency. Contributed to multiple Agile releases and coordinated cross-team technical alignments.",
        tags: ["Spring Boot", "ORM", "Mentorship", "Agile"]
    },
    {
        role: "Specialist Programmer L1",
        company: "Infosys Ltd.",
        period: "January 2022 - March 2024",
        description: "Engineered and optimized REST APIs, reducing response time by 40%. Automated CI/CD pipelines using Jenkins, decreasing deployment cycle time by 30%. Contributed to 15+ successful requirement releases within Agile sprints.",
        tags: ["REST APIs", "Jenkins", "CI/CD", "Optimization"]
    },
    {
        role: "Digital Specialist Engineer",
        company: "Infosys Ltd.",
        period: "September 2020 - December 2021",
        description: "Developed Java modules aligned with architecture and business needs. Designed and tested APIs with Swagger & Postman, completing 200+ validations. Ensured robust integration across microservices and improved system reliability.",
        tags: ["Java", "Swagger", "Postman", "Microservices"]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20">
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase mb-12 text-center md:text-left">
                Work <br />
                <span className="relative inline-block px-4 bg-brand-accent-yellow border-2 border-brand-dark transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    History
                </span>
            </h2>

            <div className="grid grid-cols-1 gap-8">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="bg-white border-2 border-brand-dark p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                            <div>
                                <h3 className="text-2xl font-display font-bold uppercase">{exp.role}</h3>
                                <span className="text-lg font-bold text-brand-accent-pink">{exp.company}</span>
                            </div>
                            <span className="mt-2 md:mt-0 px-4 py-1 bg-brand-dark text-white font-mono text-sm uppercase tracking-wider rounded-full">
                                {exp.period}
                            </span>
                        </div>

                        <p className="text-lg text-gray-700 mb-6 leading-relaxed border-l-4 border-gray-200 pl-4">
                            {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {exp.tags.map((tag, i) => (
                                <span key={i} className="px-3 py-1 text-sm font-bold bg-gray-100/50 border border-gray-300 text-gray-600 uppercase">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
