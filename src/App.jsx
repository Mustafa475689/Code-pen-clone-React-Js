import React from 'react'

// import components 
import Home from "./components/Home"

import DataProvider from './context/DataProvider'


const App = () => {
  return (
    <DataProvider>
    <Home />
    </DataProvider>
  )
}

export default App
