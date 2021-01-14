import React, { useState } from 'react';
import Text from './Text'
import Status from './Status'
import InputText from "./InputText";


function Task(props) {



  const chooseStyle = () => {
    if (status === "done") return { backgroundColor: 'green' }
    if (status === "cancel") return { backgroundColor: 'red' }
    if (status === "pending") return { backgroundColor: 'yellow' }
    if (props)
      return;
  }
  const { isLastItem, isFistItem, content, title, status,updateData,index } = props;

  const [isEditing, setIsEditing] = React.useState(false);
  const [inputValue, setInputValue] = React.useState({value : '' , index : 0});

  const getValue = (value, index) => {
    setInputValue({value: value, index: index});
  }

  const saveData = () => {
    setIsEditing(false)
    updateData(inputValue.value,inputValue.index)
  }



  const showInputText = () => {
    
    console.log(isEditing)
    if (isEditing) {

      return (
        <div>
          <p></p>
          <InputText getValue={getValue} index={index} />
          <p onClick={() => {
            saveData()
          }}>Save</p>
        </div>
      )
    }
    else {
      return (
        <div onClick={() => {
          setIsEditing(true)
        }}> 
          <Text isTitle content={title} />
          <Text content={content} />
        </div>
      )
    }
  }
  return (
    <>

      <li style={chooseStyle()}>

        {showInputText()}
       <Status status={status} />
      </li>

    </>
  )
}

export default Task;