import React,{useState,useEffect} from 'react'
import './App.css'

const AddContact = () => {
  const [input,setInput]=useState('')
  const[contact,setContact]=useState([])
  const [state,setState]=useState('')
  const [editvalue,setEditvalue]=useState(null)
  const [edit,setEdit]=useState('')
  const[Todo,setTodo]=useState('')
  useEffect(()=>{
    const temp=localStorage.getItem('todos')
    const loaded=JSON.parse(temp)
    if(loaded){
      setContact(loaded)
    }
  },[])
  useEffect(()=>{
    const temp=JSON.stringify(contact)
    localStorage.setItem('todos',temp)
  },[contact])
  
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
 const onClick=(id)=>{
   const updated=[...contact].map((todo)=>{
     if(todo.id===id){
      todo.name=edit
     todo.email=Todo
   }
   return todo
  })
   setContact(updated)
  setEdit('')
  setTodo('')
  setEditvalue(null)
 }

  return (
    <div >
      
      <div>
     
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
        <input value={edit} onChange={(e)=>setEdit(e.target.value)}/> <br /> <label>phn</label> <br />
        <input value={Todo} onChange={(e)=>setTodo(e.target.value)}/></form>):
        (<form><h3>{value.name}</h3><h3>{value.email}</h3></form>)}
      {editvalue===value.id?(<button onClick={()=>onClick(value.id)}>submit</button>):
      (<form>  <button onClick={()=>handleDelete(value.id)}>delete</button> 
        <button onClick={()=>setEditvalue(value.id)}>edit</button></form>)}
      
        
        </div>)})}
      </div>
    </div>
    )
}

export default AddContact