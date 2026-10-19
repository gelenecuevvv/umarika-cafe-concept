import { brandSymbol, brandWordmark } from '../data/images.js'

export default function Logo() {
  return (
    <>
      <img
        className="brand-symbol"
        src={brandSymbol.src}
        width={brandSymbol.width}
        height={brandSymbol.height}
        alt=""
      />
      <img
        className="brand-wordmark"
        src={brandWordmark.src}
        width={brandWordmark.width}
        height={brandWordmark.height}
        alt=""
      />
    </>
  )
}
