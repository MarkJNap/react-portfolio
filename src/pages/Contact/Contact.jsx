import React, {useState} from 'react';

export default function Contact() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const handleInputChange = (e) => {
    const { target } = e
    const inputType = target.name
    const inputValue = target.value

    if (inputType === "name") {
      setName(inputValue)
      setError('')
    } else if (inputType === "email") {
      setEmail(inputValue)
      setError('')
    } else {
      setMessage(inputValue)
      setError('')
    }
  }

  const handleBlurChange = (e) => {
    const { target } = e
    const inputType = target.name
    const inputValue = target.value

  if (inputType === "name" && inputValue.length === 0) {
    setError("A name is required.")
  } else if (inputType === "message" && inputValue.length === 0) {
    setError("A message is required.")
  } else {
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,8}$/.test(inputValue)) {
      setError("A valid email address is required.")
    }
  }
}

    return (
      <main className='container align-item center s12'>
        <h1>Contact Me</h1>
        <div className="">
          <form className="container black">
            <div className="">
              <div className="">
                <label className="align-text left" for="name">Name:</label>
                <input id="name" type="text" className='white-text' value={name} name='name' onChange={handleInputChange} onBlur={handleBlurChange}/>
              </div>
            </div>
            <div className="">
              <div className="">
                <label className="align-text left" for="email">Email:</label>
                <input id="email" type="email" className='white-text' value={email} name='email' onChange={handleInputChange} onBlur={handleBlurChange}/>
              </div>
            </div>
            <div className="">
              <div className="">
                <label className="align-text left" for="message">Your Message:</label>
                <textarea id="message" className="white-text" value={message} name='message' onChange={handleInputChange} onBlur={handleBlurChange}></textarea>
              </div>
            </div>
            {error && (
            <div>
              <p className="red-text">{error}</p>
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