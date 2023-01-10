import { json, Link } from "react-router-dom";
import "./ContactFormStyles.css"
import React, {useState} from 'react'




function ContactForm() {
    const [name, setName] = useState('')
    const [e, setE] = useState('')
    const [s, setS] = useState('')
    const [m, setM] = useState('')

    function storeData() {
        let details = {
            name: name,
            email: e,
            subject: s,
            message: m
        }
        localStorage.setItem('contactItem', "HafeezMessage")

    }

    function getData() {

        let data = localStorage.getItem('contactItem')
        // let json = data);

        alert(data)

    }
    return (
        <div className="from-container">
            <h1>Send a message to us!</h1>
            <form >
                <input id="name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                <input id="email" placeholder="Email" onChange={(e) => setE(e.target.value)} />
                <input id="subject" placeholder="Subject" onChange={(e) => setS(e.target.value)} />
                <textarea id="msg" placeholder="Message" onChange={(e) => setM(e.target.value)} rows="4"></textarea>
                <button id="sendBtn" onClick={storeData} type="submit"><Link to='/' style={{ textDecoration: 'none' }}>
                    Send Message
                </Link>
                </button>
                <button id="getData" onClick={getData} type="submit">
                    See Messages
                </button>
            </form>
        </div>

    )
}

export default ContactForm;