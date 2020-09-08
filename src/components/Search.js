import React from 'react'

function Search( {handleInput, search} ) {
    return (
      <section className="searchBox-section">

          <input 
          type="text" 
          placeholder="Search with movie name" 
          className="searchbox"
          onChange={handleInput}
          onKeyPress={search} 
          />

          


      </section>
    )
}

export default Search
