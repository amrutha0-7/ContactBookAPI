import {useState,useEffect} from 'react'

const ContactForm = ({onSubmit , existing})=>{
    const [name,setName] =useState("")
    const [phone,setPhone] = useState("")
    const [email,setEmail] = useState("")

    useEffect(()=>{
        if(existing){
            setName(existing.name)
            setEmail(existing.email)
            setPhone(existing.phone)
        }
    },[existing])


    function handleSubmit(e)
    {
        e.preventDefault()
        // console.log(name,phone,email);
        // fetch('/api/contacts',{
        //     method:'POST',
        //     headers:{
        //         'Content-type':'application/json'
        //     },
        //     body:JSON.stringify({name,phone,email})
        // })
        onSubmit({name,phone,email})
        setName("")
        setPhone("")
        setEmail("")
    }
    return <form onSubmit={handleSubmit}>
        <input type="text" 
        value={name} required 
        placeholder="name"
        onChange={(e) =>{setName(e.target.value)}}/>

        <input type="text" 
        value={phone} required 
        placeholder="email"
        onChange={(e) =>{setPhone(e.target.value)}}/>

        <input type="text" 
        value={email} required 
        placeholder="phone"
        onChange={(e) =>{setEmail(e.target.value)}}/>
        
        <button type="submit">{existing?"Update":"Add"}</button>
    </form>
}

export default ContactForm;