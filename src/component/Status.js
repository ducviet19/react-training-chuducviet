import { useState } from "react";
import todoStore from "../store/TodoStore";

function Status(props) {

  const [taskStatus, setTaskStatus] = useState(false);
  const [changeStatus,setChangeStatus] = useState("")

  const handleStatus = (e) => {
    console.log(e.target.value)
    setChangeStatus(e.target.value)
    
  }

  const handleSubmit = () => {
    todoStore.changeStatusTask(changeStatus,props.index)
    setTaskStatus(false)

  }


  const showStatus = () => {
    if (taskStatus) {

      return (
        <div>
          
        <label>
          Pick your Status:
          <select value={changeStatus} onChange={handleStatus} >
            <option value="done">Done</option>
            <option value="cancel">Cancel</option>
            <option value="pending">Pending</option>
          </select>
        </label>
       <button onClick={handleSubmit}>Edit</button>
     
          <p >Save</p>
        </div>
      )
    }
    else {
      return (
        <div >
          <button onClick={() => {
          setTaskStatus(true)
        }}>Edit Status</button>
        <p onClick={() => {console.log("status")}} style={props.status === "done" ? {fontWeight: 'bold'} : props.status === "cancel" ? {textDecoration: "line-through"} : { fontWeight: "bold", textDecoration: "underline"} }>{props.status}</p>
        </div>
      )
    }
  }

  
    return ( <>{showStatus()}</> )
  

 
  // switch (props.status) {
  //   case "done":
  //     return <p style={{  fontWeight: "bold"}  }>{ props.status}</p>

  //   case "cancel":
  //     return <p style={{  textDecoration: "line-through"}}>{ props.status}</p>

  //   case "pending":
  //     return <p style={{ fontWeight: "bold", textDecoration: "underline"}}>{ props.status}</p>
     
  //   default:
  //     return <p>{ props.status}</p>
  // }

}

export default Status;