import { navigate } from "gatsby"
import React, { useState } from "react"
import Layout from "../components/layout"
import "./contact.scss"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Contact = () => {
  const [state, setState] = useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
    console.log(state)
  }
  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .then(error => alert(error))
  }

  return (
    <Layout>
      <h3 className="contact-title">Gửi tin nhắn</h3>
      <div className="wrap-form">
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/thanks/"
          onSubmit={handleSubmit}
        >
          {/* You still need to add the hidden input with the form name to your JSX form */}
          <input type="hidden" name="form-name" value="contact" />
          <label>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={handleChange}
          />

          <label>Handy</label>
          <input
            type="number"
            name="number"
            id="number"
            required
            onChange={handleChange}
          />

          <label>Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            required
            onChange={handleChange}
          />

          <label>Message</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            onChange={handleChange}
          />

          <button type="submit">Send</button>
          {/* <input type="reset" value="Clear" /> */}
        </form>
      </div>
    </Layout>
  )
}

export default Contact
