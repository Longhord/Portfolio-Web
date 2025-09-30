import { Code, Database, ClipboardList, Brain } from "lucide-react";
import { useScrollAnimation } from "../hooks/use-scroll-animation";

export const AboutSection = () => {
    const [titleRef, titleVisible] = useScrollAnimation();
    const [leftRef, leftVisible] = useScrollAnimation();
    const [rightRef, rightVisible] = useScrollAnimation();

    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-2-5xl">
                <h2 
                    ref={titleRef}
                    className={`text-3xl md:text-4xl font-bold mb-12 text-center scroll-fade-in ${titleVisible ? 'visible' : ''}`}
                >
                    About  <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div 
                        ref={leftRef}
                        className={`space-y-6 scroll-fade-in-left ${leftVisible ? 'visible' : ''}`}
                    >
                        <h3 className="text-2xl font-semibold">Passionate in Web Developer and Other Technology</h3>
                        <p className="text-muted-foreground">
                            I am a dedicated web developer with a strong passion for technology and innovation. With a keen interest in both frontend and backend development, I enjoy turning ideas into interactive and user-friendly digital experiences. I am always eager to learn new skills in the tech world.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button"> Get In Touch</a>
                            <a href="/projects/Template%20CV.pdf" download="Ifan-Gustian-CV.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"> Download CV</a>
                        </div>
                    </div>
                    <div 
                        ref={rightRef}
                        className={`grid grid-cols-1 gap-6 scroll-fade-in-right ${rightVisible ? 'visible' : ''}`}
                    >
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">
                                    Experienced in building responsive and user-friendly websites with modern frameworks, focusing on functionality and scalability.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Database className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Database Management</h4>
                                    <p className="text-muted-foreground">
                                    Skilled in designing, integrating, and managing databases using MySQL, and Firebase to ensure secure and efficient data handling.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <ClipboardList className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p className="text-muted-foreground">
                                    Capable working with Agile methodologies such as Scrum and Prototyping to deliver high-quality results on time.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Brain className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Problem Solving</h4>
                                    <p className="text-muted-foreground">
                                    Strong ability to analyze problems, think critically, and develop effective solutions to overcome technical and project challenges.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}