"use client";

export default function SectionHeading({
  tag,
  title,
  description,
  align = "center",
  light = false,
}: {
  tag?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div className={`mb-16 ${align === "center" ? "text-center" : ""}`}>
      {tag && (
        <span
          className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-lime bg-lime/10 px-4 py-1.5 rounded-full mb-4"
        >
          {tag}
        </span>
      )}
      <h2
        className={`text-heading text-balance ${
          light ? "text-white" : "text-dark"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg max-w-2xl leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/60" : "text-gray-500"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
