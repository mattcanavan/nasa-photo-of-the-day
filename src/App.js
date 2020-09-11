import React, { useState, useEffect} from "react";
import "./App.css";
import { BASE_URL, API_KEY } from './constants/constants'
import CreatePhotoCard from './components/CreatePhotoCard'
import axios from 'axios'


function App() {
  // let's define state and let it live here
  const [nasaObj, setNasaObj] = useState({})

  useEffect( () =>{
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(response => {
      setNasaObj(response.data)
    })
    .catch( err => {
      console.log('Unable to fetch image:', err)
    })
  }, [])
  
  return (
    <div className="App">
      
      <CreatePhotoCard photoTitle={nasaObj.title} photoURL={nasaObj.url} photoCopyright={nasaObj.copyright} photoExplanation={nasaObj.explanation}/>
      
      
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}


    </div>
  );
}

export default App;
