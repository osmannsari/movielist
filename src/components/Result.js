import React from 'react'

function Result({ result, openPopup }) {
    return (
        <div className="result" onClick={() => openPopup(result.imdbID)}>

            <img src={result.Poster} alt="pic of movie" />
            <h3> {result.Title}</h3>
            <h3>{result.Year}</h3>
            <h3>imdb ID: {result.imdbID}</h3>
           


        </div>
         
    )
}

export default Result
