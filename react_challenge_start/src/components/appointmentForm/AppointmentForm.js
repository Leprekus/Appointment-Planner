import React from "react";

export const AppointmentForm = ( props ) => {
  const {
    handleChange,
    type,
    name,
    placeholder,
    value,
  } = props

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
      <input onChange={handleChange} 
            type={type} 
            name={name}
            placeholder={placeholder} 
            value={value}/>
  );
};
