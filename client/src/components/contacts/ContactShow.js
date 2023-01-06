import { useState } from 'react';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';

const ContactShow = ({ id, first_name , last_name, email, phone, updateContact, deleteContact }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      {
        editing ?
          <>
            <ContactForm 
              id={id}
              name={first_name}
              last_name={last_name}
              email={email}
              phone={phone}
              updateContact={updateContact}
              setEdit={setEdit}
            />
            <button onClick={() => setEdit(false)}>
              Cancel
            </button>
          </>
        :
        <>
          <h3>{first_name}</h3>
          <h3>{last_name}</h3>
          <h4>{email}</h4>
          <p>{phone}</p>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteContact(id)}>
            Delete
          </button>
        </>
      }
    </>
  )
}

export default ContactShow;