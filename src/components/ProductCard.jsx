import './ProductCard.css'
function ProductCard({ image, name, price, priceDiscount }) {
  return (
    <article className="product-card">
        <img src={image} alt={name} />

        <div className="product-info">
            <p className="product-name">{name}</p>

        <div className="product-prices">
            {priceDiscount ? (
            <>
              <del>{price}</del>
              <strong>{priceDiscount}</strong>
            </>
            ) : (
            <strong>{price}</strong>
            )}
        </div>
        </div>
    </article>
  )
}

export default ProductCard