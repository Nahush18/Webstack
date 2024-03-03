import React from 'react'
import Search from './Search'
import Filter from './Filter'

const Header = () => {
  return (
    <>
      {/* sticky-top - navbar remains at top even after scrolling 
      antd - In this project, used to design calendar
      */}
      <nav className='header row sticky-top' style={{ maxWidth: '100%', overflow: 'hidden', height: '100px' }}>     
        <img src="/assets/logo.png" alt="Logo" className='logo' style={{ width: 'auto', height: '100%' }} />
      
      <div className='search_filter'>
          <Search/>
          <Filter/>
      </div>
      <span class="material-symbols-outlined web_logo">
        account_circle
      </span>
      </nav>
    </>
  )
}

export default Header
