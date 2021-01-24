
import React from 'react';
import todoStore from '../store/TodoStore';
function Text(props) {


  const deleteTask = () => {
  todoStore.deleteTask(props.index)
  }

  const { isTitle, content } = props;
  if (isTitle) {
    return<> <h1  > {content}</h1><button onClick={deleteTask}>Delete</button></>
  } else {
    return <p>{content}</p>
  }

}

export default Text;