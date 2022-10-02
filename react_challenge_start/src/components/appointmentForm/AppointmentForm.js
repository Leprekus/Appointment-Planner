import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";
import { useAppointmentInfoContext, useAppointmentInfoUpdateContext, useAppointmentInfoResetContext } from "../../Context/AppointmentInfoContext";
export const AppointmentForm = ( props ) => {
  const {

    type,
    name,
    placeholder,
    value,

    contacts, 
  } = props

const appointmentInfo = useAppointmentInfoContext()
const resetAppointmentInfo = useAppointmentInfoResetContext() 
const updateAppointmentInfo = useAppointmentInfoUpdateContext()

  if( name === 'Contact' ) return <ContactPicker contacts={contacts} />
  return (
      <input 
      onChange={updateAppointmentInfo} 
      type={type} 
      name={name}
      placeholder={placeholder} 
      value={value}

      required
      />
  );
};
