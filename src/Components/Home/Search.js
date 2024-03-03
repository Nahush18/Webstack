import React,{useState} from 'react'
import {DatePicker, Space} from "antd"

// Space - Margin and Padding


const Search = () => {
  const {RangePicker} = DatePicker;  // Object creation
  const [keyword, setKeyword] = useState({});
  const [value,setValue] = useState([]); // Data range value
  function returnDates(date,dateString){
    setValue([date[0],date[1]])
    // Updating keyword object with date range
    updateKeyword("dateIn",dateString[0])
    updateKeyword("dateIn",dateString[1])
  }
  const updateKeyword = (field,value) =>{
    setKeyword((prevKeyword) => ({
      ...prevKeyword,
      [field] : value
    }))
  }
  return (
    <>
      <div className='searchbar'>
        <input 
        className='search'
        id='search_destination'
        placeholder='Search destinations'
        type='text' 
        value={keyword.city}
        onChange={(e) => updateKeyword('city',e.target.value)}
        />
        <Space direction='vertical' size={12} className='search'>
          <RangePicker
          value={value}
          format="YYYY-MM-DD"
          picker='date'
          className='date_picker'
          disabledDate = {(current)=>{
            return current && current.isBefore(Date.now(),"day")
          }}
          onChange={returnDates}
          />
        </Space>
        <input 
        className='search'
        id='addguest'
        placeholder='Add guest'
        type="number"
        value={keyword.guests}
        onChange={(e) => updateKeyword("guests", e.target.value)}
        />
        <span class="material-symbols-outlined searchicon">
          search
        </span>
      </div>
    </>
  )
}

export default Search
