import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Products from './pages/Products'
import ProductView from './pages/ProductView'
import Section from './components/Section'
import ProductListing from './components/ProductListing'
import './App.css'

function Home() {
const products = [
  {
    id: 1,
    name: 'Tênis Nike',
    price: 'R$ 399,90',
    priceDiscount: 'R$ 299,90',
    image: '/produc-image-1.jpeg',
  },
  {
    id: 2,
    name: 'Tênis Adidas',
    price: 'R$ 349,90',
    priceDiscount: 'R$ 249,90',
    image: '/produc-image-2.jpeg',
  },
  {
    id: 3,
    name: 'Tênis Casual',
    price: 'R$ 299,90',
    priceDiscount: 'R$ 199,90',
    image: '/produc-image-3.jpeg',
  },
  {
    id: 4,
    name: 'Tênis Esportivo',
    price: 'R$ 399,90',
    priceDiscount: 'R$ 279,90',
    image: '/produc-image-4.jpeg',
  },
  {
    id: 5,
    name: 'Tênis Urban',
    price: 'R$ 329,90',
    priceDiscount: 'R$ 229,90',
    image: '/produc-image-5.jpeg',
  },
  {
    id: 6,
    name: 'Tênis Nike Sport',
    price: 'R$ 399,90',
    priceDiscount: 'R$ 299,90',
    image: '/product-thumb-1.jpeg',
  },
  {
    id: 7,
    name: 'Tênis Casual Premium',
    price: 'R$ 359,90',
    priceDiscount: 'R$ 259,90',
    image: '/product-thumb-2.jpeg',
  },
  {
    id: 8,
    name: 'Tênis Street',
    price: 'R$ 319,90',
    priceDiscount: 'R$ 219,90',
    image: '/product-thumb-3.jpeg',
  },
]
  return (
    <main>
      <section className="banner">
        <div className="banner-text">
          <span>Melhores ofertas personalizadas</span>
          <h1>Queima de estoque Nike 🔥</h1>
          <p>Encontre os melhores produtos com ofertas especiais.</p>
          <button>Ver Ofertas</button>
        </div>

        <div className="banner-image">
          <img src="/home-slide-1.jpeg" alt="Destaque Digital Store" />
        </div>
      </section>

      <section className="collections">
        <h2>Coleções em destaque</h2>
        <div className="collection-list">
          <div className="collection">
            <img src="/collection-1.png" alt="Coleção 1" />
          </div>
          <div className="collection">
            <img src="/collection-2.png" alt="Coleção 2" />
          </div>
          <div className="collection">
            <img src="/collection-3.png" alt="Coleção 3" />
          </div>
        </div>
      </section>
            <Section title="Produtos em alta" titleAlign="left">
        <ProductListing products={products} />
      </Section>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/produtos" element={<Layout><Products /></Layout>} />
      <Route path="/produto" element={<Layout><ProductView /></Layout>} />
      <Route path="/product/:id" element={<Layout><ProductView /></Layout>} />
    </Routes>
  )
}

export default App