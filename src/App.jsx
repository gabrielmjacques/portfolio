import React from 'react'

import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";

function App()
{

  return (
    <div className="App">

      <Introduction />

      <Projects id='projects' />

    </div>
  )
}

export default App
