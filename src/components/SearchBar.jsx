import React from 'react'
import Icon from '../images/Logo.svg'

const SearchBar = () => {
  return (
    <div className='searchBar'>
        <div className='logoContainer'>
            <img src={Icon} alt="logo" />
        </div>
        <div className='searchForm'>
            <div className='searchContainer'>
                <div className='searchLogoContainer'>
                    
                </div>
                <input type="text" placeholder='Search' className='inputBox'/>
            </div>
        </div> 
    </div>
  )
}

export default SearchBar
