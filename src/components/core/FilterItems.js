import React from 'react'

const FilterItems = ({filter}) => {
  return (
    <div className='filter-item'>
      {filter.icon && filter.icon}
      <div className="filter-name">{filter.title}</div>
    </div>
  )
}

export default FilterItems