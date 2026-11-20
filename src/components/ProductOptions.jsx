import './ProductOptions.css'

function ProductOptions({ sizes = [], selectedSize, onSizeChange, colors = [] }) {
  return (
    <div className="product-options">
      {sizes.length > 0 && (
    <div>
        <h3>Tamanho</h3>
          <div className="size-options">
            {sizes.map((size) => (
              <button
                key={size}
                className={selectedSize === size ? 'selected' : ''}
                onClick={() => onSizeChange(size)}
              >
                {size}
              </button>
            ))}
          </div>
    </div>
      )}

      {colors.length > 0 && (
    <div>
        <h3>Cor</h3>
          <div className="color-options">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => {}}
              >
                {color}
              </button>
            ))}
          </div>
    </div>
      )}
    </div>
  )
}

export default ProductOptions