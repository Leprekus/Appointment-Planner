import React from "react";
import { useAppointmentInfoContext, useAppointmentInfoUpdateContext, useAppointmentInfoResetContext } from "../../Context/AppointmentInfoContext";

export const ContactPicker = ( { contacts }) => {

  const appointmentInfo = useAppointmentInfoContext()
  const resetAppointmentInfo = useAppointmentInfoResetContext() 
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
