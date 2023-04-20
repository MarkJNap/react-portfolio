import React, {useState} from 'react';

export default function Contact() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleInputChange = (e) => {
    const { target } = e
    const inputType = target.name
    const inputValue = target.value

    if (inputType === "name") {
      setName(inputValue)
      setError('')
      setSuccess('')
    } else if (inputType === "email") {
      setEmail(inputValue)
      setError('')
      setSuccess('')
    } else {
      setMessage(inputValue)
      setError('')
      setSuccess('')
    }
  }

  const handleBlurChange = (e) => {
    const { target } = e
    const inputType = target.name
    const inputValue = target.value
    
    if (inputType === "name") { 
       if (!inputValue.length) {
        setSuccess('')
        setError("Please enter your name")
       }
    } else if (inputType === "message") {
      if (!inputValue.length) {
        setSuccess('')
        setError("Please include a message")
      }
    } else {
      if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,8}$/.test(inputValue)) {
        setSuccess('')
        setError("Please enter a valid email address")
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.length || !message.length || (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,8}$/.test(email))) {
      setError("Please enter valid details.")
    } else {
      setName('')
      setEmail('')
      setMessage('')
      setError('')
      setSuccess('Your message has been sent successfully. Thank you!')
    }
  }

    return (
      <main className='container align-item center s12'>
        <h1>Contact Me</h1>
        <div className="">
          <form className="container contact-form" onSubmit={handleSubmit}>
            <div className="">
              <div className="">
                <label className="align-text left" htmlFor="name">Name:</label>
                <input id="name" type="text" className='white-text' value={name} name='name' onChange={handleInputChange} onBlur={handleBlurChange}/>
              </div>
            </div>
            <div className="">
              <div className="">
                <label className="align-text left" htmlFor="email">Email:</label>
                <input id="email" type="email" className='white-text' value={email} name='email' onChange={handleInputChange} onBlur={handleBlurChange}/>
              </div>
            </div>
            <div className="">
              <div className="">
                <label className="align-text left" htmlFor="message">Your Message:</label>
                <textarea id="message" className="white-text" value={message} name='message' onChange={handleInputChange} onBlur={handleBlurChange}></textarea>
              </div>
            </div>
            {error && (
            <div>
              <p className="red-text">{error}</p>
            </div>
            )}
            {success && (
            <div>
              <p className="green-text">{success}</p>
            </div>
            )}
            <div>
              <button className="btn red white-text" type="submit">Send</button>
            </div>
          </form>
        </div>
      </main>
    );
}