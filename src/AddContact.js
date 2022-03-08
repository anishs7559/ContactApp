import React,{useState} from 'react'
import './App.css'

const AddContact = () => {
  const [input,setInput]=useState('')
  const[contact,setContact]=useState([])
  const [state,setState]=useState('')
  const [edit,setEdit]=useState('')
  const[value,setValue]=useState('')
  
  const handleSubmit=(e)=>{
   e.preventDefault()
   setContact([...contact,{id:new Date().getTime(),name:input,complete:false,email:state}])
   setInput('')
   
   setState('')

  }
 function handleDelete(id){
  const update=[...contact].filter((contact)=>contact.id!==id)
  setContact(update)
 }
 const handleEdit=(id)=>{
   setContact([...contact,{name:edit,email:value}])

 }
  
  return (
    <div>
      
      <div className='addcontact'>
     
        <form onSubmit={handleSubmit} >
        <label>name</label><br />
          <input  value={input} onChange={(e)=>setInput(e.target.value)}/>
          <br />
          <label >phone number</label><br />
          <input type={'number'} value={state} onChange={(e)=>setState(e.target.value)} />
          <br/> <button>submit</button> 
        </form>
        <input type="text" onChange={(e)=>setEdit(e.target.value)} />
        <input type="text" onChange={(e)=>setValue(e.target.value)}/> 
        <button>submit</button> </div>

  
    <div>
      {contact.map((value)=>{return(<div  key={value.id}><h3>{value.name}</h3>
       <h3>{value.email}</h3> <button onClick={()=>handleDelete(value.id)}>delete</button> <button onClick={handleEdit(value.id)}>edit</button></div>)})}
      </div>
    </div>
    )
}

export default AddContact