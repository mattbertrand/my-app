import React from 'react'

const ContactCard = () => {
    return (
        <div className="contact-card">
            <img alt="profile" src="https://via.placeholder.com/150"></img>
            <div className="user-details">
                <p>Name: Matthieu Bertrand</p>
                <p>Email: matt@matthieubertrand.com</p>
                <p>Age: 32</p>
            </div>
        </div>
    )
}

export default ContactCard