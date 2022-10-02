import React from "react";

export const AppointmentForm = ( props ) => {
  const {
    handleChange,
    type,
    name,
    placeholder,
    value,
  } = props

  return (
      <input onChange={handleChange} 
            type={type} 
            name={name}
            placeholder={placeholder} 
            value={value}/>
  );
};
