import React from "react";

export const ContactForm = ( props ) => {

  return (
    <input 
    type='text' 
    name={props.name} 
    placeholder={props.value} 
    onChange={props.handleChange} />
  );
};
