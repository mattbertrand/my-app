import React, { useState } from 'react'


const ContactCard = (props) => {
    const [showAge, setShowAge] = useState(false)
    return (
        <div className="contact-card">
            <img alt="profile" src={ props.avatarUrl }></img>
            <div className="user-details">
                <p>{ props.name }</p>
                <p>{ props.email }</p>
                <button onClick={() => setShowAge(!showAge)}>Show Age</button>
                { showAge && <p>Age: { props.age}</p> }
            </div>
        </div>
    )
}

export default ContactCard