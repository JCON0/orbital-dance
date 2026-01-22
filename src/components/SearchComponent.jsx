import React, { useState, useEffect } from 'react'

const SearchComponent = ({ onSearchChange, onLocationChange, onCategoryChange, initialCategories = ['All'] }) => {
  const [selectedCategories, setSelectedCategories] = useState(initialCategories)

  useEffect(() => {
    setSelectedCategories(initialCategories)
  }, [initialCategories])

  const handleCategoryClick = (category) => {
    let updatedCategories

    if (category === 'All') {
      updatedCategories = ['All']
    } else if (selectedCategories.includes('All')) {
      updatedCategories = [category]
    } else if (selectedCategories.includes(category)) {
      updatedCategories = selectedCategories.filter(c => c !== category)
      if (updatedCategories.length === 0) {
        updatedCategories = ['All']
      }
    } else {
      updatedCategories = [...selectedCategories, category]
    }

    setSelectedCategories(updatedCategories)
    onCategoryChange(updatedCategories)
  }

  return (
    <>
      {/* Search and Filters Section */}
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        {/* Search Bar */}
        <div className="md:col-span-2">
          <input
            type="text"
            placeholder="Search events, cities, or venues..."
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-lg border border-primary bg-card px-4 py-3 text-primary placeholder-slate-500 transition focus:border-cyan-400 focus:outline-none"
          />
        </div>

        {/* Location Filter */}
        <select 
          onChange={(e) => onLocationChange(e.target.value)}
          className="rounded-lg border border-primary bg-card px-4 py-3 text-primary transition focus:border-cyan-400 focus:outline-none"
        >
          <option>All Locations</option>
          <option>London, UK</option>
          <option>Paris, France</option>
          <option>Berlin, Germany</option>
          <option>Barcelona, Spain</option>
          <option>Amsterdam, Netherlands</option>
          <option>Copenhagen, Denmark</option>
          <option>Rome, Italy</option>
          <option>Vienna, Austria</option>
          <option>Lisbon, Portugal</option>
          <option>Stockholm, Sweden</option>
          <option>Dublin, Ireland</option>
        </select>
      </div>

      {/* Category Filters */}
      <div className="mb-8 flex flex-wrap gap-3">
        {['All', 'Techno', 'House', 'Trance', 'Drum & Bass', 'Dubstep', 'Psytrance', 'Electro', 'Future Bass', 'Hardstyle', 'Minimal', 'Garage', 'Industrial'].map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`rounded-full px-6 py-2 text-sm font-medium transition ${
              selectedCategories.includes(category)
                ? 'bg-cyan-500 text-white shadow-sm hover:bg-cyan-600'
                : 'border border-slate-300 text-slate-700 hover:border-cyan-400 hover:bg-cyan-50 dark:border-slate-700 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:bg-slate-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  )
}

export default SearchComponent
