import React from 'react'
import AddContact from './AddContact'
import Header from './Header'
import './App.css'

const App = () => {
  return (
    <div className='container'>
   <div className='topcontact'>
   <Header/>
    <AddContact/>
     </div>
    </div>
  )
}

export default App