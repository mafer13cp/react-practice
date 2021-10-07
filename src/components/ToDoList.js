import React from "react";
import ToDo from "./ToDo";
import "../css/todolist.css";

function  ToDoList (props) {

    return (
        <div className = "list-wrapper">
            {props.tasks.map((task, index) =>(
            <ToDo task = {task} key = {task}/>
            ))}
        </div>
    );
}

export default ToDoList;