import { useState } from 'react'
import Gallery from '../components/Gallery'
import ProductOptions from '../components/ProductOptions'
import BuyBox from '../components/BuyBox'
import Section from '../components/Section'
import ProductListing from '../components/ProductListing'
import './ProductView.css'

function ProductView() {
  const [selectedSize, setSelectedSize] = useState(38)
  const [addedToCart, setAddedToCart] = useState(false)

  const productImages = [
    '/produc-image-1.jpeg',
    '/product-thumb-1.jpeg',
    '/product-thumb-2.jpeg',
    '/product-thumb-3.jpeg',
  ]

  const recommendedProducts = [
  {
    id: 1,
    name: 'Tênis Adidas',
    price: 'R$ 349,90',
    priceDiscount: 'R$ 249,90',
    image: '/produc-image-2.jpeg',
  },
  {
    id: 2,
    name: 'Tênis Casual',
    price: 'R$ 299,90',
    priceDiscount: 'R$ 199,90',
    image: '/produc-image-3.jpeg',
  },
  {
    id: 3,
    name: 'Tênis Esportivo',
    price: 'R$ 399,90',
    priceDiscount: 'R$ 279,90',
    image: '/produc-image-4.jpeg',
  },
  {
    id: 4,
    name: 'Tênis Urban',
    price: 'R$ 329,90',
    priceDiscount: 'R$ 229,90',
    image: '/produc-image-5.jpeg',
  },
]

  return (
    <main className="detail-page">
      <Gallery
        images={productImages}
        width="100%"
        height="570px"
        radius="4px"
      />

      <div className="detail-info">
        <BuyBox
          name="Tênis Nike"
          reference="DRP-001"
          rating="4.8"
          ratingCount={120}
          price="R$ 399,90"
          priceDiscount="R$ 299,90"
          description="Tênis confortável e moderno, ideal para o dia a dia."
          onBuy={() => setAddedToCart(true)}
        >
          <ProductOptions
            sizes={[38, 39, 40, 41]}
            selectedSize={selectedSize}
            onSizeChange={setSelectedSize}
          />
        </BuyBox>

        {addedToCart && (
          <p className="cart-message">
            Produto adicionado ao carrinho! ❤️
          </p>
        )}
      </div>
      <Section title="Produtos recomendados" titleAlign="left">
        <ProductListing products={recommendedProducts} />
     </Section>
     </main>
  )
}

export default ProductView