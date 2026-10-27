
import { motion, useReducedMotion } from "framer-motion";
import {
    ArrowDown,
    ArrowUpRight,
    Download,
} from "lucide-react";
import { socials } from "../../data/socials";

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
        <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8.01 18.5H5.03V9h2.98v9.5ZM6.52 7.7a1.73 1.73 0 1 1 0-3.46 1.73 1.73 0 0 1 0 3.46ZM19 18.5h-2.98v-4.62c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.7H9.5V9h2.86v1.3h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.78 1.98 3.78 4.56v5.18Z" />
    </svg>
);

const technologies = [
    "React",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "REST APIs",
    "Framer Motion",
];

const specialties = [
    "React Developer",
    "JavaScript",
    "TypeScript",
    "Web Development",
];

export function Hero() {
    const reduceMotion = useReducedMotion();

    const reveal = {
        hidden: {
            opacity: 0,
            y: reduceMotion ? 0 : 24,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    const transition = (delay: number) =>
        reduceMotion
            ? { duration: 0 }
            : {
                duration: 0.65,
                delay,
                ease: [0.22, 1, 0.36, 1] as const,
            };

    return (
        <section
            id="top"
            className="relative isolate flex min-h-[90svh] items-center overflow-hidden bg-[#F5F5F0] pt-32 pb-12 text-neutral-900 transition-colors duration-300 dark:bg-[#171717] dark:text-[#F5F5F0] sm:pt-36 sm:pb-16 lg:min-h-[100svh] lg:pt-32 lg:pb-16"
        >
            {/* Slowly rotating decorative outline rings */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            >
                {/* Outer ring */}
                <motion.div
                    animate={reduceMotion ? undefined : { rotate: 360 }}
                    transition={
                        reduceMotion
                            ? undefined
                            : {
                                duration: 100,
                                ease: "linear",
                                repeat: Infinity,
                            }
                    }
                    className="absolute -right-[24rem] -top-[22rem] h-[52rem] w-[52rem] rounded-full border border-neutral-900/[0.08] dark:border-white/[0.09] sm:-right-[18rem] sm:-top-[25rem] lg:-right-[15rem] lg:-top-[30rem] lg:h-[72rem] lg:w-[72rem]"
                />

                {/* Middle ring: opposite rotation */}
                <motion.div
                    animate={reduceMotion ? undefined : { rotate: -360 }}
                    transition={
                        reduceMotion
                            ? undefined
                            : {
                                duration: 75,
                                ease: "linear",
                                repeat: Infinity,
                            }
                    }
                    className="absolute -right-[17rem] -top-[15rem] h-[38rem] w-[38rem] rounded-full border border-lime-700/15 dark:border-lime-400/[0.13] sm:-right-[12rem] sm:-top-[18rem] lg:-right-[8rem] lg:-top-[21rem] lg:h-[52rem] lg:w-[52rem]"
                />

                {/* Inner ring */}
                <motion.div
                    animate={reduceMotion ? undefined : { rotate: 360 }}
                    transition={
                        reduceMotion
                            ? undefined
                            : {
                                duration: 55,
                                ease: "linear",
                                repeat: Infinity,
                            }
                    }
                    className="absolute -right-[10rem] -top-[8rem] h-[24rem] w-[24rem] rounded-full border border-neutral-900/[0.08] dark:border-white/[0.07] sm:-right-[7rem] sm:-top-[10rem] lg:-right-[1rem] lg:-top-[12rem] lg:h-[34rem] lg:w-[34rem]"
                />
            </div>

            <div className="mx-auto w-full max-w-[1392px] px-5 sm:px-8 lg:px-12 2xl:px-[76px]">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_260px] xl:gap-[72px]">
                    {/* Main introduction */}
                    <div className="min-w-0">
                        {/* Role label */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={reveal}
                            transition={transition(0.05)}
                            className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase leading-7 tracking-[0.12em] text-neutral-500 dark:text-neutral-400 sm:text-[11px]"
                        >
                            <span
                                aria-hidden="true"
                                className="h-2 w-2 shrink-0 bg-lime-400"
                            />
                            Frontend Engineer
                            <span className="text-lime-700 dark:text-lime-400">
                                /
                            </span>
                            React Developer
                        </motion.div>

                        {/* Name and headline */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={reveal}
                            transition={transition(0.12)}
                            className="mt-7"
                        >
                            <h1 className="flex flex-wrap items-baseline gap-x-3 font-['Space_Grotesk',sans-serif] text-[clamp(2.75rem,6.5vw,5.75rem)] font-bold leading-[0.98] tracking-[-0.075em]">
                                <span>Vasanth</span>
                                <span className="text-lime-500 dark:text-lime-400">
                                    Muthoju
                                    <span className="text-lime-400">.</span>
                                </span>
                            </h1>

                            <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10px] uppercase leading-7 tracking-[0.08em] text-neutral-500 dark:text-neutral-400 sm:text-xs">
                                <span>JavaScript</span>
                                <span className="text-lime-700 dark:text-lime-400">
                                    /
                                </span>
                                <span>TypeScript</span>
                                <span className="text-lime-700 dark:text-lime-400">
                                    /
                                </span>
                                <span>Web Development</span>
                            </p>

                            <h2 className="mt-9 font-['Space_Grotesk',sans-serif] text-[clamp(3.35rem,9.2vw,8rem)] font-bold leading-[0.87] tracking-[-0.095em]">
                                <span className="block">Building</span>
                                <span className="block">digital</span>
                                <span className="mt-2 block w-fit max-w-full bg-lime-400 px-[0.06em] pb-[0.04em] text-neutral-900">
                                    experiences.
                                </span>
                            </h2>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={reveal}
                            transition={transition(0.24)}
                            className="mt-7 max-w-xl text-sm leading-8 text-neutral-600 dark:text-neutral-400 sm:mt-8 sm:text-base"
                        >
                            I build responsive web applications and scalable
                            frontend experiences using React, JavaScript,
                            TypeScript, and modern web technologies.
                        </motion.p>

                        {/* Actions */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={reveal}
                            transition={transition(0.32)}
                            className="mt-7 flex flex-wrap gap-3"
                        >
                            <a
                                href="#projects"
                                className="inline-flex min-h-12 items-center justify-center gap-2.5 border border-neutral-900 bg-neutral-900 px-5 py-3 text-xs font-extrabold text-white transition hover:-translate-y-0.5 hover:border-lime-400 hover:bg-lime-400 hover:text-neutral-900 dark:border-[#F5F5F0] dark:bg-[#F5F5F0] dark:text-neutral-900 dark:hover:border-lime-400 dark:hover:bg-lime-400"
                            >
                                Explore my work
                                <ArrowDown size={16} aria-hidden="true" />
                            </a>


                            <a
                                href="https://drive.google.com/file/d/1cl9xIgJECzN88La3kIQqIICCOnyl5Ik2/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-12 items-center justify-center gap-2.5 border border-neutral-900/20 px-5 py-3 text-xs font-extrabold transition hover:-translate-y-0.5 hover:border-lime-500 hover:bg-lime-400 hover:text-neutral-900 dark:border-white/20 dark:hover:border-lime-400"
                            >
                                Resume
                                <Download size={15} aria-hidden="true" />
                            </a>

                        </motion.div>

                        {/* Technologies */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={reveal}
                            transition={transition(0.4)}
                            aria-label="Core technologies"
                            className="mt-8 flex flex-wrap gap-2"
                        >
                            {technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="border border-neutral-900/10 px-2.5 py-2 font-mono text-[9px] leading-4 text-neutral-500 dark:border-white/15 dark:text-neutral-400 sm:text-[10px]"
                                >
                                    {technology}
                                </span>
                            ))}
                        </motion.div>

                        {/* Social links */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={reveal}
                            transition={transition(0.46)}
                            className="mt-7 flex flex-wrap gap-x-6 gap-y-4"
                        >
                            <a
                                href={socials.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit my GitHub profile"
                                className="inline-flex items-center gap-2 text-xs font-bold text-neutral-500 transition hover:-translate-y-0.5 hover:text-lime-700 dark:text-neutral-400 dark:hover:text-lime-400"
                            >
                                <GithubIcon className="h-[17px] w-[17px]" />
                                GitHub
                                <ArrowUpRight size={13} aria-hidden="true" />
                            </a>

                            <a
                                href={socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit my LinkedIn profile"
                                className="inline-flex items-center gap-2 text-xs font-bold text-neutral-500 transition hover:-translate-y-0.5 hover:text-lime-700 dark:text-neutral-400 dark:hover:text-lime-400"
                            >
                                <LinkedinIcon className="h-[17px] w-[17px]" />
                                LinkedIn
                                <ArrowUpRight size={13} aria-hidden="true" />
                            </a>
                        </motion.div>
                    </div>

                    {/* Development focus */}
                    <motion.aside
                        initial={
                            reduceMotion ? false : { opacity: 0, x: 20 }
                        }
                        animate={{ opacity: 1, x: 0 }}
                        transition={transition(0.42)}
                        aria-label="Development specializations"
                        className="hidden min-w-0 self-center pb-2 lg:block"
                    >
                        {/* Technology heading */}
                        <h2 className="whitespace-nowrap font-['Space_Grotesk',sans-serif] text-4xl font-bold leading-none tracking-[-0.075em] xl:text-5xl">
                            React
                            <span className="text-lime-500">/</span>
                            JS
                            <span className="text-lime-500">/</span>
                            TS
                        </h2>

                        {/* Description */}
                        <p className="mt-5 max-w-[230px] text-sm leading-7 text-neutral-500 dark:text-neutral-400">
                            Modern frontend development, from reusable React
                            components to production-ready web applications.
                        </p>

                        {/* Specialties */}
                        <div className="mt-6 flex flex-col gap-3">
                            {specialties.map((specialty, index) => (
                                <motion.div
                                    key={specialty}
                                    initial={
                                        reduceMotion
                                            ? false
                                            : { opacity: 0, x: 10 }
                                    }
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: reduceMotion ? 0 : 0.3,
                                        delay: reduceMotion
                                            ? 0
                                            : index * 0.06,
                                    }}
                                    className="flex min-h-9 items-center border-l-2 border-lime-400 pl-3 font-mono text-xs text-neutral-600 dark:text-neutral-300"
                                >
                                    {specialty}
                                </motion.div>
                            ))}
                        </div>

                        {/* Scroll cue */}
                        <a
                            href="#about"
                            className="mt-8 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-500 transition-colors hover:text-lime-700 dark:text-neutral-400 dark:hover:text-lime-400"
                        >
                            <span className="h-px w-8 bg-lime-400" />
                            Scroll to explore
                        </a>
                    </motion.aside>
                </div>
            </div>
        </section>
    );
}
