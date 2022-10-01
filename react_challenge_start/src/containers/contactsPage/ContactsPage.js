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
    console.log(contactInfo.name)
   //return contacts.filter(contact => contact === contactInfo) ? "clear data" : setContacts(contactInfo)
   
  };

  const handleChange = ( e ) => {
    const { name, value } = e.target
    console.log(name)
    console.log(value)
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
   
        {Object.entries(contactInfo).map(([key, value]) => {
          return <ContactForm 
          name={key} 
          value={value}
          handleChange={handleChange}
          />
          })}
    
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
