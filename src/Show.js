import React, { useState, useEffect } from 'react';
import CharacterList from './CharacterList';

function Example() {
  // Declaración de una variable de estado que llamaremos "count"

  const [characters, setCharacters] = useState([]); 
  const [filterValue, setFilterValue] = useState(''); 

  useEffect(() => {
    const url = 'https://hp-api.herokuapp.com/api/characters';
    fetch(url)

    .then(function(response) {
      console.log('response',response)
      return response.json();
    })
    .then(function(json) {
      console.log('json',json);

      let charactersConId = [];
      
      for (let i=0; i<json.length; i++) {
        charactersConId[i] = {
          ...json[i],
          id: i
        }
      }

      console.log('charactersConId',charactersConId)
      console.log('characters antes',characters);
      setCharacters(charactersConId);
      console.log('characters despues',characters);
    });

// Para que se pone esta función de limpieza?

    return function cleanup() {
    	setCharacters([])
    };
  },[]);  

//Porque si no pongo este array al final esta indefinidamente haciendo llamadas?

  const handleChangeInput = (event) => {
    setFilterValue(event.target.value)
  }

  const handleFocusInput = (event) => {
    setFilterValue('')
  }

  return (
    characters.length === 0 
    ? 
    <p>Loading</p> 
    :
    <div className="App">
      <main className="MainApp">
        <CharacterList 
          arrayCharacters={characters}
          filterValue={filterValue}
          handleChangeInput={handleChangeInput}
          handleFocusInput={handleFocusInput}
        />
      </main>
    </div>
  )
}

export default Example;