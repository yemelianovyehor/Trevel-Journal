import React from 'react'
import './App.css'
import TrevelList from '@components/TrevelList/TrevelList'
import "@img/lilPlanet.svg"


function App() {
  return( 
  <>
  <header>
    <div className="logo">
      <img src="/src/assets/img/lilPlanet.svg" alt="img" />
      <h3>my travel journal.</h3>
    </div>
  </header>
  <main>
    <TrevelList/>
    </main>
  </>
  )
}

export default App
