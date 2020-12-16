import logo from './logo.svg';
import './App.css'; 
import { useState } from 'react'

function App() {

  const[name,setName]= useState('Ruzzy')







  function handleSubmit(event) {
    event.preventDefault()
    console.log('form submitted')
  }

  function handleChange(event) {
    setName(event.target.value)
    console.log('input change; ',event.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{name}</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange}/>
          <button>submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
