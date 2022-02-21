import React,{useState} from 'react'

const AddContact = () => {
  const [input,setInput]=useState('')
  const[contact,setContact]=useState([])
  const [state,setState]=useState('')
  const[value,setValue]=useState([])
  const handleSubmit=(e)=>{
   e.preventDefault()
   setContact([...contact,{id:new Date().getTime(),text:input,complete:false}])
   setInput('')
   setValue([...value,{id:new Date().getTime(),text:state,complete:false}])
   setState('')

  }
  return (
    <div>
      
      <div className='addcontact'>
     
        <form onSubmit={handleSubmit} >
        <label>name</label><br />
          <input value={input} onChange={(e)=>setInput(e.target.value)}/>
          <br />
          <label >phone number</label><br />
          <input value={state} onChange={(e)=>setState(e.target.value)} />
          <br/> <button>submit</button> 
        </form> </div>
  
    <div className='contactList'>
      {contact.map((value)=>{return(<div key={value.id}><h3>{value.text}</h3></div>)})}
      {value.map((value)=>{return(<div>{value.text}</div>)})}
      </div>    
     
    
    </div>)
}

export default AddContact