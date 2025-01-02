import React from 'react'
import './App.css'
// import Learning_paths from "./pages/Learning_paths"
// import Ai_Driven from './pages/Ai-Driven'
// import Communitys from './pages/Communitys'
// import Facilitators from './pages/Facilitators'
// import Game from './pages/Game'
import Homepage from './pages/Homepage'
// import Login from './pages/Login-signup'
import Simulations from './pages/Simulations'

const App = () => {
  return (
    <>
    <div>
      {/* <Learning_paths/>
      <Ai_Driven/>
      <Communitys/>
      <Facilitators/>
      <Game/> */}
      <Homepage/>
      {/*<Login/>*/}
      <Simulations/>
    </div>
    </>
  )
}

export default App;