
import { motion, useReducedMotion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { experience } from "../../data/experience";
import { SectionHeading } from "../ui/SectionHeading";

export function Experience() {
    const reduceMotion = useReducedMotion();

    return (
        <section
            id="experience"
            className="scroll-mt-28 bg-[#F5F5F0] px-5 py-20 text-neutral-900 transition-colors duration-300 dark:bg-[#171717] dark:text-[#F5F5F0] sm:px-8 sm:py-28"
        >
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="Career timeline"
                    title="Experience built by shipping real work."
                    subtitle="From an early job-search product to enterprise interfaces and API-connected SaaS workflows."
                    align="left"
                />

                {/* Timeline */}
                <div className="relative mt-12 space-y-6 before:absolute before:bottom-8 before:left-5 before:top-6 before:w-px before:bg-gradient-to-b before:from-lime-500 before:via-lime-500/30 before:to-transparent dark:before:from-lime-400 dark:before:via-lime-400/25">
                    {experience.map((entry, index) => {
                        const Icon =
                            index === 0
                                ? BriefcaseBusiness
                                : GraduationCap;

                        return (
                            <motion.article
                                key={`${entry.company}-${entry.role}`}
                                initial={{
                                    opacity: 0,
                                    x: reduceMotion ? 0 : -14,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.15,
                                }}
                                transition={{
                                    duration: reduceMotion ? 0 : 0.5,
                                    delay: reduceMotion
                                        ? 0
                                        : index * 0.1,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="relative pl-14"
                            >
                                {/* Timeline icon */}
                                <span className="absolute left-0 top-1 grid h-10 w-10 place-items-center border border-lime-500/30 bg-[#F5F5F0] text-lime-700 shadow-sm transition-colors dark:border-lime-400/25 dark:bg-[#171717] dark:text-lime-400">
                                    <Icon
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    />
                                </span>

                                {/* Experience card */}
                                <div className="group rounded-2xl border border-neutral-900/10 bg-white/70 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-lime-500/50 hover:bg-white dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-lime-400/40 dark:hover:bg-white/[0.04] sm:rounded-3xl sm:p-7">
                                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                                        <div className="min-w-0">
                                            <h3 className="font-['Space_Grotesk',sans-serif] text-xl font-bold tracking-tight text-neutral-900 dark:text-[#F5F5F0] sm:text-2xl">
                                                {entry.role}
                                            </h3>

                                            <p className="mt-2 text-sm font-semibold text-lime-700 dark:text-lime-400">
                                                {entry.company}
                                                <span className="font-normal text-neutral-500 dark:text-neutral-400">
                                                    {" "}
                                                    · {entry.location}
                                                </span>
                                            </p>
                                        </div>

                                        <span className="w-fit shrink-0 border border-neutral-900/10 bg-[#F5F5F0] px-3 py-1.5 font-mono text-[10px] font-medium text-neutral-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-neutral-300 sm:text-xs">
                                            {entry.period}
                                        </span>
                                    </div>

                                    {/* Responsibilities */}
                                    <ul className="mt-6 space-y-3">
                                        {entry.bullets.map((bullet) => (
                                            <li
                                                key={bullet}
                                                className="flex items-start gap-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className="mt-[11px] h-1.5 w-1.5 shrink-0 bg-lime-500 dark:bg-lime-400"
                                                />
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Technologies */}
                                    <div className="mt-6 border-t border-neutral-900/10 pt-5 dark:border-white/10">
                                        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
                                            Technologies & tools
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {entry.stack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="border border-neutral-900/10 px-2.5 py-1.5 text-xs font-medium text-neutral-600 transition-colors hover:border-lime-500/50 hover:text-neutral-900 dark:border-white/10 dark:text-neutral-400 dark:hover:border-lime-400/40 dark:hover:text-lime-400"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Card accent */}
                                    <div className="mt-5 h-[2px] w-8 bg-lime-400 transition-all duration-300 group-hover:w-16" />
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
