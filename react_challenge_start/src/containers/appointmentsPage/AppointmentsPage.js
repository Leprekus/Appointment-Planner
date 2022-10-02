import { useState } from "react";
import { AppointmentForm  } from "../../components/appointmentForm/AppointmentForm";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
 //appointments = array
 const { contacts, appointments, setAppointments } = props

 const [ appointmentInfo , setAppointmentInfo ] = useState({
  Title: '',
  Contact: '',
  Date: '',
  Time: ''
 })

 const createAppointment = () => {
   return setAppointments( prevProps => [ appointmentInfo, ...prevProps] )
  }
  const resetForm = () => {
    setAppointmentInfo({
      Title: '',
      currentContact: '',
      Date: '',
      Time: ''
    })
  }
  const handleChange = ({ target }) => {
    setAppointmentInfo( prevState => ({
      ...prevState,
      [ target.name ]: target.value
    }))

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   //true = no dupes
   //false = dupes
   const appointmentIsUnqiue = appointments.every(appointment => 
    appointment[ 'Date' ] === appointmentInfo[ 'Date' ]
    &&
    appointment[ 'Time' ] === appointmentInfo[ 'Time' ])
  appointmentIsUnqiue ? createAppointment() : alert('Conflicting Schedules')
  return resetForm()
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <form onSubmit={handleSubmit}>
          {Object.entries(appointmentInfo).map(([key, value]) => (
            <AppointmentForm
              handleChange={handleChange}
              type={key === 'Date' || key === 'Time' ? key : 'text' }
              name={key}
              placeholder={key}
              value={value}
            />
          ))}
          <input type='submit' value='Submit'/>
        </form>

      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        {appointments.map( appointment =)}
      </section>
    </div>
  );
};
