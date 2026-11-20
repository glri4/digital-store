
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import FilterGroup from '../components/FilterGroup'
import './Products.css'

function Products() {
  const [searchParams] = useSearchParams()
  const searchTerm = searchParams.get('filter')?.toLowerCase() || ''

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao buscar produtos')
        }
        return response.json()
      })
      .then((data) => {
        setProducts(data)
      })
      .catch(() => {
        setError('Não foi possível carregar os produtos.')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const [filters, setFilters] = useState({
    brand: [],
    category: [],
    gender: [],
    condition: [],
  })

  const [sortOrder, setSortOrder] = useState('')

  function handleFilterChange(group, value) {
    setFilters((previous) => ({
      ...previous,
      [group]: previous[group].includes(value)
        ? previous[group].filter((item) => item !== value)
        : [...previous[group], value],
    }))
  }

  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm)

    return (
      matchesSearch &&
      (filters.brand.length === 0 || filters.brand.includes(product.brand)) &&
      (filters.category.length === 0 || filters.category.includes(product.category)) &&
      (filters.gender.length === 0 || filters.gender.includes(product.gender)) &&
      (filters.condition.length === 0 || filters.condition.includes(product.condition))
    )
  })

  filteredProducts = [...filteredProducts].sort((a, b) => {
    const priceA = Number(a.price)
    const priceB = Number(b.price)

    if (sortOrder === 'lowest') return priceA - priceB
    if (sortOrder === 'highest') return priceB - priceA
    return 0
  })

  return (
    <main className="products-page">
      <h1>Produtos</h1>

      {loading && <p>Carregando produtos...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <div className="products-layout">
          <aside>
            <h3>Filtrar por</h3>

            <FilterGroup
              title="Marca"
              options={[
                { label: 'Nike', value: 'Nike' },
                { label: 'Adidas', value: 'Adidas' },
              ]}
              selectedValues={filters.brand}
              onChange={(value) => handleFilterChange('brand', value)}
            />

            <FilterGroup
              title="Categoria"
              options={[
                { label: 'Tênis', value: 'Tênis' },
                { label: 'Camiseta', value: 'Camiseta' },
              ]}
              selectedValues={filters.category}
              onChange={(value) => handleFilterChange('category', value)}
            />

            <FilterGroup
              title="Gênero"
              options={[
                { label: 'Masculino', value: 'Masculino' },
                { label: 'Feminino', value: 'Feminino' },
                { label: 'Unissex', value: 'Unissex' },
              ]}
              selectedValues={filters.gender}
              onChange={(value) => handleFilterChange('gender', value)}
            />

            <FilterGroup
              title="Estado"
              options={[
                { label: 'Novo', value: 'Novo' },
                { label: 'Usado', value: 'Usado' },
              ]}
              selectedValues={filters.condition}
              onChange={(value) => handleFilterChange('condition', value)}
            />
          </aside>

          <section>
            <div className="products-toolbar">
              <span>{filteredProducts.length} produtos</span>

              <select
                value={sortOrder}
                onChange={(event) => setSortOrder(event.target.value)}
              >
                <option value="">Ordenar por</option>
                <option value="lowest">Menor preço</option>
                <option value="highest">Maior preço</option>
              </select>
            </div>

            <div className="products-grid">
              {filteredProducts.map((product) => (
                <article className="product-card" key={product.id}>
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>
                    {Number(product.price).toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </p>

                  <button onClick={() => window.location.href = '/produto'}>
                    Ver produto
                  </button>
                </article>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <p>Nenhum produto encontrado.</p>
            )}
          </section>
        </div>
      )}
    </main>
  )
}

export default Products
