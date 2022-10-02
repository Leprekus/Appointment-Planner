import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";
export const AppointmentForm = ( props ) => {
  const {
    handleChange,
    type,
    name,
    placeholder,
    value,

    contacts, 
    handleChooseContact
  } = props
  if( name === 'Contact' ) return <ContactPicker contacts={contacts} handleChooseContact={handleChooseContact}/>
  return (
      <input 
      onChange={handleChange} 
      type={type} 
      name={name}
      placeholder={placeholder} 
      value={value}

      required
      />
  );
};
