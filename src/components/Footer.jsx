import './Footer.css'

import logoFooter from '../assets/logo-footer.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-brand">
          <img src={logoFooter} alt="Digital Store" />
          <p>
            A Digital Store oferece moda, tecnologia
            e acessórios para você.
          </p>

          <div className="social">
            <a href="https://www.facebook.com/">
              <img src={facebook} alt="Facebook" />
            </a>

            <a href="https://www.instagram.com/">
              <img src={instagram} alt="Instagram" />
            </a>

            <a href="https://twitter.com/">
              <img src={twitter} alt="Twitter" />
            </a>
          </div>
        </div>

        <div>
          <h3>Informação</h3>
          <p>Sobre nós</p>
          <p>Segurança</p>
          <p>Wishlist</p>
          <p>Blog</p>
          <p>Trabalhe conosco</p>
          <p>Meus pedidos</p>
        </div>

        <div>
          <h3>Categoria</h3>
          <p>Camisetas</p>
          <p>Calças</p>
          <p>Bonés</p>
          <p>Headphones</p>
          <p>Tênis</p>
        </div>

        <div>
          <h3>Contato</h3>
          <p>Av. Santos Dumont, 1510</p>
          <p>Fortaleza - CE</p>
          <p>(85) 3051-3411</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Digital Store. Todos os direitos reservados.
      </div>
    </footer>
  )
}

export default Footer