import { useState, useContext, createContext } from "react"

const SetAppointmentInfoContext = createContext()

export const SetAppopintmentInfoProvider = ({ children }) => {
    const [ appointmentInfo , setAppointmentInfo ] = useState ({
        Title: '',
        Contact: '',
        Date: '',
        Time: ''
       })
    
    const doSomething = ({ target }) => {
        setAppointmentInfo( prevState => ({
            ...prevState,
            [ target.name ]: target.value
          }))
    }

    return (
        <SetAppointmentInfoContext.Provider value={doSomething}>
            { children }
        </SetAppointmentInfoContext.Provider>
    )

}    