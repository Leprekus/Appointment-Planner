import { useState, useContext, createContext } from "react"

const AppointmentInfoContext = createContext()
const AppointmentInfoUpdateContext = createContext()

export const useAppointmentInfoContext = () => useContext(AppointmentInfoContext)
export const useAppointmentInfoUpdateContext = () => useContext(AppointmentInfoUpdateContext)

export const AppopintmentInfoProvider = ({ children }) => {
    const [ appointmentInfo , setAppointmentInfo ] = useState ({
        Title: '',
        Contact: '',
        Date: '',
        Time: ''
       })
    
    const handleSetAppointment = ({ target }) => {
        setAppointmentInfo( prevState => ({
            ...prevState,
            [ target.name ]: target.value
          }))
    }

    return (
        <AppointmentInfoContext.Provider value={appointmentInfo}>
            <AppointmentInfoUpdateContext.Provider value={handleSetAppointment}>
                { children }
            </AppointmentInfoUpdateContext.Provider>
        </AppointmentInfoContext.Provider>
    )

}    