import React from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 border-t border-brand-dark bg-brand-dark text-white -mx-4 md:-mx-8 lg:-mx-12 px-4 md:px-8 lg:px-12 mt-12">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-5xl md:text-7xl font-display font-black uppercase mb-8">
                    Let's Create <br />
                    <span className="text-brand-accent-yellow">Impact</span>
                </h2>

                <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
                    Ready to optimize your backend infrastructure? Let's talk.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
                    <a href="mailto:aman25722@gmail.com" className="flex items-center gap-3 text-xl font-bold hover:text-brand-accent-pink transition-colors">
                        <Mail /> aman25722@gmail.com
                    </a>
                    <span className="hidden md:block text-gray-600">|</span>
                    <a href="tel:9547279050" className="flex items-center gap-3 text-xl font-bold hover:text-brand-accent-pink transition-colors">
                        <Phone /> 9547279050
                    </a>
                </div>

                <a href="mailto:aman25722@gmail.com" className="inline-flex items-center gap-4 px-8 py-4 bg-brand-accent-pink text-white font-bold font-display uppercase tracking-widest text-xl hover:bg-white hover:text-brand-dark transition-colors duration-300">
                    Contact Me <ArrowRight size={24} />
                </a>
            </div>
        </section>
    );
};

export default Contact;
