export default function StarIcon({ size = 45, color = '#F15609' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transition: 'all 0.3s ease', flexShrink: 0 }}
    >
      <polygon
        points="22.5,0 25.94,14.18 38.41,6.59 30.82,19.06 45,22.5 30.82,25.94 38.41,38.41 25.94,30.82 22.5,45 19.06,30.82 6.59,38.41 14.18,25.94 0,22.5 14.18,19.06 6.59,6.59 19.06,14.18"
        fill={color}
      />
    </svg>
  )
}
