import React from 'react';
import { MapPin, Briefcase, ExternalLink, Mail } from 'lucide-react';

const Sidebar = () => {
    return (
        <aside className="w-full lg:w-[350px] lg:h-screen lg:fixed lg:left-0 top-0 bg-[#E5E5E5] p-6 flex flex-col justify-between border-r border-brand-border z-50">
            <div>
                {/* Profile Header */}
                <div className="flex flex-col items-start space-y-4">
                    <div className="w-24 h-24 rounded-full bg-gray-300 overflow-hidden border-2 border-brand-dark">
                        <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-display uppercase tracking-tight">Aman Raj</h2>
                        <p className="text-sm font-medium text-gray-600">@amanraj</p>
                    </div>

                    <div className="flex flex-col space-y-2 text-sm font-medium text-gray-700">
                        <div className="flex items-center space-x-2">
                            <MapPin size={16} />
                            <span>Patna, India</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Briefcase size={16} />
                            <span>Software Developer</span>
                        </div>
                    </div>
                </div>

                {/* Status Badge */}
                <div className="mt-8">
                    <div className="inline-flex items-center px-3 py-1 bg-brand-accent-yellow border border-brand-dark rounded-full text-xs font-bold uppercase tracking-wider">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                        Open to Work
                    </div>
                </div>
            </div>

            {/* Footer / Links */}
            <div className="mt-8 lg:mt-0 pt-8 border-t border-brand-border lg:border-t-0">
                <ul className="space-y-4">
                    <li>
                        <a href="#about" className="flex items-center justify-between group">
                            <span className="font-bold uppercase text-lg group-hover:text-brand-accent-pink transition-colors">About</span>
                            <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                    </li>
                    <li>
                        <a href="#experience" className="flex items-center justify-between group">
                            <span className="font-bold uppercase text-lg group-hover:text-brand-accent-pink transition-colors">Experience</span>
                            <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:aman25722@gmail.com" className="flex items-center justify-between group">
                            <span className="font-bold uppercase text-lg group-hover:text-brand-accent-pink transition-colors">Contact</span>
                            <Mail size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                    </li>
                </ul>

                <div className="mt-8 text-xs text-gray-500 font-mono">
                    © 2026 Aman Raj.<br />
                    All Rights Reserved.
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
