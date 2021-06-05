import React, { useState } from 'react'


const ContactCard = () => {
    const [showAge, setShowAge] = useState(false)
    return (
        <div className="contact-card">
            <img alt="profile" src="https://via.placeholder.com/150"></img>
            <div className="user-details">
                <p>Name: Matthieu Bertrand</p>
                <p>Email: matt@matthieubertrand.com</p>
                <button onClick={() => setShowAge(!showAge)}>Show Age</button>
                { showAge && <p>Age: 32</p> }
            </div>
        </div>
    )
}

export default ContactCard