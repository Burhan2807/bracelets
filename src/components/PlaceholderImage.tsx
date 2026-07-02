type PlaceholderImageProps = {
  colors: [string, string];
  emoji: string;
  className?: string;
};

export default function PlaceholderImage({
  colors,
  emoji,
  className,
}: PlaceholderImageProps) {
  const gradientId = `grad-${colors[0].replace("#", "")}-${colors[1].replace(
    "#",
    ""
  )}`;

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
      <circle cx="200" cy="200" r="90" fill="rgba(255,255,255,0.18)" />
      <text
        x="50%"
        y="52%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="90"
      >
        {emoji}
      </text>
    </svg>
  );
}
