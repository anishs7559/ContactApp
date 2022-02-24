import React,{useState} from 'react'

const AddContact = () => {
  const [input,setInput]=useState('')
  const[contact,setContact]=useState([])
  const [state,setState]=useState('')
  
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
          <input type={'number'} value={state} onChange={(e)=>setState(e.target.value)} />
          <br/> <button>submit</button> 
        </form> </div>
  
    <div className='contactList'>
      {contact.map((value)=>{return(<div key={value.id}><h3>{value.name}</h3> <h3>{value.email}</h3> <button onClick={()=>handleDelete(value.id)}>delete</button></div>)})}
      </div>
    </div>
    )
}

export default AddContact