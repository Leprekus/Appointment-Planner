import { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";

export const ContactsPage = ( props ) => {

  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [ contactInfo, setContactInfo ] = useState({ 
    name: 'Name' ,
    phone: 'Phone',
    email: 'Email'
  });

  const contacts = props.contacts;
  const setContacts = props.setContacts; 

  
  const createContact = () => {
    return setContacts( prevState => [ contactInfo, ...prevState] )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   // false = no Dupes
   // true = dupes
    const isDuplicate = contacts.some(contact => 
    JSON.stringify(contact) === JSON.stringify(contactInfo));

  return isDuplicate.length > 0 ? (alert('dupe'), console.log(contactInfo)) : createContact()
   
  };

  const handleChange = ( e ) => {
    const { name, value } = e.target
    setContactInfo(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }



  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
    
        <form onSubmit={handleSubmit}>
          { /*Object key passed as name & entry as value */
            Object.entries(contactInfo).map(([key, value]) => {
            return <ContactForm
            name={key}
            value={value}
            handleChange={handleChange}
            />
            })
            }
            <input type='submit' value='Add +'/>
        </form>
    
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        { contacts.length > 0 ?
          contacts.map( (contact, index) => (
            <ul key={index}>
            <li>
            <label>Name: </label>
            {contact.name}
            <br/>
            <label>Phone: </label>
            {contact.phone}
            <br/>
            <label>Email: </label>
            {contact.email}
            </li>
            </ul>
            )) : 'No Contacts Found'
        }
      </section>
    </div>
  );
};
