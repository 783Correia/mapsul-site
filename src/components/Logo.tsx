import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Logo({ size = "md", className = "" }: LogoProps) {
  const sizes = {
    sm: { text: "text-lg", icon: "w-7 h-7 text-[10px]", gap: "gap-2" },
    md: { text: "text-xl", icon: "w-8 h-8 text-[11px]", gap: "gap-2.5" },
    lg: { text: "text-2xl", icon: "w-10 h-10 text-xs", gap: "gap-3" },
  };

  const s = sizes[size];

  return (
    <Link href="/" className={`group inline-flex items-center ${s.gap} shrink-0 ${className}`}>
      {/* Icon mark */}
      <div className={`${s.icon} bg-lime rounded-lg flex items-center justify-center font-black text-forest tracking-tighter group-hover:scale-105 group-hover:shadow-glow-lime transition-all duration-300`}>
        VS
      </div>
      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className={`${s.text} font-extrabold tracking-tight text-white`}>
          Vet<span className="text-lime">Sul</span>Vet
        </span>
        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30 mt-0.5">
          Distribuidora
        </span>
      </div>
    </Link>
  );
}
