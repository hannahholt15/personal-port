import { useState, useEffect } from 'react';

const ContactForm = ({ addContact, id, first_name , last_name, email, phone, updateContact, setEdit }) => {
  const [contact, setContact] = useState({ first_name: '', last_name: '', email: '', phone:'' })

  useEffect(() => {
    if (id) {
      setContact({ first_name, last_name, email, phone })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateContact(id, contact)
      setEdit(false)
      window.location.reload();
    } else {
      addContact(contact)
    }
    setContact({ first_name: '', last_name: '', email: '', phone:'' })
  }

  return (
    <>
      <h2>{id ? "Update" : "Add New"} Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input 
          name='name' 
          value={contact.first_name} 
          onChange={(e) => setContact({ ...contact, first_name: e.target.value })} 
          required
        />
        <label>Last Name</label>
        <input 
          name='name' 
          value={contact.last_name} 
          onChange={(e) => setContact({ ...contact, last_name: e.target.value })} 
          required
        />
        <label>Email</label>
        <input
          name='email' 
          value={contact.email} 
          onChange={(e) => setContact({ ...contact, email: e.target.value })} 
          required
        ></input>
        <label>Phone</label>
        <textarea
          name='phone' 
          value={contact.phone} 
          onChange={(e) => setContact({ ...contact, phone: e.target.value })} 
          required
          max='5'
          min='0'
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default ContactForm;