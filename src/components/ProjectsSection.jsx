import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "../hooks/use-scroll-animation";

const projects = [
    {
        id: 1,
        title: "LungXcan",
        description: "An application that scans chest X-rays to detect potential lung diseases.",
        image: "/projects/LungXCan.jpg",
        tags: ["NodeJS", "ExpressJS", "Javascript", "Python"],
        demoUrl: "#",
        githubUrl: "https://github.com/C241-PS529",
    },
    {
        id: 2,
        title: "Gemini Clone",
        description: "A custom-built AI-powered chatbot application inspired by Google Gemini, designed to provide interactive and intelligent conversations.",
        image: "/projects/GeminiClone.PNG",
        tags: ["React", "Javascript", "Tailwind"],
        demoUrl: "https://gemini-clone-coral-five.vercel.app/",
        githubUrl: "https://github.com/Longhord/Gemini-clone",
    },
    {
        id: 3,
        title: "Portfolio",
        description: "A personal portfolio website showcasing my skills, projects, and contact information.",
        image: "/projects/portfolioweb.PNG",
        tags: ["React", "Tailwind", "Javascript"],
        demoUrl: "https://ifangustian.netlify.app/",
        githubUrl: "https://github.com/Longhord/Gemini-clone",
    }
]

export const ProjectSections = () => {
    const [headerRef, headerVisible] = useScrollAnimation();
    const [projectsRef, projectsVisible] = useScrollAnimation();
    const [buttonRef, buttonVisible] = useScrollAnimation();

    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <div 
                ref={headerRef}
                className={`scroll-fade-in ${headerVisible ? 'visible' : ''}`}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary"> Projects </span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Take a look at some of my featured projects that I’ve worked on, combining creativity, technology, and problem-solving.
                </p>
            </div>

            <div 
                ref={projectsRef}
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-fade-in-scale ${projectsVisible ? 'visible' : ''}`}
            >
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground">{tag} </span>
                                ))}
                            </div>
                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                            {project.description}
                        </p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <ExternalLink size={20} />
                                </a>
                                <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <Github size={20} />
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}

            </div>
            <div 
                ref={buttonRef}
                className={`text-center mt-12 scroll-fade-in ${buttonVisible ? 'visible' : ''}`}
            >
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" rel="noopener noreferrer" href="https://github.com/Longhord">
                    Check My Github <ArrowRight size={16} />
                </a>
            </div>

        </div>
    </section>
}