import './BuyBox.css'

function BuyBox({
  name,
  reference,
  rating,
  ratingCount,
  price,
  priceDiscount,
  description,
  children,
  onBuy,
}) {
  return (
    <div className="buy-box">
      <h1>{name}</h1>

      <p className="buy-reference">Referência: {reference}</p>

      <div className="buy-rating">
        <span>★★★★★</span>
        <small>{rating} ({ratingCount} avaliações)</small>
      </div>

      <div className="buy-prices">
        {priceDiscount && <del>{price}</del>}
        <strong>{priceDiscount || price}</strong>
      </div>

      <p className="buy-description">{description}</p>

      {children}

      <button className="buy-button" onClick={onBuy}>
        Comprar
      </button>
    </div>
  )
}

export default BuyBox