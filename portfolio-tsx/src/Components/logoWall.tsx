// LogoWall.tsx

const technologies = [
    "vite",
    "gsap",
    "react",
    "typeScript",
    "tailwindcss",
    "next",
    "nodejs",
    "HTML5",
    "CSS3",
    "javaScript",
    "github",
    "supabase",
    "mysql",
    "stripe",

] as const;

type Technology = (typeof technologies)[number];

type LogoWallProps = {
    // Add optional props later if you need (e.g., className?: string)
};

export default function LogoWall(_props: LogoWallProps) {
    const list: Technology[] = [...technologies, ...technologies, ...technologies];

    return (
        <div className="relative overflow-x-hidden py-8">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-20" />

            <div className="flex animate-scroll hover:animate-paused gap-12 md:gap-20 w-max">
                {list.map((tech, idx) => (
                    <div
                        key={`${tech}-${idx}`}
                        className="flex items-center gap-2 group transition-all duration-300"
                    >
                        <img
                            src={`/svg/${tech}.svg`}
                            alt={tech}
                            className="h-7 w-auto object-contain transition-transform group-hover:scale-110 opacity-60"
                            width={30}
                            height={30}
                            loading="lazy"
                        />
                        <span className="text-lg font-medium text-[var(--white-icon)]">
              {tech.charAt(0).toUpperCase() + tech.slice(1)}
            </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
