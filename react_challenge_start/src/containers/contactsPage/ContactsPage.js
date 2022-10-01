import { useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";

export const ContactsPage = ( props ) => {

  /*
  Define state variables for 
  contact info and duplicate check
  */

  const createContact = (name, phone, email) => {
    const contacts = props.contacts;
    const setContacts = props.setContacts; 
  
    const newContact = {
      name: name, 
      phone: phone, 
      email: email
    };
    return setContacts( prevProps => [ newContact, ...prevProps] )
  }

  const createAppointment = (title, contact, date, time) => {
    const appointments = props.setAppointments;
    const setAppointments = props.setAppointments; 
  
    const newAppointment = {
      title: title, 
      contact: contact,
      date: date, 
      time: time
    };

    return setAppointments( prevProps => [ newAppointment, ...prevProps] )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   console.log(e.target.value)
   //return contacts.filter(contact => contact === contactInfo) ? "clear data" : setContacts(contactInfo)
   
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
