
import { motion, useReducedMotion } from "framer-motion";
import {
    MapPin,
    BriefcaseBusiness,
    GraduationCap,
    Workflow,
    Gauge,
    Blocks,
} from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const principles = [
    {
        icon: Blocks,
        title: "Systems over one-offs",
        text: "Reusable components and predictable patterns that stay maintainable as products grow.",
    },
    {
        icon: Workflow,
        title: "UI meets the API",
        text: "Close collaboration with backend engineers to make data, authentication, and permissions work end to end.",
    },
    {
        icon: Gauge,
        title: "Performance with purpose",
        text: "Responsive interactions, efficient data flows, and careful attention to the details users feel.",
    },
];

const highlights = [
    "Component architecture",
    "REST API integration",
    "Responsive UI",
    "Performance-minded development",
];

const details = [
    {
        icon: MapPin,
        label: "Based in",
        value: "Hyderabad, India",
    },
    {
        icon: BriefcaseBusiness,
        label: "Current role",
        value: "Frontend Engineer · Sysrek InfoSolutions",
    },
    {
        icon: GraduationCap,
        label: "Education",
        value: "B.Tech, Computer Science · 2023",
    },
];

export function About() {
    const reduceMotion = useReducedMotion();

    const reveal = {
        hidden: {
            opacity: 0,
            y: reduceMotion ? 0 : 18,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <section
            id="about"
            className="scroll-mt-28 bg-[#F5F5F0] px-5 py-20 text-neutral-900 transition-colors duration-300 dark:bg-[#171717] dark:text-[#F5F5F0] sm:px-8 sm:py-20"
        >
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="A little context"
                    title="Engineering interfaces people can rely on."
                    subtitle="A practical frontend engineer with a product mindset: thoughtful UI, clear architecture, and dependable integrations."
                    align="left"
                />

                {/* Introduction and professional details */}
                <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
                    <motion.div
                        variants={reveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: reduceMotion ? 0 : 0.55,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="rounded-3xl border border-neutral-900/10 bg-white/70 p-6 transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.03] sm:p-8"
                    >
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-8 w-1 bg-lime-400" />
                            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                                About me
                            </span>
                        </div>

                        <p className="text-lg leading-8 text-neutral-700 dark:text-neutral-200">
                            I'm a{" "}
                            <strong className="font-semibold text-neutral-950 decoration-lime-400 decoration-2 underline-offset-4 dark:text-white">
                                Frontend Engineer at Sysrek InfoSolutions
                            </strong>
                            , focused on building responsive web experiences
                            with React, JavaScript, TypeScript, and modern UI
                            tooling.
                        </p>

                        <p className="mt-5 text-sm leading-7 text-neutral-600 dark:text-neutral-400 sm:text-base">
                            My work spans recruitment software,
                            project-management SaaS, IT asset management, and
                            document workflows. I've also worked on migrating
                            an Inertia.js frontend to a standalone React
                            application and integrating Django REST Framework
                            APIs in collaboration with a backend developer.
                        </p>

                        <p className="mt-5 text-sm leading-7 text-neutral-600 dark:text-neutral-400 sm:text-base">
                            I care about more than how a page looks: I want
                            interfaces to communicate clearly, behave
                            consistently, handle real data, and remain
                            straightforward to extend.
                        </p>

                        {/* Skills and approach */}
                        <div className="mt-7 flex flex-wrap gap-2">
                            {highlights.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-neutral-900/10 bg-[#F5F5F0] px-3 py-1.5 text-xs font-medium text-neutral-600 transition-colors hover:border-lime-500 hover:text-neutral-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-neutral-300 dark:hover:border-lime-400 dark:hover:text-lime-400"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Professional information */}
                    <div className="grid content-start gap-3 sm:grid-cols-3 lg:grid-cols-1">
                        {details.map((item, index) => (
                            <motion.div
                                key={item.label}
                                variants={reveal}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: reduceMotion ? 0 : 0.45,
                                    delay: reduceMotion ? 0 : index * 0.08,
                                }}
                                className="group flex min-w-0 items-center gap-4 rounded-2xl border border-neutral-900/10 bg-white/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-lime-500/60 hover:bg-white/90 dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-lime-400/40 dark:hover:bg-white/[0.045]"
                            >
                                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-lime-500/20 bg-lime-400/15 text-lime-700 transition-colors group-hover:bg-lime-400 group-hover:text-neutral-900 dark:border-lime-400/20 dark:text-lime-400 dark:group-hover:text-neutral-900">
                                    <item.icon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                </span>

                                <span className="min-w-0">
                                    <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
                                        {item.label}
                                    </span>
                                    <span className="mt-1 block text-sm font-semibold leading-6 text-neutral-800 dark:text-neutral-200">
                                        {item.value}
                                    </span>
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Engineering principles */}
                <div className="mb-4 mt-16 flex items-end justify-between gap-4">
                    <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-lime-700 dark:text-lime-400">
                            How I work
                        </p>
                        <h3 className="mt-2 font-['Space_Grotesk',sans-serif] text-2xl font-bold tracking-tight sm:text-3xl">
                            My engineering principles
                        </h3>
                    </div>

                    <span className="hidden font-mono text-xs text-neutral-500 dark:text-neutral-400 sm:block">
                        01 — 03
                    </span>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    {principles.map((item, index) => (
                        <motion.article
                            key={item.title}
                            variants={reveal}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: reduceMotion ? 0 : 0.45,
                                delay: reduceMotion ? 0 : index * 0.08,
                            }}
                            className="group relative overflow-hidden rounded-2xl border border-neutral-900/10 bg-white/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-lime-500/50 hover:bg-white/80 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-lime-400/40 dark:hover:bg-white/[0.04] sm:p-6"
                        >
                            <span className="absolute right-4 top-3 font-mono text-xs text-neutral-300 transition-colors group-hover:text-lime-700 dark:text-neutral-700 dark:group-hover:text-lime-400">
                                0{index + 1}
                            </span>

                            <span className="grid h-11 w-11 place-items-center border border-lime-500/20 bg-lime-400/15 text-lime-700 transition-all duration-300 group-hover:bg-lime-400 group-hover:text-neutral-900 dark:border-lime-400/20 dark:text-lime-400 dark:group-hover:text-neutral-900">
                                <item.icon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </span>

                            <h4 className="mt-5 font-['Space_Grotesk',sans-serif] text-lg font-bold tracking-tight text-neutral-900 dark:text-[#F5F5F0]">
                                {item.title}
                            </h4>

                            <p className="mt-2 text-sm leading-7 text-neutral-600 dark:text-neutral-400">
                                {item.text}
                            </p>

                            <div className="mt-5 h-[2px] w-8 bg-lime-400 transition-all duration-300 group-hover:w-16" />
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
