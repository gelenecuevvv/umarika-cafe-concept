import { itemPriceLabel, variantPrice } from '../data/menu.js'

export default function MenuItem({ item }) {
  const price = itemPriceLabel(item)

  return (
    <article className={item.variants?.length ? 'menu-item has-variants' : 'menu-item'}>
      <div className="menu-item-copy">
        <h3>{item.name}</h3>
        {(item.servedWith || item.choices || item.note) && (
          <div className="item-details">
            {item.servedWith && (
              <>
                <p className="detail-label">Served with:</p>
                <p>{item.servedWith}</p>
              </>
            )}
            {item.choices && (
              <>
                <p className="detail-label">Choices of:</p>
                <ul>
                  {item.choices.map((choice) => (
                    <li key={choice}>{choice}</li>
                  ))}
                </ul>
              </>
            )}
            {item.note && <p>{item.note}</p>}
          </div>
        )}
        {item.variants && (
          <div className="variants">
            {item.variants.map((variant) => (
              <p className="variant" key={variant.label}>
                <span>{variant.label}</span>
                <span className="price">{variantPrice(variant)}</span>
              </p>
            ))}
          </div>
        )}
      </div>
      {price ? <p className="price menu-price">{price}</p> : null}
    </article>
  )
}
