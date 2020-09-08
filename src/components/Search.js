import React from 'react'

function Search( {handleInput} ) {
    return (
      <section className="searchBox-section">

          <input 
          type="text" 
          placeholder="Search with movie name" 
          className="searchbox"
          onChange={handleInput} />

          


      </section>
    )
}

export default Search
