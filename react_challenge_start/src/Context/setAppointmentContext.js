import { useState, useContext, createContext } from "react"

const SetAppopintmentInfo = createContext()

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
        <SetAppopintmentInfo.Provider value={doSomething}>
            { children }
        </SetAppopintmentInfo.Provider>
    )

}   