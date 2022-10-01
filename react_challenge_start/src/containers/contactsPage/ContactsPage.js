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
   //No dupes = [] empty array
   //Dupes = [] array with length
   const isDuplicate = contacts.map(contact => (
    Object.keys(contact).filter(key => contact[key] === contactInfo[key])
  )) 
  return isDuplicate.length > 0 ? 'Clear Data' : createContact()
   
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
            <li key={index}>
            {contact.name}
            {contact.phone}
            {contact.email}
            </li>
            )) : 'No Contacts Found'
        }
      </section>
    </div>
  );
};
