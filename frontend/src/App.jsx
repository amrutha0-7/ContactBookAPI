import ContactForm from './ContactForm.jsx'
import ContactList from './ContactList.jsx'
import API from './assets/api.js'
import './App.css'
import {useEffect,useState} from 'react'
function App()
{
  const [contacts,setContacts] = useState([])
  const [edit,setEdit] = useState(null)
  console.log(edit)

  const fetchContacts = async ()=>{
      const res = await API.get('/')
      setContacts(res.data)
    }

  useEffect(()=>
  {
    fetchContacts()
  } , [])

  const addContact = async (data)=>{
    await API.post("/",data)
    console.log("Sent successfully")

    // const res = await API.get('/')
    // setContacts(res.data)
    fetchContacts()
  }

  const deleteContact =async (id)=>{
    await API.delete(`/${id}`)
    fetchContacts()
  }

  const updateContact = async (data) =>{
    await API.put(`/${edit._id}`, data)
    setEdit(null);
    fetchContacts();
  }
  return(
  <>
    <ContactForm onSubmit={edit?updateContact:addContact } existing={edit}/>
    <ContactList contacts={contacts} 
    onDelete={ deleteContact } 
    onEdit={setEdit}/>
  </>
)}

export default App