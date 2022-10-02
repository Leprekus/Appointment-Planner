import { useState, useContext, createContext } from "react"

const AppointmentInfoContext = createContext()
const SetAppointmentInfoContext = createContext()

export const useAppointmentInfoContext = () => useContext(AppointmentInfoContext)
export const useSetAppointmentInfoContext = () => useContext(SetAppointmentInfoContext)

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
            <SetAppointmentInfoContext.Provider value={handleSetAppointment}>
                { children }
            </SetAppointmentInfoContext.Provider>
        </AppointmentInfoContext.Provider>
    )

}    