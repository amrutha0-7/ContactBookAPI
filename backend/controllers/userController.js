import user from '../models/userModel.js'

export const createContact=async (req,res) =>
{
    const result=await user.create(req.body)
    res.json(result)
}

export const getContacts=async (req,res) =>{
    const contacts=await user.find()
    res.send(contacts)
}

export const updateContact =async (req,res)=>{
    const contact=await user.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.send(contact)
}

export const deleteContact = async (req,res)=>{
    const contact=await user.findByIdAndDelete(req.params.id);
    res.send({message:"Deleted"});
}