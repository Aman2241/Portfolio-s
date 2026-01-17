import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Fintech Dashboard",
        category: "Finance / SaaS",
        description: "A comprehensive financial planning dashboard for tracking investments and expenses.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        tags: ["React", "Tailwind", "Recharts"],
        link: "#",
        github: "#"
    },
    {
        id: 2,
        title: "Alpha Gym",
        category: "Fitness / Landing Page",
        description: "Modern landing page for a high-end gym with membership plans and scheduling.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop",
        tags: ["Next.js", "Framer Motion", "Stripe"],
        link: "#",
        github: "#"
    },
    {
        id: 3,
        title: "E-Commerce Store",
        category: "Retail / Full Stack",
        description: "Minimalist fashion store with cart functionality and payment gateway integration.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop",
        tags: ["React", "Redux", "Node.js"],
        link: "#",
        github: "#"
    },
    {
        id: 4,
        title: "AI Chat Interface",
        category: "AI / Tool",
        description: "Chat interface for LLMs with syntax highlighting and code execution support.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop",
        tags: ["TypeScript", "OpenAI API", "Vite"],
        link: "#",
        github: "#"
    }
];

const ProjectCard = ({ project }) => {
    return (
        <div className="group relative bg-white border-2 border-brand-dark p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300">
            {/* Image Container */}
            <div className="relative aspect-video w-full overflow-hidden border border-brand-dark mb-4 group-hover:border-brand-accent-pink transition-colors">
                <div className="absolute inset-0 bg-brand-accent-pink/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-multiply"></div>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <div className="flex justify-between items-start mb-2">
                <div>
                    <span className="text-xs font-bold font-mono text-brand-accent-pink uppercase tracking-widest mb-1 block">
                        {project.category}
                    </span>
                    <h3 className="text-2xl font-display font-bold uppercase leading-none mb-2">
                        {project.title}
                    </h3>
                </div>
                <a href={project.link} className="p-2 bg-brand-dark text-white hover:bg-brand-accent-yellow hover:text-brand-dark transition-colors border border-transparent hover:border-brand-dark rounded-full">
                    <ArrowUpRight size={20} />
                </a>
            </div>

            <p className="text-sm text-gray-600 mb-4 line-clamp-2 border-l-2 border-gray-200 pl-3">
                {project.description}
            </p>

            {/* Tags & Footer */}
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-dashed border-gray-300">
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 text-[10px] font-bold uppercase bg-gray-100 border border-gray-300 hover:bg-brand-dark hover:text-white transition-colors cursor-default">
                            {tag}
                        </span>
                    ))}
                </div>
                {project.github !== '#' && (
                    <a href={project.github} className="text-gray-400 hover:text-brand-dark transition-colors">
                        <Github size={18} />
                    </a>
                )}
            </div>
        </div>
    );
}

const Projects = () => {
    return (
        <section id="projects" className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
