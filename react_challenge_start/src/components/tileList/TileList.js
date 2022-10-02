import React from "react";

export const TileList = ( props ) => {
  const { list } = props
  return (
    <div>
    { list.length > 0 ?
          list.map( (contact, index) => (
            <ul key={index}>
            <li>
            <label>Name: </label>
            {contact.Name}
            <br/>
            <label>Phone: </label>
            {contact.Phone}
            <br/>
            <label>Email: </label>
            {contact.Email}
            </li>
            </ul>
            )) : 'No Contacts Found'
        }
      
    </div>
  );
};
