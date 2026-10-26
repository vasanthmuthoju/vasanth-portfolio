export interface Project {
    id: string;
    title: string;
    tagline: string;
    description: string;
    stack: string[];
    highlights: string[];
    gradient: string;
    demo?: string;
    repo?: string;
}

export const projects: Project[] = [
    {
        id: "stark-pharma",
        title: "Stark Pharma",
        tagline: "Recruitment Management Platform",
        description:
            "End-to-end recruitment suite covering applicant tracking, candidate/job management, recruiter admin, vendor & client relationships.",
        stack: ["React", "Tailwind", "Axios", "React Router"],
        highlights: [
            "Reusable dashboards, forms & data tables",
            "REST APIs via service modules + Context",
            "Streamlined candidate → interview workflows",
        ],
        gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    },
    {
        id: "taskly",
        title: "Taskly",
        tagline: "Project Management SaaS",
        description:
            "Migrated legacy Inertia.js frontend to standalone React + TypeScript (Vite + Router) with DRF API integration.",
        stack: ["React", "TypeScript", "Vite", "DRF"],
        highlights: [
            "Full migration from Inertia → React Router",
            "Aligned auth, permissions & payloads with backend",
            "Projects, tasks, timesheets, invoices, budgets",
        ],
        gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    },
    {
        id: "systrack",
        title: "SysTrack",
        tagline: "Enterprise IT Asset Management",
        description:
            "Comprehensive asset lifecycle system: inventory, categorization, assignments, maintenance & documents.",
        stack: ["React", "TypeScript", "TanStack Query", "Tailwind"],
        highlights: [
            "Query-cache-driven async data fetching",
            "Reusable tables, dialogs & pagination",
            "Optimized list rendering for large datasets",
        ],
        gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    },
    {
        id: "sysdox",
        title: "SysDox",
        tagline: "Enterprise Document Management",
        description:
            "Document lifecycle platform with OCR, AI-assisted generation, workflow automation & audit trails.",
        stack: ["React", "JavaScript", "React Hook Form", "Axios"],
        highlights: [
            "Uploads, sharing, archival & retention flows",
            "AI-assisted document generation UI",
            "Reusable forms + responsive tables",
        ],
        gradient: "from-amber-500 via-orange-500 to-rose-500",
    },
    {
        id: "ss-quantumedge",
        title: "SS QuantumEdge",
        tagline: "Corporate Website",
        description:
            "Maintained & enhanced corporate site: new team section, UI fixes, responsive refinements.",
        stack: ["HTML5", "CSS3", "Bootstrap", "jQuery"],
        highlights: [
            "Improved cross-device visual consistency",
            "Refined spacing, alignment & responsiveness",
            "Maintained existing design system",
        ],
        gradient: "from-slate-500 via-gray-500 to-zinc-500",
    },
];