import React, {useState} from 'react';
import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'


import axios from 'axios'

function App() {
  const [state, setState] = useState ({
  
    s:"",
    y:"",
    t:"",
    
    results:[],
    selected: {} 

  });
  const apiurl = "http://www.omdbapi.com/?apikey=a73c582f";

  
//Default Pokemon search
// if(state.s ==="" && state.y === "" && state.t === ""){
//   axios(apiurl + "&s=pokemon" ).then(({data}) =>{
//     let results = data.Search;

//     setState(prevState =>{
//       return { ...prevState, results:results }
//     })
//    })
 
  
// }
// else{
//   console.log("searching..") 
// }

const search = (e) => {
  state.results=[];
 
  if(e.key === "Enter"){
    
    axios(apiurl + "&s=" + state.s).then(({data}) =>{
     let results = data.Search;
     setState(prevState =>{
       return { ...prevState, results:results }
     })
    })
  }
}

const searchyear = (e) => {
  if(e.key === "Enter"){
    
    axios(apiurl + "&s=" + state.s+"&y="+state.y).then(({data}) =>{
     let results = data.Search;
     setState(prevState =>{
       return { ...prevState, results:results }
     })
    })
  }
}

const searchtype = (e) => {
  if(e.key === "Enter"){
    
    axios(apiurl + "&s=" + state.s+"&type="+state.t).then(({data}) =>{
     let results = data.Search;
     setState(prevState =>{
       return { ...prevState, results:results }
     })
    })
  }
}



  const handleInput = (e) => {  
    let s = e.target.value;
    setState(prevState=>{
      return{ ...prevState, s:s}

    })
  }

  const handleInputYear = (e) => {  
   
    let y = e.target.value;
    setState(prevState=>{
      return{ ...prevState, y:y}

    })
  }

  const handleInputType = (e) => {  
   
    let t = e.target.value;
    setState(prevState=>{
      return{ ...prevState, t:t}

    })
  }

  const openPopup = id => {
    axios (apiurl + "&i=" + id).then(({data}) =>{
      let result = data;

      setState(prevState => {
        return { ...prevState, selected:result}
      });
 
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }


  return (
    <div className="App">
      <header className="App-header">
       <h1>Movie List Project</h1>
      </header>
      <main>

        <Search handleInput={ handleInput} handleInputYear={ handleInputYear} handleInputType={ handleInputType}
         search={ search} searchyear={ searchyear}  searchtype={ searchtype} />
        
        <Results results={state.results} openPopup={openPopup} />

        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false} </main>
    </div>
  );
}

export default App;
