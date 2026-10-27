
import { motion, useReducedMotion } from "framer-motion";
import {
    Code2,
    Layers,
    Palette,
    Plug,
    Zap,
    BarChart3,
    Wrench,
    Database,
    ClipboardCheck,
    GitBranch,
} from "lucide-react";

import { skillGroups } from "../../data/skills";
import { SectionHeading } from "../ui/SectionHeading";

const icons = {
    code: Code2,
    layers: Layers,
    palette: Palette,
    plug: Plug,
    zap: Zap,
    chart: BarChart3,
    wrench: Wrench,
    database: Database,
    "clipboard-check": ClipboardCheck,
    "git-branch": GitBranch,
} as const;

export function Skills() {
    const reduceMotion = useReducedMotion();

    return (
        <section
            id="skills"
            className="scroll-mt-28 border-y border-neutral-900/10 bg-[#F5F5F0] py-20 text-neutral-900 transition-colors duration-300 dark:border-white/10 dark:bg-[#171717] dark:text-[#F5F5F0] sm:py-28"
        >
            <div className="mx-auto max-w-6xl px-5 sm:px-8">
                <SectionHeading
                    eyebrow="Technical toolkit"
                    title="The tools behind the work."
                    subtitle="A practical stack for building, integrating and maintaining modern web applications."
                />

                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {skillGroups.map((group, index) => {
                        const Icon = icons[group.icon];

                        return (
                            <motion.article
                                key={group.label}
                                initial={{
                                    opacity: 0,
                                    y: reduceMotion ? 0 : 18,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.15,
                                }}
                                transition={{
                                    duration: reduceMotion ? 0 : 0.45,
                                    delay: reduceMotion
                                        ? 0
                                        : index * 0.045,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-900/10 bg-white/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-lime-500/50 hover:bg-white dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-lime-400/40 dark:hover:bg-white/[0.045] sm:p-6"
                            >
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-lime-400 transition-transform duration-300 group-hover:scale-x-100"
                                />

                                <div className="flex items-start justify-between">
                                    <span className="grid h-11 w-11 place-items-center border border-lime-500/20 bg-lime-400/15 text-lime-700 transition-colors duration-300 group-hover:border-lime-400 group-hover:bg-lime-400 group-hover:text-neutral-900 dark:border-lime-400/20 dark:text-lime-400 dark:group-hover:text-neutral-900">
                                        <Icon
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    </span>

                                    <span className="font-mono text-[10px] tracking-[0.16em] text-neutral-400 dark:text-neutral-600">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                <h3 className="mt-5 font-['Space_Grotesk',sans-serif] text-lg font-bold tracking-tight text-neutral-900 dark:text-[#F5F5F0]">
                                    {group.label}
                                </h3>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {group.items.map((item) => (
                                        <span
                                            key={item}
                                            className="inline-flex max-w-full items-center rounded-md border border-neutral-900/10 bg-[#F5F5F0] px-2.5 py-1.5 text-xs font-medium leading-4 text-neutral-600 transition-colors duration-200 group-hover:border-neutral-900/15 dark:border-white/10 dark:bg-white/[0.035] dark:text-neutral-300 dark:group-hover:border-white/15"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <div
                                    aria-hidden="true"
                                    className="mt-auto h-[2px] w-7 bg-lime-400/60 pt-0 transition-all duration-300 group-hover:w-12 group-hover:bg-lime-400"
                                />
                            </motion.article>
                        );
                    })}
                </div>

                <p className="mt-7 text-center text-xs leading-6 text-neutral-500 dark:text-neutral-400">
                    Tools and techniques shown reflect my working toolkit; I
                    keep expanding it through hands-on projects.
                </p>
            </div>
        </section>
    );
}
