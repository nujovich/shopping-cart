import { useState, createContext } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = product => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id)
    // si el producto ya está en el carrito
    if (productInCartIndex >= 0) {
      // copia profunda con structuredClone
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }

    // si el producto no está en el carrito
    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  const clearCart = () => {
    setCart([])
  }

  const removeFromCart = product => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      clearCart,
      removeFromCart
    }}>
        {children}
    </CartContext.Provider>
  )
}
