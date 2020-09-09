import React from 'react'
import Result from './Result'

function Results({ results, defresults, openPopup }) {
    return (
       
            <section className="defresults" >
                {defresults.map(result => (
                    <Result key={result.imdbID} result={result} openPopup={openPopup} />
                ))}


            </section>


       


    )
}

export default Results
