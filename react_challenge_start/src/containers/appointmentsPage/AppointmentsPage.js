import { useState } from "react";
import { AppointmentForm  } from "../../components/appointmentForm/AppointmentForm";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
 const { contacts, appointments, setAppointments } = props

 const [ title, setTitle ] = useState('')
 const [ currentContact, setCurrentContact ] = useState('')
 const [ date, setDate ] = useState('')
 const [ time, setTime] = useState('')

 const [ appointmentInfo , setAppointmentInfo ] = useState({
  Title: '',
  currentContact: '',
  Date: '',
  Time: ''
 })

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
   resetForm()
   
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
      </section>
    </div>
  );
};
