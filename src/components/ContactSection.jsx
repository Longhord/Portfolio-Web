
import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "../hooks/use-scroll-animation";

export const ContactSection = () => {
    const [headerRef, headerVisible] = useScrollAnimation();
    const [leftRef, leftVisible] = useScrollAnimation();
    const [rightRef, rightVisible] = useScrollAnimation();

    // No JS submit handler needed; form posts directly to email service

    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <div 
                ref={headerRef}
                className={`scroll-fade-in ${headerVisible ? 'visible' : ''}`}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quo nobis expedita minus magnam eaque dolor soluta delectus voluptate iste.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div 
                    ref={leftRef}
                    className={`flex flex-col items-center md:items-start space-y-8 scroll-fade-in-left ${leftVisible ? 'visible' : ''}`}
                >
                    <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
                        Contact Information
                    </h3>
                    <div className="flex flex-col items-center md:items-start space-y-6 justify-center w-full">
                        <div className="flex flex-col items-center md:flex-row md:justify-start md:items-center gap-2 w-full max-w-md">
                            <div className="p-2 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1 flex flex-col items-center md:items-start">
                                <h4 className="font-medium text-center md:text-left">Email</h4>
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=ifangustian21@gmail.com&body="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-muted-foreground hover:text-primary transition-colors text-center md:text-left"
                                >
                                    ifangustian21@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center md:flex-row md:justify-start md:items-center gap-2 w-full max-w-md">
                            <div className="p-2 rounded-full bg-primary/10"><Phone className="h-6 w-6 text-primary" /></div>
                            <div className="flex-1 flex flex-col items-center md:items-start">
                                <h4 className="font-medium text-center md:text-left">Phone</h4>
                                <a
                                    href="https://wa.me/6285946641616?text=Halo%20Ifan%20Gustian%20saya%20menghubungi%20anda%20melalui%20portfolio%20anda"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-muted-foreground hover:text-primary transition-colors text-center md:text-left"
                                >
                                    +62 859-4664-1616
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center md:flex-row md:justify-start md:items-center gap-2 w-full max-w-md">
                            <div className="p-2 rounded-full bg-primary/10"><MapPin className="h-6 w-6 text-primary" /></div>
                            <div className="flex-1 flex flex-col items-center md:items-start">
                                <h4 className="font-medium text-center md:text-left">Location</h4>
                                <a className="block text-muted-foreground hover:text-primary transition-colors text-center md:text-left">
                                    Cilegon, Banten, Indonesia
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8">
                        <h4 className="font-medium mb-4">Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/ifan-gustian" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
                            <a href="https://www.instagram.com/ifan.gustian" target="_blank" rel="noopener noreferrer"><Instagram /></a>
                            <a href="https://github.com/Longhord" target="_blank" rel="noopener noreferrer"><Github /></a>
                        </div>
                    </div>
                </div>
                <div 
                    ref={rightRef}
                    className={`bg-card p-8 rounded-lg shadow-xs scroll-fade-in-right ${rightVisible ? 'visible' : ''}`}
                >
                    <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
                    <form className="space-y-6" action="https://formsubmit.co/ifangustian21@gmail.com" method="POST">
                        <input type="hidden" name="_subject" value="New Contact from Portfolio" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="/?sent=1#contact" />
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                            <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Your Name..." />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                            <input type="email" id="email" name="_replyto" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="YourEmail@example.com" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                            <textarea id="message" name="message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Your Message..."></textarea>
                        </div>
                        <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2 mt-4")}> 
                            Send Message
                            <Send size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
}