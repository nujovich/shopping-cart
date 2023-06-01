import { useContext } from 'react'
import { FilterContext } from '../context/filters'

export function useFilters () {
  const { filters, setFilters } = useContext(FilterContext)
  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice && (
          product.category === filters.category ||
          filters.category === 'all'
        )
      )
    })
  }

  return { filters, filterProducts, setFilters }
}
