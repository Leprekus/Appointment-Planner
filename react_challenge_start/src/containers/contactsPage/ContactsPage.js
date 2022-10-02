import { use } from "chai";
import { useState, useEffect, useRef } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from '../../components/tileList/TileList'

export const ContactsPage = ( props ) => {

  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [ contactInfo, setContactInfo ] = useState({ 
    Name: '' ,
    Phone: '',
    Email: ''
  });
  
  const contacts = props.contacts;
  const setContacts = props.setContacts; 

  const resetForm = () => {
    setContactInfo ({
      Name: '' ,
      Phone: '',
      Email: ''
    })
  }
  const createContact = () => {
    return setContacts( prevState => [ contactInfo, ...prevState ] )

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
    resetForm()
  //replace dupe for popup 
  return isDuplicate ? alert('Contact Already Exists') : createContact()
   
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
            placeholder={key}
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
        <TileList
          list={contacts}
        />
      </section>
    </div>
  );
};
