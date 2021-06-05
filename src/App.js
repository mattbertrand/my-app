import React from 'react'
import './App.css'
import ContactCard from './ContactCard'

const App = () => {
  return (
    <div>
      <ContactCard 
      avatarUrl = "https://via.placeholder.com/150" 
      name ="Matthieu Bertrand" 
      email="matt@matthieubertrand.com" 
      age= {32}/>
      <ContactCard 
      avatarUrl = "https://via.placeholder.com/150" 
      name ="Paul Jones" 
      email="pj@example.com" 
      age= {25}/>
      <ContactCard 
      avatarUrl = "https://via.placeholder.com/150" 
      name ="Peter Pan" 
      email="pp@mpeterpan.com" 
      age= {100}/>
    </div>
  )
}

export default App