import { useState, useContext } from "react"
export const SetAppopintmentInfoProvider = ({ children }) => {
    const [ appointmentInfo , setAppointmentInfo ] = useState ({
        Title: '',
        Contact: '',
        Date: '',
        Time: ''
       })
    
    const doSomething = () => {
        return
    }

    return (
        <SetAppopintmentInfoProvider>
            { children }
        </SetAppopintmentInfoProvider>
    )

}   