import { useState } from "react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "../hooks/use-scroll-animation";

const skills = [
    // Frontend
    { name: "React.js", category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "TailwindCSS", category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Laravel", category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
    { name: "Bootstrap", category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },

    // Backend
    { name: "PHP", category: "backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
    { name: "MySQL", category: "backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "Express.js", category: "backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
    { name: "Node.js", category: "backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Python", category: "backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },

    // Tools
    { name: "GitHub", category: "tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
    { name: "Postman", category: "tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")
    const [titleRef, titleVisible] = useScrollAnimation();
    const [filtersRef, filtersVisible] = useScrollAnimation();
    const [skillsRef, skillsVisible] = useScrollAnimation();

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)

    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 
                ref={titleRef}
                className={`text-3xl md:text-4xl font-bold mb-12 text-center scroll-fade-in ${titleVisible ? 'visible' : ''}`}
            >
                My <span>Skills</span>
            </h2>

            <div 
                ref={filtersRef}
                className={`flex flex-wrap justify-center gap-4 mb-12 scroll-fade-in ${filtersVisible ? 'visible' : ''}`}
            >
                {categories.map((category, key) => (
                    <button key={key} onClick={() => setActiveCategory(category)} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize", activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary/80")}>
                        {category}
                    </button>
                ))}
            </div>
            <div 
                ref={skillsRef}
                className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 scroll-fade-in-scale ${skillsVisible ? 'visible' : ''}`}
            >
                {filteredSkills.map((skill, key) => (
                    <div
                        key={key}
                        className="relative group card-surface p-4 sm:p-5 rounded-xl card-hover ring-1 ring-transparent hover:ring-primary/20 overflow-hidden"
                        style={{ aspectRatio: '1 / 1' }}
                    >
                        <span className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl transition-colors duration-500 group-hover:bg-primary/20" />
                        <div className="relative h-full w-full flex flex-col items-center justify-center gap-3 sm:gap-4">
                            <div className="h-16 w-16 sm:h-20 sm:w-20 flex items-center justify-center rounded-lg bg-gradient-to-br from-secondary to-white/60 dark:to-secondary ring-1 ring-border shadow-sm transition-transform duration-300 group-hover:scale-110">
                                <img src={skill.icon} alt={skill.name + ' logo'} className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />
                            </div>
                            <h3 className="font-semibold tracking-tight text-sm sm:text-base text-center text-foreground/90 group-hover:text-foreground transition-colors">
                                {skill.name}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>;
}