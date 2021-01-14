
function Status(props) {
 
  switch (props.status) {
    case "done":
      return <p style={{  fontWeight: "bold"}  }>{ props.status}</p>

    case "cancel":
      return <p style={{  textDecoration: "line-through"}}>{ props.status}</p>

    case "pending":
      return <p style={{ fontWeight: "bold", textDecoration: "underline"}}>{ props.status}</p>
     
    default:
      return <p>{ props.status}</p>
  }

}

export default Status;