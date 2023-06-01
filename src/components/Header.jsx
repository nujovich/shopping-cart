import { Filters } from './Filters'
import './Header.css'
export function Header () {
  return (
        <header className='header'>
            <h1>My Store 🛒</h1>
            <Filters />
        </header>
  )
}
