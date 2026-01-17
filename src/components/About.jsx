import React from 'react';
import { Server, Cloud, Terminal, Database, ShieldCheck, Code2 } from 'lucide-react';

const skillCategories = [
    {
        icon: Server,
        name: 'Backend',
        skills: 'Java, Spring Boot, Spring Data JPA, Microservices, REST APIs, ORM'
    },
    {
        icon: Cloud,
        name: 'Cloud',
        skills: 'AWS (EC2, S3, Lambda), Deployment Automation'
    },
    {
        icon: ShieldCheck,
        name: 'Testing',
        skills: 'Unit Testing, Postman, Swagger, API Validation'
    },
    {
        icon: Terminal,
        name: 'DevOps',
        skills: 'Jenkins, CI/CD, Git, Bitbucket, Maven'
    },
    {
        icon: Database,
        name: 'Databases',
        skills: 'MySQL, SQL Optimization'
    },
    {
        icon: Code2,
        name: 'Core CS',
        skills: 'Data Structures, Algorithms, Object-Oriented Design'
    },
];

const About = () => {
    return (
        <section id="about" className="py-20 border-t border-brand-dark">
            <div className="flex flex-col md:flex-row gap-12">
                {/* Left Column: Title */}
                <div className="md:w-1/3">
                    <h2 className="text-5xl md:text-6xl font-display font-black uppercase leading-none">
                        A Bit <br />
                        <span className="inline-block px-2 bg-brand-accent-pink text-white transform rotate-2">About</span> <br />
                        Me
                    </h2>

                    <div className="mt-8 p-6 bg-gray-100 border border-brand-dark">
                        <h3 className="font-display font-bold uppercase mb-2">Education</h3>
                        <p className="font-bold">Haldia Institute of Technology</p>
                        <p className="text-sm text-gray-600">B.Tech in Information Technology</p>
                        <p className="text-sm font-bold text-brand-accent-pink mt-1">GPA: 8.92</p>
                        <p className="text-xs text-gray-500 mt-2">Sep 2020</p>
                    </div>
                </div>

                {/* Right Column: Content */}
                <div className="md:w-2/3">
                    <p className="text-xl font-medium leading-relaxed mb-8">
                        I am a results-driven Software Developer with over 5 years of experience in building scalable backend solutions. My expertise lies in optimizing system performance, reducing API latency, and ensuring robust security and reliability.
                    </p>

                    <p className="text-lg text-gray-600 mb-12">
                        I have a proven track record of successful agile releases, mentoring junior developers, and automating CI/CD pipelines to improve deployment efficiency.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {skillCategories.map((cat, idx) => (
                            <div key={idx} className="p-4 border border-brand-dark hover:bg-white transition-colors group">
                                <cat.icon size={32} className="mb-2 text-brand-accent-yellow drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform" />
                                <h3 className="font-display font-bold uppercase text-lg mb-2">{cat.name}</h3>
                                <p className="text-sm text-gray-600 leading-snug">{cat.skills}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
