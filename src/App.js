import React from 'react'
import './App.css'
import ContactCard from './ContactCard'

const App = () => {
  const contacts = [
    {
      avatarUrl: "https://via.placeholder.com/150",
    name: "Matthieu Bertrand",
    email: "matt@matthieubertrand.com",
    age: 32
  },
  {
    avatarUrl: "https://via.placeholder.com/150",
    name: "Paul Jones",
    email: "pj@example.com" ,
    age: 25
  },
  {
    avatarUrl: "https://via.placeholder.com/150",
    name: "Peter Pan" ,
    email: "pp@mpeterpan.com" ,
    age: 100
  },
  {
    avatarUrl: "https://via.placeholder.com/150",
    name: "Test test",
    email: "test@test.com" ,
    age: 150
  }
  ]
  return (
    <div>
      { contacts.map((contact, index) => {
        return (
          <ContactCard key={index}
      avatarUrl = { contact.avatarUrl } 
      name = { contact.name }
      email= { contact.email }
      age= { contact.age }/>
        )
      }) }
      {/* <ContactCard 
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
      age= {100}/> */}
    </div>
  )
}

export default App