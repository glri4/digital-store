import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Header.css'
import logoHeader from '../assets/logo-header.svg'
import miniCart from '../assets/mini-cart.svg'

function Header() {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

function handleSearch(event) {
  event.preventDefault()

    navigate(`/produtos?filter=${encodeURIComponent(searchTerm)}`)
  }

  return (
    <header className="header">
      <div className="header-top">
        <img className="logo" src={logoHeader} alt="Digital Store" />

        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Pesquisar produto..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button type="submit" aria-label="Pesquisar">
            🔍
          </button>
        </form>

        <a href="#">Cadastre-se</a>
        <button>Entrar</button>
        <img className="cart-icon" src={miniCart} alt="Carrinho de compras" />
      </div>

      <nav className="menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/produtos">Produtos</NavLink>
        <a href="#">Categorias</a>
        <a href="#">Meus Pedidos</a>
      </nav>
    </header>
  )
}

export default Header