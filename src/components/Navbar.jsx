import { useState, useEffect } from "react";
import { cn } from '@/lib/utils';
import { Menu, X, Code, Moon, Sun } from "lucide-react";

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const storedTheme = localStorage.getItem("theme");
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (storedTheme === "dark" || (!storedTheme && systemTheme)) {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (itemName) => {
        setActiveSection(itemName);
        setIsMenuOpen(false);
    };

    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        
        if (newTheme) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <nav
            className={cn(
                "fixed w-full z-40 transition-all duration-500 ease-out",
                isScrolled 
                    ? "py-3 bg-background/90 backdrop-blur-xl shadow-lg border-b border-primary/20" 
                    : "py-6 bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <a 
                    href="#hero" 
                    className="navbar-logo-hover group flex items-center space-x-2 text-xl font-bold"
                    onClick={() => handleNavClick("Home")}
                >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <Code className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-glow text-foreground group-hover:text-primary transition-colors duration-300">
                        <span className="text-primary">IFAN GUSTIAN</span> Portfolio
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-1">
                    {navItems.map((item, key) => (
                        <a  
                            key={key} 
                            href={item.href} 
                            className={cn(
                                "navbar-link relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group",
                                activeSection === item.name
                                    ? "text-primary bg-primary/10"
                                    : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                            )}
                            onClick={() => handleNavClick(item.name)}
                        >
                            <span className="relative z-10">{item.name}</span>
                            {activeSection === item.name && (
                                <div className="absolute inset-0 bg-primary/10 rounded-lg animate-pulse-subtle" />
                            )}
                            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0" />
                        </a>
                    ))}
                    
                    {/* Theme Toggle Button */}
                    {mounted && (
                        <button
                            onClick={toggleTheme}
                            type="button"
                            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                            className={cn(
                                "ml-4 p-2 rounded-lg transition-all duration-300 group",
                                "hover:bg-primary/10 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/50",
                                isDarkMode ? "theme-toggle-dark" : "theme-toggle-light"
                            )}
                        >
                            {isDarkMode ? (
                                <Sun className="h-5 w-5 text-yellow-400 group-hover:text-yellow-300 transition-all duration-300 group-hover:rotate-180" />
                            ) : (
                                <Moon className="h-5 w-5 text-slate-700 group-hover:text-blue-600 transition-all duration-300 group-hover:rotate-12" />
                            )}
                        </button>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(prev => !prev)}
                    className={cn(
                        "md:hidden p-3 rounded-lg transition-all duration-300 z-50",
                        isMenuOpen 
                            ? "bg-primary/10 text-primary" 
                            : "text-foreground hover:bg-primary/5"
                    )}
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    <div className="relative w-6 h-6">
                        <Menu 
                            size={24} 
                            className={cn(
                                "absolute inset-0 transition-all duration-300",
                                isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                            )}
                        />
                        <X 
                            size={24} 
                            className={cn(
                                "absolute inset-0 transition-all duration-300",
                                isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                            )}
                        />
                    </div>
                </button>
                
                {/* Mobile Menu Overlay */}
                <div className={cn(
                    "mobile-menu-overlay bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center",
                    "transition-all duration-500 ease-out md:hidden",
                    "transform-gpu",
                    isMenuOpen 
                        ? "opacity-100 pointer-events-auto translate-y-0" 
                        : "opacity-0 pointer-events-none translate-y-4"
                )}>
                    <button
                        type="button"
                        aria-label="Close Menu"
                        className="absolute top-5 right-5 p-3 rounded-lg hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <X className="h-6 w-6" />
                    </button>

                    <div className="flex flex-col space-y-6 text-center px-4">
                        {navItems.map((item, key) => (
                            <a  
                                key={key} 
                                href={item.href} 
                                className={cn(
                                    "mobile-menu-item text-2xl font-medium px-6 py-3 rounded-xl transition-all duration-300 transform",
                                    "w-full max-w-xs mx-auto",
                                    activeSection === item.name
                                        ? "text-primary bg-primary/10 scale-105"
                                        : "text-foreground/70 hover:text-primary hover:bg-primary/5 hover:scale-105"
                                )}
                                onClick={() => handleNavClick(item.name)}
                            >
                                {item.name}
                            </a>
                        ))}
                        
                        {/* Mobile Theme Toggle */}
                        {mounted && (
                            <button
                                onClick={toggleTheme}
                                type="button"
                                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                                className={cn(
                                    "mobile-menu-item flex items-center justify-center gap-3 text-xl font-medium px-6 py-3 rounded-xl transition-all duration-300 transform",
                                    "w-full max-w-xs mx-auto",
                                    "hover:bg-primary/10 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                )}
                            >
                                {isDarkMode ? (
                                    <>
                                        <Sun className="h-6 w-6 text-yellow-400" />
                                        <span>Light Mode</span>
                                    </>
                                ) : (
                                    <>
                                        <Moon className="h-6 w-6 text-slate-700" />
                                        <span>Dark Mode</span>
                                    </>
                                )}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};