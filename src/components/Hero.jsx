import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className="mb-20">
            {/* Brand Marquee / Top Banner */}
            <div className="w-full bg-brand-accent-pink p-4 mb-12 border border-brand-dark shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-[1deg] hover:rotate-0 transition-transform duration-300">
                <div className="flex justify-between items-center overflow-hidden">
                    <div className="animate-marquee whitespace-nowrap flex space-x-12 font-display text-2xl uppercase tracking-widest text-white font-bold">
                        <span>Java</span>
                        <span className="text-black">/</span>
                        <span>Spring Boot</span>
                        <span className="text-black">/</span>
                        <span>Microservices</span>
                        <span className="text-black">/</span>
                        <span>AWS Cloud</span>
                        <span className="text-black">/</span>
                        <span>CI/CD</span>
                        <span className="text-black">/</span>
                        <span>REST APIs</span>
                        <span className="text-black">/</span>
                        <span>Backend Engineering</span>
                    </div>
                </div>
            </div>

            {/* Main Title */}
            <div className="relative">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.9] tracking-tighter uppercase text-brand-dark">
                    Backend <br />
                    <span className="relative inline-block px-4 pb-2 bg-brand-accent-yellow border-2 border-brand-dark transform -skew-x-6 hover:skew-x-0 transition-transform duration-300 cursor-default shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        Engineering
                    </span>
                    <br />
                    <span className="flex items-center gap-4">
                        Expert <Sparkles size={64} className="text-brand-accent-pink animate-spin-slow" />
                    </span>
                </h1>
            </div>

            <p className="mt-8 text-xl md:text-2xl max-w-3xl font-medium text-gray-700 leading-relaxed border-l-4 border-brand-accent-pink pl-6">
                Results-driven Software Developer with 5+ years of experience specializing in Java, Spring Boot, Microservices, CI/CD automation, and cloud-based backend engineering.
            </p>
        </section>
    );
};

export default Hero;
