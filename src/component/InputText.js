
import React from 'react';
function InputText(props) {

    return(
      <>
     <input type="text" onChange={(e) => {
        const value = e.target.value.trim()
          props.getValue(value , props.index)     
     }}></input>
      </>
    )
}

export default InputText;