import React from 'react'

function Search({ handleInput, handleInputYear, handleInputType, search, searchyear, searchtype,pagination, paginationprev }) {
  return (
    <section className="searchBox-section">

      <input
        type="text"
        placeholder="Search with name (required)"
        className="searchbox"
        onChange={handleInput}
        onKeyPress={search}
      />
      <br></br>
      <input
        type="text"
        placeholder="Search with date"
        className="searchbox"
        onChange={handleInputYear}
        onKeyPress={searchyear}
      />
      <br></br>
      <input
        type="text"
        placeholder="Search with type"
        className="searchbox"
        onChange={handleInputType}
        onKeyPress={searchtype}
      /> <br></br>
      <br></br>
      
      <div className="pagination">
           <button className="pageprev" onClick={paginationprev}> Prev </button> 
           <button className="paginationbutton" onClick={pagination}> Next </button>
         

           </div>

    </section>
    
  )
}

export default Search
