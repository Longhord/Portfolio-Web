
import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="relative mt-12 border-t border-border bg-card/80 backdrop-blur-xl">
            <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground w-full text-center ml-14">
                    &copy;{new Date().getUTCFullYear()} <span className="font-medium text-foreground">Ifan Gustian</span>
                </p>
                <a
                    href="#hero"
                    aria-label="Back to top"
                    className="group inline-flex items-center gap-2 px-3 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 shadow-lg transition-all duration-300 hover:bg-primary/15 hover:shadow-primary/25 hover:scale-105 active:scale-95"
                >
                    <ArrowUp size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5"/>
                </a>
            </div>
        </footer>
    )
}