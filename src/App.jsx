import './App.css'
import Lottery from './Lottery'
import { sum } from './helper'

function App() {

  function winCondition(ticket){
     return (sum(ticket)) === 15;
    // return ticket.every((num)=> num === ticket[0])
  }

  return (
    <>
      <Lottery winCondition={winCondition}/>
    </>
  )
}

export default App
