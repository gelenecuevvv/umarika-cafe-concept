import { business } from '../data/business.js'

export default function Address({ className = '' }) {
  return (
    <address className={className}>
      {business.addressLines.map((line) => (
        <span key={line}>{line}</span>
      ))}
    </address>
  )
}
