import React,{useState} from 'react'
import './App.css'

const AddContact = () => {
  const [input,setInput]=useState('')
  const[contact,setContact]=useState([])
  const [state,setState]=useState('')
  const [editvalue,setEditvalue]=useState(null)
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

  return (
    <div>
      
      <div className='addcontact'>
     
        <form onSubmit={handleSubmit} >
        <label>name</label><br />
          <input  value={input} onChange={(e)=>setInput(e.target.value)}/>
          <br />
          <label >phone number</label><br />
          <input value={state} onChange={(e)=>setState(e.target.value)} />
          <br/> <button>submit</button> 
        </form> 
       </div>

  
    <div>
      {contact.map((value)=>{return(<div  key={value.id}>
        {editvalue===value.id?(<form><label>name</label><br />
        <input/> <br /> <label>phn</label> <br /><input/></form>):
        (<form><h3>{value.name}</h3><h3>{value.email}</h3></form>)}
      
        <button onClick={()=>handleDelete(value.id)}>delete</button> 
        <button onClick={()=>setEditvalue(value.id)}>edit</button></div>)})}
      </div>
    </div>
    )
}

export default AddContact