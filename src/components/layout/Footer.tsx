
import { ArrowUpRight } from "lucide-react";
import { socials } from "../../data/socials";

export function Footer() {
    return (
        <footer className="border-t border-neutral-900/10 bg-[#F5F5F0] text-neutral-600 transition-colors duration-300 dark:border-white/10 dark:bg-[#171717] dark:text-neutral-400">
            <div className="mx-auto flex w-full max-w-[1392px] flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12 2xl:px-[76px]">
                {/* Brand */}
                <a
                    href="#top"
                    aria-label="Vasanth Muthoju, back to top"
                    className="group inline-flex items-center gap-2 self-start md:self-auto"
                >
                    <span className="font-['Space_Grotesk',sans-serif] text-lg font-bold tracking-tight text-neutral-900 transition-colors group-hover:text-lime-700 dark:text-[#F5F5F0] dark:group-hover:text-lime-400">
                        VM<span className="text-lime-600 dark:text-lime-400">.</span>
                    </span>

                    <span className="h-4 w-px bg-neutral-900/15 dark:bg-white/15" />

                    <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                        Frontend Engineer
                    </span>
                </a>

                {/* Copyright */}
                <p className="text-xs leading-6 text-neutral-500 dark:text-neutral-400">
                    © {new Date().getFullYear()} Vasanth Muthoju.
                    <span className="hidden sm:inline"> Built with </span>
                    <span className="sm:hidden">Built with </span>
                    React, TypeScript &amp; Tailwind CSS.
                </p>

                {/* Social links */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                    <a
                        href={socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit GitHub profile"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200 hover:text-lime-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-500 dark:hover:text-lime-400"
                    >
                        GitHub
                        <ArrowUpRight
                            aria-hidden="true"
                            className="h-3.5 w-3.5"
                        />
                    </a>

                    <a
                        href={socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit LinkedIn profile"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200 hover:text-lime-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-500 dark:hover:text-lime-400"
                    >
                        LinkedIn
                        <ArrowUpRight
                            aria-hidden="true"
                            className="h-3.5 w-3.5"
                        />
                    </a>

                    <a
                        href={`mailto:${socials.email}`}
                        className="text-xs font-semibold transition-colors duration-200 hover:text-lime-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-500 dark:hover:text-lime-400"
                    >
                        Email
                    </a>
                </div>
            </div>

            {/* Bottom accent */}
            <div
                aria-hidden="true"
                className="h-[2px] w-full bg-lime-400"
            />
        </footer>
    );
}
