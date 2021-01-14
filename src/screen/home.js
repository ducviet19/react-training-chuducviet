import '../styles/home.css'
import Task from "../component/Task";
import React, { useState } from 'react';
function Home() {


    const DATA = [

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

    const [dataTask, setDataTask] = useState(DATA)
    const updateData = (value,index) => {

        let dataTemp =[ ...dataTask ];
        dataTask[index].content = value
    
        setDataTask(dataTemp)

    }

    const renderTask = () => {
        return dataTask.map((item, index) => {
            return <Task
            index= {index}
            key={index}
            {...item} 
            isLastItem={index === dataTask.length - 1} 
            isFistItem={index === 0} 
            updateData={updateData}   />
        })
    }

    return (
        <div className="home">
            <h2>TodoList</h2>
            <ul className="list-inline border-top-0" >
                {renderTask()}
            </ul>
        </div>
    )

}

export default Home;