import { ArrowDown } from "lucide-react";


export const HeroSection = () => {
    return  ( <section 
    id="hero"
    className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div className="container max-2-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <div className="opacity-0 animate-fade-in-delay-1 flex justify-center">
                    <div className="profile-tilt">
                        <div className="profile-card animate-float">
                            <img
                                src="/projects/ifan.jpg"
                                alt="Ifan Gustian"
                                className="profile-image"
                            />
                        </div>
                    </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">Ifan </span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Gustian</span>
                </h1>
                <p className="textlg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                Hi! I’m Ifan Gustian, an Informatics Engineering student. passionate web developer dedicated to building modern, interactive, and responsive websites. With experience in both frontend and backend technologies, I enjoy learning  and creating new things. Let's connect and collaborate!
                </p>
                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>

        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foeground mb-2"> Scroll </span>
            <ArrowDown className="h-5 w-5 text-primary" />
        </div>
    </section> 

    );
}