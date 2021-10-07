import React from "react";
import "../css/todo.css";

class ToDo extends React.Component {
    state = {
        done: true,
    };

    render() {
        return (
            <div className = {`list-item ${this.state.done ? "done" : ""}`} >
                {this.props.task}
                <button onClick = {() =>{
                    this.setState((prevState) => ({done: !this.prevState.done}));
                }}
                    className = "task-button"
                    style = {{height: 15, width: 10}}
                    />
            </div>
        );
    }
}

export default ToDo;