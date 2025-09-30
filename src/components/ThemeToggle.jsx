import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import {cn} from "@/lib/utils";

export const ThemeToggle = () => {
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

    // Prevent hydration mismatch
    if (!mounted) {
        return null;
    }

    return (
        <button 
            onClick={toggleTheme}
            type="button"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            className={cn(
                "fixed top-5 right-5 z-[60] p-3 rounded-full transition-all duration-500 ease-out",
                "backdrop-blur-xl border-2 shadow-2xl",
                "hover:scale-110 focus:outline-none focus:ring-4 focus:ring-primary/30",
                "max-sm:top-4 max-sm:right-4 max-sm:p-2",
                "cursor-pointer select-none group relative overflow-hidden",
                isDarkMode ? "theme-toggle-dark" : "theme-toggle-light"
            )}
        >
            <div className="relative">
                {isDarkMode ? (
                    <Sun className="h-6 w-6 text-yellow-400 group-hover:text-yellow-300 transition-all duration-300 group-hover:rotate-180 drop-shadow-lg"/>
                ) : ( 
                    <Moon className="h-6 w-6 text-slate-700 group-hover:text-blue-600 transition-all duration-300 group-hover:rotate-12 drop-shadow-md"/>
                )}
            </div>
        </button>
    );
};