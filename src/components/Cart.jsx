import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'
import './Cart.css'
import { useCart } from '../hooks/useCart'

const CartItem = ({ thumbnail, title, price, quantity, addToCart }) => {
  return (
        <li>
            <img src={thumbnail}
                 alt={title}
            />

            <div>
                <strong>{title}</strong> - {price}
            </div>
            <footer>
                <small>Quantity: {quantity}</small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
  )
}
export function Cart () {
  const cartCheckBoxId = useId()
  const { cart, clearCart, addToCart } = useCart()

  return (
    <>
        <label className='cart-button' htmlFor={cartCheckBoxId}>
            <CartIcon />
        </label>
        <input id={cartCheckBoxId} type='checkbox' name='cart' hidden/>

        <aside className='cart'>
            <ul>
                {cart.map(item =>
                <CartItem
                    key={item.id}
                    addToCart={() => addToCart(item)}
                    {...item} />)}
            </ul>
            <button onClick={clearCart}>
                <ClearCartIcon />
            </button>
        </aside>
    </>
  )
}
