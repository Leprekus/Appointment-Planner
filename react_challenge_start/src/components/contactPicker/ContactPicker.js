import React from "react";
import { useAppointmentInfoUpdateContext } from "../../Context/AppointmentInfoContext";

export const ContactPicker = ( { contacts }) => {

  const updateAppointmentInfo = useAppointmentInfoUpdateContext()

  return (
      <select name='Contact' onChange={updateAppointmentInfo} >
    {
      contacts.map((contact, index) => (
      <option 
      key={`${contact.Name}_${index}`} 
      value={contact.Name}
      >{contact.Name}</option>
      ))
    }
    </select>
  );
};
