import React,{useEffect, useState} from 'react'
import PropTypes from 'prop-types';
// For type checking props
import '../../CSS/FilterModal.css'
import 'react-input-range/lib/css/index.css';
import InputRange from 'react-input-range'

const FilterModal = ({selectedFilters,onFilterChange,onClose}) => {
  const [priceRange,setPriceRange] = useState({
    min:selectedFilters.priceRange?.min || 600,
    max:selectedFilters.priceRange?.max || 30000,
  })
  const [propertyType,setPropertyType] = useState(selectedFilters.propertyType || "")
  const [roomType,setRoomType] = useState(selectedFilters.roomType || "");
  const [amenities,setAmenities] = useState(selectedFilters.amenities || []);
  useEffect(() => {
    setPriceRange({
      min: selectedFilters.priceRange?.min || 600,
      max: selectedFilters.priceRange?.max || 30000,
    });
    setPropertyType(selectedFilters.propertyType || "");
    setRoomType(selectedFilters.roomType || "");
    setAmenities(selectedFilters.amenities || [])
  },[selectedFilters])

  const handlePriceRangeChange = (value) => {
    setPriceRange(value)
  }

  const handleMinInputChange = (e) => {
    const minValue = parseInt(e.target.value,10);
    setPriceRange((prev) => ({...prev,min:minValue}))
  }

  const handleMaxInputChange = (e) => {
    const maxValue = parseInt(e.target.value,10)
    setPriceRange((prev) => ({...prev,max:maxValue}))
  }
  
  const handlefilterChange = () => {
    onFilterChange("minPrice",priceRange.min)
    onFilterChange("maxPrice",priceRange.max)
    onFilterChange("propertyType",propertyType)
    onFilterChange("roomType",roomType)
    onFilterChange("amenities",amenities)
    onClose()
  }


  return (
    <div>
      
    </div>
  )
}

export default FilterModal