import React from 'react'
import './App.css'
import TravelList from '@components/TravelList/TrevelList'
import "@img/lilPlanet.svg"


function App() {
  return( 
  <div className='container'>
  <header>
    <div className="logo">
      <img src="/src/assets/img/lilPlanet.svg" alt="img" />
      <h3>my travel journal.</h3>
    </div>
  </header>
  <main>
    <TravelList/>
    </main>
  </div>
  )
}

export default App
