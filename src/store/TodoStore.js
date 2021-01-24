
import React from "react"
import ReactDOM from "react-dom"
import { makeAutoObservable, observable } from "mobx"
import { observer } from "mobx-react"


class TodoStore {
    arrNewTask = [];
    arrDoingTask = [];
    arrDoneTask = [];
    taskList = [
        {
            title: "FrameWork1",
            content: "ReactJs",
            status: "done"
        },
        {
            title: "FrameWork2",
            content: "Angular",
            status: "cancel"
        },
        {
            title: "FrameWork3",
            content: "VueJs",
            status: "pending"
        }
    ];


    constructor() {
        makeAutoObservable(this);
        console.log(this.taskList)
    }


    addTask(task) {
        this.taskList.push(task);
        console.log(this.taskList)
    }

    deleteTask(index) {
        const newList = [...this.taskList]
        newList.splice(index,1)
        this.taskList = newList;
        // this.taskList.splice(index,1)
    }
    editTask(value,index) {
        this.taskList[index].content = value
    }
    changeStatusTask(value,index) {
        console.log(this.taskList[index])
        this.taskList[index].status = value;


        if(this.taskList[index].status === "done") {
            this.taskList.splice(index,1);

            console.log(this.taskList)
           
        };
        console.log(this.arrDoneTask)
    }

}
const todoStore = new TodoStore();

export default todoStore