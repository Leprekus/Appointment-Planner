import React from "react";
export const ContactPicker = ( { contacts, handleChoose }) => {
  alert(handleChoose)
  return (
      <select onChange={handleChoose || alert('no function defined')} >
    {
      contacts.map((contact, index) => (
      <option 
      key={`${contact.Name}_${index}`} 
      name='Contact'
      value={contact.Name}
      >{contact.Name}</option>
      ))
    }
    </select>
  );
};
