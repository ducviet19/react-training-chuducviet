import '../styles/home.css'
import Task from "../component/Task";
import React, { useState } from 'react';

import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Doing from './Doing';
import Done from './Done';

import todoStore from '../store/TodoStore'

import {observer} from 'mobx-react'
function Home() {
    // const DATA = [
    //     {
    //         title: "FrameWork1",
    //         content: "ReactJs",
    //         status: "done"
    //     },
    //     {
    //         title: "FrameWork2",
    //         content: "Angular",
    //         status: "cancel"
    //     },
    //     {
    //         title: "FrameWork3",
    //         content: "VueJs",
    //         status: "pending"
    //     }
    // ];

    const updateData = (value, index) => {
        // let dataTemp = [...dataTask];
        // dataTask[index].content = value;


        // setDataTask(dataTemp)
    }

    const [newTask ,  setNewTask] = useState("")



    const renderTask = () => {
        return todoStore.taskList.map((item, index) => {
            return <Task
                index={index}
                key={index}
                {...item}
                isLastItem={index === todoStore.taskList.length - 1}
                isFistItem={index === 0}
                 />
        })
    }

    const valueChange = (e) => {
        setNewTask(e.target.value)
        // const value = e.target.value;
    
        // setNewTask({[e.target.name]: value});
        // console.log(newTask)
    }
    const addTask = (e) => {
        e.preventDefault();
        todoStore.addTask({title: newTask,  status: "pending"});
        setNewTask("")
    }

    return (
        <BrowserRouter>
            <h2>TodoList</h2>
            <ul>
                <li>
                    <Link to="/new">New</Link>
                </li>
                <li>
                    <Link to="/doing">Doing</Link>
                </li>
                <li>
                    <Link to="/done">Done</Link>
                </li>
            </ul>
            {/* <ul className="list-inline border-top-0" >
                {renderTask()}
            </ul> */}


            <Switch>
                <Route path="/new">
                    <button onClick={addTask}>Add</button>
                <input   value={newTask} onChange={valueChange} ></input>
                    {/* <form onSubmit={addTask}>
                   
                    <label >Title
                    <input name="title"  value={newTask.title} onChange={valueChange} ></input>
                    </label>
                    <label >Content
                    <input name="content"  value={newTask.content} onChange={valueChange} ></input>
                    </label>
                    <button>Add new</button>
                    </form> */}
                  
                    {<ul className="list-inline border-top-0" >
                        {renderTask()}
                    </ul>}
                </Route>
                <Route path="/doing">
                {todoStore.taskList.filter((e)=>e.status==='pending').map((item, index) => <Task {...item}  key={index} index={index} />)}
                </Route>
                <Route path="/done">
                    <Done />
                </Route>
            </Switch>
        </BrowserRouter>
    )

}

export default observer(Home)