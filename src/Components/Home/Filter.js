import React, { useState } from 'react'
import FilterModal from './FilterModal'

const Filter = () => {
  const [isModalOpen,setIsModalOpen] = useState(false);
  const [selectedFilters,setSelectedFilters] = useState({});

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);

  }

  const handleFilterChange = (filtername,value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filtername] : value,
    }))
  }

  return (
    <>
      <span class="material-symbols-outlined filter" onClick={handleOpenModal}>
        tune
      </span>
      {isModalOpen && (
        <FilterModal 
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
        onClose={handleCloseModal}
        />
      )}
    </>
  )
}

export default Filter
