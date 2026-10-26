
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import type { Project } from "../../data/projects";

interface Props {
    project: Project;
    index: number;
}

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

export function ProjectCard({ project, index }: Props) {
    const reduceMotion = useReducedMotion();

    return (
        <motion.article
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
                duration: reduceMotion ? 0 : 0.5,
                delay: reduceMotion ? 0 : Math.min(index * 0.07, 0.21),
                ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-neutral-900/10 bg-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-lime-500/50 hover:bg-white dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-lime-400/40 dark:hover:bg-white/[0.045] sm:rounded-3xl"
        >
            {/* Top accent */}
            <div
                aria-hidden="true"
                className="h-[3px] w-full origin-left scale-x-0 bg-lime-400 transition-transform duration-300 group-hover:scale-x-100"
            />

            <div className="flex flex-1 flex-col p-5 sm:p-7">
                {/* Project number and external links */}
                <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400 sm:text-xs">
                        Project / {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex shrink-0 items-center gap-2">
                        {project.repo && (
                            <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.title} source code`}
                                title="View source code"
                                className="grid h-9 w-9 place-items-center border border-neutral-900/10 text-neutral-500 transition-colors hover:border-lime-500 hover:bg-lime-400 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500 dark:border-white/10 dark:text-neutral-400 dark:hover:border-lime-400 dark:hover:text-neutral-900"
                            >
                                <GithubIcon className="h-[17px] w-[17px]" />
                            </a>
                        )}

                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.title} live demo`}
                                title="View live demo"
                                className="grid h-9 w-9 place-items-center border border-neutral-900/10 text-neutral-500 transition-colors hover:border-lime-500 hover:bg-lime-400 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500 dark:border-white/10 dark:text-neutral-400 dark:hover:border-lime-400 dark:hover:text-neutral-900"
                            >
                                <ArrowUpRight
                                    size={18}
                                    aria-hidden="true"
                                />
                            </a>
                        )}
                    </div>
                </div>

                {/* Project details */}
                <div className="mt-7 flex flex-1 flex-col">
                    <p className="text-xs font-semibold leading-6 text-lime-700 dark:text-lime-400">
                        {project.tagline}
                    </p>

                    <h3 className="mt-2 font-['Space_Grotesk',sans-serif] text-xl font-bold leading-snug tracking-tight text-neutral-900 dark:text-[#F5F5F0] sm:text-2xl">
                        {project.title}
                        <span className="text-lime-600 dark:text-lime-400">
                            .
                        </span>
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-400">
                        {project.description}
                    </p>

                    {/* Technology tags */}
                    <div
                        className="mt-5 flex flex-wrap gap-2"
                        aria-label="Technology stack"
                    >
                        {project.stack.map((technology) => (
                            <span
                                key={technology}
                                className="inline-flex max-w-full items-center rounded-md border border-neutral-900/10 bg-[#F5F5F0] px-2.5 py-1.5 text-[11px] font-medium leading-4 text-neutral-600 dark:border-white/10 dark:bg-white/[0.035] dark:text-neutral-300 sm:text-xs"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>

                    {/* Expandable case study */}
                    <details className="group/details mt-6 border-t border-neutral-900/10 pt-4 dark:border-white/10">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-1 text-sm font-semibold text-neutral-700 transition-colors hover:text-lime-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-500 dark:text-neutral-300 dark:hover:text-lime-400 [&::-webkit-details-marker]:hidden">
                            <span>Explore the engineering work</span>

                            <ChevronDown
                                className="h-4 w-4 shrink-0 transition-transform duration-200 group-open/details:rotate-180"
                                aria-hidden="true"
                            />
                        </summary>

                        <ul className="mt-4 space-y-3 pb-1">
                            {project.highlights.map((highlight) => (
                                <li
                                    key={highlight}
                                    className="flex items-start gap-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="mt-2 h-1.5 w-1.5 shrink-0 bg-lime-500 dark:bg-lime-400"
                                    />
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </details>
                </div>
            </div>
        </motion.article>
    );
}
