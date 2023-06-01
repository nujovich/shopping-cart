import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const { filters, setFilters } = useFilters()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()
  const handleMinPriceOnChange = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }
  return (
    <section className='filters'>
        <div>
            <label htmlFor={minPriceFilterId}>Price</label>
            <input
                type='range'
                id={minPriceFilterId}
                name='price'
                min='0'
                max='2000'
                value={filters.minPrice}
                onChange={handleMinPriceOnChange} />
            <span>${filters.minPrice}</span>
        </div>
        <div>
            <label htmlFor='category'>Category</label>
            <select name='category' id={categoryFilterId} onChange={handleChangeCategory}>
                <option value='all'>All</option>
                <option value='laptops'>Laptops</option>
                <option value='smartphones'>Cell Phones</option>
            </select>
        </div>
    </section>
  )
}
