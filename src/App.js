import React, {useState} from 'react';
import Search from './components/Search'
import axios from 'axios'

function App() {
  const [state, setState] = useState ({
    s:"",
    results:[],
    selected: {} 

  });
  const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=a73c582f";
  
 
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState=>{
      return{ ...prevState, s:s}

    })

    console.log(state.s);
    
  }

  return (
    <div className="App">
      <header className="App-header">
       <h1>Movie List Project</h1>
      </header>
      <main>
        <Search handleInput={ handleInput}  />
      </main>
    </div>
  );
}

export default App;
