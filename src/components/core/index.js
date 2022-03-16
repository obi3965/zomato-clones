import React from 'react'
import FilterItems from './FilterItems';


const Filters = ({ filterList}) => {
  return (
    <div className="filters">
      {filterList &&
        filterList.map((filter) => {
          return <FilterItems filter={filter} key={filter.id} />;
        })}
    </div>
  )
}

export default Filters