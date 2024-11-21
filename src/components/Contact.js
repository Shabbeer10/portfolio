import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); // For feedback messages

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare data for EmailJS
    const templateParams = {
      user_name: name,
      user_email: email,
      message,
    };

    emailjs
      .send(
        'service_ipcb5cc',   
        'contact_form',  
        templateParams,
        'CVs8_lX7M-ahlJ0-u'
      )
      .then(
        () => {
          setStatus('Message sent successfully!');
          setName('')
          setEmail('');
          setMessage('');
        },
        (error) => {
          setStatus(`Failed to send message: ${error.text}`);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Send</button>
        {status && <p className="status-message">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
