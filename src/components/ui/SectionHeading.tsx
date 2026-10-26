
import { motion, useReducedMotion } from "framer-motion";

interface Props {
    eyebrow: string;
    title: string;
    subtitle?: string;
    align?: "center" | "left";
}

export function SectionHeading({
    eyebrow,
    title,
    subtitle,
    align = "center",
}: Props) {
    const reduceMotion = useReducedMotion();
    const centered = align === "center";

    return (
        <motion.div
            initial={
                reduceMotion
                    ? false
                    : { opacity: 0, y: 16 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                duration: reduceMotion ? 0 : 0.5,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={`max-w-3xl ${centered ? "mx-auto text-center" : "text-left"
                }`}
        >
            {/* Eyebrow */}
            <span
                className={`inline-flex items-center gap-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-lime-700 dark:text-lime-400 sm:text-xs ${centered ? "justify-center" : "justify-start"
                    }`}
            >
                <span
                    aria-hidden="true"
                    className="h-[2px] w-7 shrink-0 bg-lime-500 dark:bg-lime-400"
                />
                {eyebrow}
            </span>

            {/* Heading */}
            <h2 className="mt-5 font-['Space_Grotesk',sans-serif] text-3xl font-bold leading-[1.12] tracking-[-0.045em] text-neutral-900 dark:text-[#F5F5F0] sm:text-4xl lg:text-5xl">
                {title}
            </h2>

            {/* Description */}
            {subtitle && (
                <p
                    className={`mt-4 max-w-2xl text-sm leading-7 text-neutral-600 dark:text-neutral-400 sm:text-base sm:leading-8 ${centered ? "mx-auto" : ""
                        }`}
                >
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}
