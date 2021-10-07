import { Component } from "react";
import Header from "./Header";
import Form from "./Form";
import ToDoList from "./ToDoList";

class App extends Component {
  state = {tasks: ["Hacer la tarea", "Correr", "Dormir"]}

  createToDo(toDoContent) {
    //this.setState({tasks: toDoContent});
    this.setState({tasks: [...this.state.tasks, toDoContent]});
  }
  render () {
    return (
      <div className = "wrapper">
        <div className = "card frame" >
          <Header>Hay {this.state.tasks.length} tasks</Header>
          <ToDoList tasks = {this.state.tasks}/>
          <Form onSubmit ={(value) => this.createToDo(value)}/>
        </div>
      </div>
    );
  }
}

export default App;
