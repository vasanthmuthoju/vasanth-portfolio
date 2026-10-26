
import { motion, useReducedMotion } from "framer-motion";
import {
    ArrowUpRight,
    Mail,
    MapPin,
    Copy,
    Check,
} from "lucide-react";
import { useState } from "react";
import { socials } from "../../data/socials";
import { SectionHeading } from "../ui/SectionHeading";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
        {...props}
    >
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.71 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.45 3.04-1.15 3.04-1.15.61 1.54.23 2.68.12 2.96.72.78 1.15 1.78 1.15 3.01 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.02.75 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
        {...props}
    >
        <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8.01 18.5H5.03V9h2.98v9.5ZM6.52 7.7a1.73 1.73 0 1 1 0-3.46 1.73 1.73 0 0 1 0 3.46ZM19 18.5h-2.98v-4.62c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.7H9.72V9h2.86v1.3h.04c.4-.75 1.37-1.54 2.82-1.54 3.02 0 3.58 1.99 3.58 4.58v5.16Z" />
    </svg>
);

export function Contact() {
    const [copied, setCopied] = useState(false);
    const reduceMotion = useReducedMotion();

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(socials.email);
            setCopied(true);

            window.setTimeout(() => setCopied(false), 2000);
        } catch {
            window.location.href = `mailto:${socials.email}`;
        }
    };

    return (
        <section
            id="contact"
            className="scroll-mt-28 bg-[#F5F5F0] px-5 py-20 text-neutral-900 transition-colors duration-300 dark:bg-[#171717] dark:text-[#F5F5F0] sm:px-8 sm:py-28"
        >
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="Start a conversation"
                    title="Have a frontend challenge in mind?"
                    subtitle="I'm interested in teams that value thoughtful product experiences, strong engineering fundamentals and continuous improvement."
                />

                <motion.div
                    initial={{
                        opacity: 0,
                        y: reduceMotion ? 0 : 18,
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: reduceMotion ? 0 : 0.55,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-neutral-900/10 bg-white/70 transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.03] sm:rounded-[2rem]"
                >
                    {/* Subtle lime decoration */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-lime-500/15"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-lime-500/20"
                    />

                    <div className="relative grid gap-8 p-6 sm:p-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
                        <div className="min-w-0">
                            {/* Availability label */}
                            <span className="inline-flex items-center gap-2 rounded-full border border-lime-600/25 bg-lime-400/10 px-3 py-1.5 text-xs font-semibold text-lime-800 dark:border-lime-400/25 dark:text-lime-400">
                                <span
                                    aria-hidden="true"
                                    className="h-1.5 w-1.5 rounded-full bg-lime-500"
                                />
                                Open to relevant opportunities
                            </span>

                            <h3 className="mt-6 max-w-xl font-['Space_Grotesk',sans-serif] text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                                Let's make the complex feel{" "}
                                <span className="text-lime-700 dark:text-lime-400">
                                    simple.
                                </span>
                            </h3>

                            <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-600 dark:text-neutral-400 sm:text-base">
                                For frontend engineering roles, product
                                collaborations, or a conversation about React
                                and SaaS interfaces, reach out directly.
                            </p>

                            <p className="mt-6 inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                                <MapPin
                                    className="h-4 w-4 shrink-0 text-lime-700 dark:text-lime-400"
                                    aria-hidden="true"
                                />
                                {socials.location}
                            </p>
                        </div>

                        {/* Contact actions */}
                        <div className="flex flex-col gap-3 md:min-w-48">
                            <a
                                href={`mailto:${socials.email}`}
                                className="inline-flex min-h-12 items-center justify-center gap-2 bg-neutral-900 px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-lime-400 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-500 dark:bg-lime-400 dark:text-neutral-900 dark:hover:bg-[#F5F5F0]"
                            >
                                <Mail className="h-4 w-4" aria-hidden="true" />
                                Email me
                                <ArrowUpRight
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                            </a>

                            <button
                                type="button"
                                onClick={copyEmail}
                                className="inline-flex min-h-12 items-center justify-center gap-2 border border-neutral-900/15 px-5 py-3 text-sm font-semibold text-neutral-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-lime-600 hover:bg-lime-400/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-500 dark:border-white/15 dark:text-neutral-200 dark:hover:border-lime-400 dark:hover:text-lime-400"
                            >
                                {copied ? (
                                    <Check
                                        className="h-4 w-4 text-lime-700 dark:text-lime-400"
                                        aria-hidden="true"
                                    />
                                ) : (
                                    <Copy
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    />
                                )}
                                {copied ? "Email copied" : "Copy email"}
                            </button>
                        </div>
                    </div>

                    {/* Email and social links */}
                    <div className="relative flex flex-col gap-4 border-t border-neutral-900/10 px-6 py-5 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between sm:px-10">
                        <a
                            href={`mailto:${socials.email}`}
                            className="break-all text-sm font-medium text-neutral-500 transition-colors hover:text-lime-700 dark:text-neutral-400 dark:hover:text-lime-400"
                        >
                            {socials.email}
                        </a>

                        <div className="flex items-center gap-2">
                            <a
                                href={socials.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit GitHub profile"
                                className="grid h-10 w-10 place-items-center border border-neutral-900/10 text-neutral-600 transition-all duration-200 hover:border-lime-500 hover:bg-lime-400 hover:text-neutral-900 dark:border-white/10 dark:text-neutral-300 dark:hover:border-lime-400 dark:hover:text-neutral-900"
                            >
                                <GithubIcon className="h-4 w-4" />
                            </a>

                            <a
                                href={socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit LinkedIn profile"
                                className="grid h-10 w-10 place-items-center border border-neutral-900/10 text-neutral-600 transition-all duration-200 hover:border-lime-500 hover:bg-lime-400 hover:text-neutral-900 dark:border-white/10 dark:text-neutral-300 dark:hover:border-lime-400 dark:hover:text-neutral-900"
                            >
                                <LinkedinIcon className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
