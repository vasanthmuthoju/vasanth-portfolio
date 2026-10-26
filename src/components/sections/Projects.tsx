
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";
import { ProjectCard } from "../ui/ProjectCard";

export function Projects() {
    const reduceMotion = useReducedMotion();

    return (
        <section
            id="projects"
            className="scroll-mt-24 bg-[#F5F5F0] px-5 py-20 text-neutral-900 transition-colors duration-300 dark:bg-[#171717] dark:text-[#F5F5F0] sm:px-8 sm:py-28"
        >
            <div className="mx-auto max-w-6xl">
                {/* Section heading */}
                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                    <div>
                        <span className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400 sm:text-xs">
                            <span className="h-[2px] w-7 bg-lime-500 dark:bg-lime-400" />
                            Selected work / 2025—2026
                        </span>

                        <h2 className="mt-5 font-['Space_Grotesk',sans-serif] text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.075em]">
                            Work that
                            <br />
                            <span className="text-lime-700 dark:text-lime-400">
                                solves problems.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-lg text-sm leading-7 text-neutral-600 dark:text-neutral-400 lg:justify-self-end lg:pb-2 sm:text-base">
                        Enterprise interfaces, SaaS workflows, and product
                        experiences. Explore the engineering challenges,
                        technologies, and features behind selected projects.
                    </p>
                </div>

                {/* Project grid */}
                <motion.div
                    className="mt-12 grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 md:gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: reduceMotion ? 0 : 0.08,
                            },
                        },
                    }}
                >
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </motion.div>

                {/* Section footer */}
                <div className="mt-10 flex flex-col gap-4 border-t border-neutral-900/10 pt-6 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-xl text-xs leading-6 text-neutral-500 dark:text-neutral-400 sm:text-sm">
                        Some projects are company-owned products. Public demos
                        and repositories are linked only when available.
                    </p>

                    <a
                        href="#contact"
                        className="group inline-flex w-fit shrink-0 items-center gap-2 text-sm font-bold transition-colors hover:text-lime-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-500 dark:hover:text-lime-400"
                    >
                        Discuss a project
                        <ArrowUpRight
                            size={16}
                            aria-hidden="true"
                            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
