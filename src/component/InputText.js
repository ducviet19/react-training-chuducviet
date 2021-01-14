
import React from 'react';
function InputText(props) {

  console.log(props.index)
    return(
      <>
     <input type="text" onChange={(e) => {
        console.log('input text value:', e.target.value) 
       props.getValue(e.target.value,props.index)
      
     }}></input>
      </>
    )
}

export default InputText;