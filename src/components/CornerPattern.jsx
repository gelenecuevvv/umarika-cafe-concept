export default function CornerPattern({ className = '' }) {
  const lines = Array.from({ length: 8 }, (_, index) => index)

  return (
    <svg
      className={`corner-pattern ${className}`.trim()}
      viewBox="0 0 160 160"
      aria-hidden="true"
      focusable="false"
    >
      {lines.map((index) => (
        <line
          key={index}
          x1={index * 16 - 30}
          y1="180"
          x2={index * 16 + 70}
          y2="-20"
          stroke="#B38A3E"
          strokeWidth="1.2"
        />
      ))}
    </svg>
  )
}
