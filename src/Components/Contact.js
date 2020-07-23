import React, { useState } from 'react'

export default function Contact() {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState({ text: ``, style: false });

    const handleSubmit = (e) => {
        e.preventDefault();
        sendingEmail();
    }

    const sendingEmail = () => {
        let templateParams = {
            from: email,
            subject: subject,
            html: message
        }
        window.emailjs.send('default_service', 'template_K3tOJVpo', templateParams)
            .then(res => {
                setResponse({ text: `Email Sent Successfully! I'll get back to you as soon as possible!`, style: true })
            }, error => {
                setResponse({ text: 'Email Failed, Please Try Again', style: false })
            })
    }

    return (
        <div id='contactContainer'>
            <h1 id="contactTitle">Are you interested in <span>Working Together?</span></h1>
            <form onSubmit={handleSubmit}>
                <label>Your Email</label>
                <input type='email' value={email} onChange={e => setEmail(e.target.value)} required></input>
                <label>Subject</label>
                <input type='text' value={subject} onChange={e => setSubject(e.target.value)} required></input>
                <label>Message</label>
                <textarea value={message} onChange={e => setMessage(e.target.value)} required></textarea>
                <button>Send!</button>
            </form>
            <h1 id='responseText' className={response.text === '' ? 'hideResponse' : response.style ? 'good' : 'bad'}>{response.text}</h1>
            <h3 id='otherEmail'>Or you can send your own email to <a href="mailto:hello@michaelboro.tech">hello@michaelboro.tech</a></h3>
            <h2>Other ways to <span>Connect!</span></h2>
            <h3>DM me on Twitter <a href="https://twitter.com/codehardycode">@codehardycode</a>!</h3>
            <h3>Connect with me on <a href="https://www.linkedin.com/in/michael-boro-2ba598a6/">Linkedin</a>!</h3>
        </div>
    )
}
