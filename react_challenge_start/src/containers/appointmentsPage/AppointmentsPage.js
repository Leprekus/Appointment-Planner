import React from "react";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
  const createAppointment = (title, contact, date, time) => {
    const appointments = props.setAppointments;
    const setAppointments = props.setAppointments; 
  
    const newAppointment = {
      title: title, 
      contact: contact,
      date: date, 
      time: time
    };

    return setAppointments( prevProps => [ newAppointment, ...prevProps] )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
      </section>
    </div>
  );
};
