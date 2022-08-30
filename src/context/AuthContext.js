import React from 'react'
import {createContext, useState} from "react"


const authContext= createContext();
authContext= authContext.Provider;

function AuthContext() {
    const [success, setSuccess]= useState("false");
    const [error, setError]= useState("null");
    const [loading, setloading]= useState("false");
  const [user, setUser] = useState("null");
  //signup fucntionally
  const authRegistrations = async(username, password, email) = await fetch(url, {
    method: 'POST'
  })

  return (
    <div>
    
    </div>
  )
}

export default AuthContext