type PlaceholderImageProps = {
  colors: [string, string];
  className?: string;
};

export default function PlaceholderImage({
  colors,
  className,
}: PlaceholderImageProps) {
  const gradientId = `grad-${colors[0].replace("#", "")}-${colors[1].replace(
    "#",
    ""
  )}`;

  const beadAngles = [0, 40, 80, 130, 180, 220, 260, 310];

  return (
    <svg
      viewBox="0 0 400 400"
      role="img"
      aria-label="Placeholder product photo"
      className={className}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors[0]} />
          <stop offset="100%" stopColor={colors[1]} />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill={`url(#${gradientId})`} />
      <circle
        cx="200"
        cy="200"
        r="108"
        fill="none"
        stroke="rgba(255,255,255,0.55)"
        strokeWidth="1.5"
      />
      {beadAngles.map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x = 200 + 108 * Math.cos(rad);
        const y = 200 + 108 * Math.sin(rad);
        return (
          <circle
            key={angle}
            cx={x}
            cy={y}
            r="7"
            fill="rgba(255,255,255,0.85)"
          />
        );
      })}
    </svg>
  );
}
