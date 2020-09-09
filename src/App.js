import React, { useState } from 'react';
import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'
import Defresults from './components/Defresults'
import axios from 'axios'

function App() {
  const [state, setState] = useState({
    c:1,
    s: "",
    y: "",
    t: "",
    p:2,
    results: [],
    defresults:[],
    selected: {}

  });
  const defapiurl = "http://www.omdbapi.com/?apikey=a73c582f&s=pokemon";

  const apiurl = "http://www.omdbapi.com/?apikey=a73c582f";


  // Default Pokemon search
  if(state.s === "" && state.c === 1){
   
    axios(defapiurl +"&page=1"  ).then(({data}) =>{
      let defresults = data.Search;

      setState(prevState =>{
        return { ...prevState, defresults:defresults }
    })
     })
  }
  else{
    state.defresults = [];
    console.log("searching..") 
  }



  const search = (e) => {
    
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s + "&y=" + state.y + "&type=" + state.t ).then(({ data }) => {
        let results = data.Search;
        setState(prevState => {
          return { ...prevState, results: results }
        })
      })
    }
    
  }

 
  const handleInput = (e) => {
    let s = e.target.value;
    setState(prevState => {
      return { ...prevState, s: s }

    })
  }

  const handleInputYear = (e) => {

    let y = e.target.value;
    setState(prevState => {
      return { ...prevState, y: y }

    })
  }

  const handleInputType = (e) => {

    let t = e.target.value;
    setState(prevState => {
      return { ...prevState, t: t }

    })
  }

  const openPopup = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      setState(prevState => {
        return { ...prevState, selected: result }
      });

    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  const pagination = () => {
   
    setState(prevState => {
      let page= state.p+1;
      return { ...prevState, p: page }
  
    });
    console.log(state.p);
if(state.s !== ""){
    axios(apiurl + "&s=" + state.s +"&page=" + state.p ).then(({ data }) => {
      let results = data.Search;
      setState(prevState => {
        return { ...prevState, results: results }
      })
    })
  }
  else{
    state.c=2;
    axios(defapiurl + "&page=" + state.p ).then(({ data }) => {
      let results = data.Search;
      setState(prevState => {
        return { ...prevState, results: results }
      })
    })
  }
  }
  
  const paginationprev = () => {
   
    setState(prevState => {
      let page= state.p-1;
      return { ...prevState, p: page }
  
    });
    console.log(state.p);
if(state.s !== ""){
    axios(apiurl + "&s=" + state.s +"&page=" + state.p ).then(({ data }) => {
      let results = data.Search;
      setState(prevState => {
        return { ...prevState, results: results }
      })
    })
  }
  else{
    state.c=2;
    axios(defapiurl + "&page=" + state.p ).then(({ data }) => {
      let results = data.Search;
      setState(prevState => {
        return { ...prevState, results: results }
      })
    })
  }
  }
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie List Project</h1>
      </header>
      <main>

        <Search handleInput={handleInput} handleInputYear={handleInputYear} handleInputType={handleInputType}
          search={search} pagination={pagination} paginationprev={paginationprev} />

        <Defresults defresults={state.defresults} openPopup={openPopup} />


        <Results results={state.results}   openPopup={openPopup}  /> 



        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false} </main>
    </div>
  );
}

export default App;
