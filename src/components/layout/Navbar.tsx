
import { useEffect, useState } from "react";
import {
    motion,
    useScroll,
    useSpring,
} from "framer-motion";
import {
    ArrowUpRight,
    Menu,
    Moon,
    Sun,
    X,
} from "lucide-react";

const links = [
    { id: "about", label: "About" },
    { id: "skills", label: "Expertise" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Selected work" },
    { id: "contact", label: "Contact" },
];

export function Navbar() {
    const [active, setActive] = useState("top");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [dark, setDark] = useState(() => {
        const savedTheme = localStorage.getItem("portfolio-theme");
        return savedTheme !== "light";
    });
    const { scrollYProgress } = useScroll();

    const progress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        mass: 0.2,
    });

    // Apply and persist the selected theme.
    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
        localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
    }, [dark]);

    // Track the active section while scrolling.
    useEffect(() => {
        const elements = links
            .map(({ id }) => document.getElementById(id))
            .filter((element): element is HTMLElement => Boolean(element));

        if (!("IntersectionObserver" in window)) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-35% 0px -55% 0px",
            },
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    // Close the mobile menu when the screen becomes desktop-sized.
    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1024px)");

        const handleResize = (event: MediaQueryListEvent) => {
            if (event.matches) {
                setMobileMenuOpen(false);
            }
        };

        mediaQuery.addEventListener("change", handleResize);

        return () => {
            mediaQuery.removeEventListener("change", handleResize);
        };
    }, []);

    const closeMobileMenu = () => setMobileMenuOpen(false);

    const toggleTheme = () => setDark((value) => !value);

    return (
        <>
            {/* Scroll progress indicator */}
            <motion.div
                aria-hidden="true"
                className="fixed inset-x-0 top-0 z-[100] h-[3px] origin-left bg-lime-400"
                style={{ scaleX: progress }}
            />

            {/* Navigation */}
            <header className="fixed inset-x-0 top-[3px] z-50 px-3 pt-3 sm:px-5 sm:pt-4 lg:px-8">
                <nav
                    aria-label="Main navigation"
                    className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 border border-neutral-900/10 bg-[#F5F5F0]/90 px-4 py-3 shadow-sm backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-[#171717]/90 sm:px-6 lg:px-8"
                >
                    {/* Brand */}
                    <a
                        href="#top"
                        onClick={closeMobileMenu}
                        aria-label="Vasanth Muthoju, home"
                        className="group flex min-w-0 shrink-0 items-center gap-3"
                    >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-neutral-900 font-mono text-sm font-bold tracking-tight text-lime-400 transition-colors duration-200 group-hover:bg-lime-400 group-hover:text-neutral-900 dark:bg-lime-400 dark:text-neutral-900 dark:group-hover:bg-[#F5F5F0]">
                            VM
                        </span>

                        <span className="truncate font-['Space_Grotesk',sans-serif] text-sm font-bold tracking-tight text-neutral-900 dark:text-[#F5F5F0] sm:text-base">
                            Vasanth Muthoju
                            <span className="text-lime-600 dark:text-lime-400">
                                .
                            </span>
                        </span>
                    </a>

                    {/* Desktop navigation links */}
                    <div className="hidden items-center gap-1 lg:flex">
                        {links.map((link) => {
                            const isActive = active === link.id;

                            return (
                                <a
                                    key={link.id}
                                    href={`#${link.id}`}
                                    aria-current={
                                        isActive ? "location" : undefined
                                    }
                                    className={`relative px-3 py-2 text-[11px] font-semibold transition-colors duration-200 xl:px-4 xl:text-xs ${isActive
                                        ? "text-neutral-900 dark:text-lime-400"
                                        : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-[#F5F5F0]"
                                        }`}
                                >
                                    {link.label}

                                    <span
                                        className={`absolute inset-x-3 -bottom-[1px] h-[2px] origin-left bg-lime-400 transition-transform duration-300 ${isActive
                                            ? "scale-x-100"
                                            : "scale-x-0"
                                            }`}
                                    />
                                </a>
                            );
                        })}
                    </div>

                    {/* Desktop actions */}
                    <div className="hidden shrink-0 items-center gap-2 lg:flex">
                        <a
                            href="#contact"
                            className="inline-flex min-h-10 items-center justify-center gap-2 bg-neutral-900 px-4 py-2 text-xs font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-lime-400 hover:text-neutral-900 dark:bg-lime-400 dark:text-neutral-900 dark:hover:bg-[#F5F5F0]"
                        >
                            Let's talk
                            <ArrowUpRight
                                size={15}
                                aria-hidden="true"
                            />
                        </a>

                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
                            title={`Switch to ${dark ? "light" : "dark"} mode`}
                            className="inline-flex h-10 w-10 items-center justify-center border border-neutral-900/10 text-neutral-600 transition-all duration-200 hover:border-lime-400 hover:bg-lime-400 hover:text-neutral-900 dark:border-white/15 dark:text-neutral-300 dark:hover:border-lime-400 dark:hover:text-neutral-900"
                        >
                            {dark ? (
                                <Sun size={17} aria-hidden="true" />
                            ) : (
                                <Moon size={17} aria-hidden="true" />
                            )}
                        </button>
                    </div>

                    {/* Mobile actions */}
                    <div className="flex shrink-0 items-center gap-2 lg:hidden">
                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
                            title={`Switch to ${dark ? "light" : "dark"} mode`}
                            className="inline-flex h-10 w-10 items-center justify-center border border-neutral-900/10 text-neutral-700 transition-colors hover:border-lime-400 hover:bg-lime-400 hover:text-neutral-900 dark:border-white/15 dark:text-neutral-300 dark:hover:border-lime-400 dark:hover:text-neutral-900"
                        >
                            {dark ? (
                                <Sun size={17} aria-hidden="true" />
                            ) : (
                                <Moon size={17} aria-hidden="true" />
                            )}
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                setMobileMenuOpen((value) => !value)
                            }
                            aria-label={
                                mobileMenuOpen
                                    ? "Close navigation menu"
                                    : "Open navigation menu"
                            }
                            aria-expanded={mobileMenuOpen}
                            aria-controls="mobile-navigation"
                            className="inline-flex h-10 w-10 items-center justify-center border border-neutral-900/10 text-neutral-900 transition-colors hover:border-lime-400 hover:bg-lime-400 dark:border-white/15 dark:text-[#F5F5F0] dark:hover:border-lime-400 dark:hover:text-neutral-900"
                        >
                            {mobileMenuOpen ? (
                                <X size={19} aria-hidden="true" />
                            ) : (
                                <Menu size={19} aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </nav>

                {/* Mobile dropdown */}
                <motion.div
                    id="mobile-navigation"
                    initial={false}
                    animate={
                        mobileMenuOpen
                            ? { opacity: 1, height: "auto", y: 0 }
                            : { opacity: 0, height: 0, y: -8 }
                    }
                    transition={{
                        duration: 0.22,
                        ease: "easeOut",
                    }}
                    className={`mx-auto max-w-[1440px] overflow-hidden border-x border-b border-neutral-900/10 bg-[#F5F5F0]/95 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-[#171717]/95 lg:hidden ${mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
                        }`}
                    aria-hidden={!mobileMenuOpen}
                >
                    <div className="flex flex-col p-3 sm:p-4">
                        {links.map((link, index) => {
                            const isActive = active === link.id;

                            return (
                                <motion.a
                                    key={link.id}
                                    href={`#${link.id}`}
                                    tabIndex={mobileMenuOpen ? 0 : -1}
                                    aria-current={
                                        isActive ? "location" : undefined
                                    }
                                    onClick={closeMobileMenu}
                                    initial={false}
                                    animate={{
                                        opacity: mobileMenuOpen ? 1 : 0,
                                        x: mobileMenuOpen ? 0 : -8,
                                    }}
                                    transition={{
                                        duration: 0.2,
                                        delay: mobileMenuOpen
                                            ? index * 0.035
                                            : 0,
                                    }}
                                    className={`flex items-center justify-between border-b border-neutral-900/5 px-3 py-3.5 text-sm font-semibold last:border-b-0 dark:border-white/5 ${isActive
                                        ? "text-lime-700 dark:text-lime-400"
                                        : "text-neutral-700 hover:bg-neutral-900/5 dark:text-neutral-300 dark:hover:bg-white/5"
                                        }`}
                                >
                                    {link.label}

                                    {isActive && (
                                        <span
                                            aria-hidden="true"
                                            className="h-1.5 w-1.5 bg-lime-400"
                                        />
                                    )}
                                </motion.a>
                            );
                        })}

                        <a
                            href="#contact"
                            onClick={closeMobileMenu}
                            className="mt-3 inline-flex min-h-11 items-center justify-center gap-2 bg-neutral-900 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-lime-400 hover:text-neutral-900 dark:bg-lime-400 dark:text-neutral-900 dark:hover:bg-[#F5F5F0]"
                        >
                            Let's talk
                            <ArrowUpRight
                                size={16}
                                aria-hidden="true"
                            />
                        </a>
                    </div>
                </motion.div>
            </header>
        </>
    );
}
