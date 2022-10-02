import React from "react";

export const ContactPicker = ( { contacts, handleChooseContact }) => {
  return (
    <select>
    {
      
      contacts.map((contact, index) => (
      <option key={`${contact.Name}_${index}`} onChange={handleChooseContact}>{contact.Name}</option>
      ))
    }
    </select>
  );
};
