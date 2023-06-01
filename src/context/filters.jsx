import { useState, createContext } from 'react'

// 1. Create a context for the filter state
export const FilterContext = createContext()

export const initialFilters = {
  category: 'all',
  minPrice: 0
}

// 2. Create provider component
export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState(initialFilters)
  return (
        <FilterContext.Provider value={{ filters, setFilters }}>
            {children}
        </FilterContext.Provider>
  )
}
