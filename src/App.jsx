
import { Products } from './components/Products'
import { Header } from './components/Header'
import { products as initialState } from './mocks/products.json'
import { useFilters } from './hooks/useFilters.js'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart.jsx'

function App () {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialState)
  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
    </CartProvider>

  )
}

export default App
