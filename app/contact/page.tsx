'use client'

import { useState } from "react"

export default function ContactForm (){
    const[email, setEmail] = useState(" ");
    const handleSubmit = async(e: { preventDefault: () => void; }) =>{
     e.preventDefault()

     await fetch('/api/contact', {
        method: 'Post',
        body: JSON.stringify(email),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
     )

    }
    return(
        <div className="">
            <form action="" onSubmit={handleSubmit}>
                <input type="email" value={email} required onChange={(e)=>{setEmail(e.target.value)}} />
                <input type="submit" />
            </form>
        </div>
    )

}