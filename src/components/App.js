import React, { Component } from 'react';
import "./App.css";
import TaskList from "./TaskList";
import AddTask from './AddTask';


class App extends Component {
  counter = 2
  state = {
    tasks: [
      { id: 0, tekst: 'Przykładowe zadanie', date: '2018-02-15', important: false, active: true, finishDate: null },
      { id: 1, tekst: "Przykładowe pilne zadanie", date: '2020-11-12', important: true, active: true, finishDate: null },

    ]
  }

  deleteTask = (id) => {
    let tasks = [...this.state.tasks];

    tasks = tasks.filter(task => id !== task.id);

    this.setState({ tasks });

  }
  changeActive = (id) => {
    const tasks = [...this.state.tasks];

    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    })

    this.setState({ tasks })

  }

  handleAddTask = (tekst, checked, date) => {
    const task = {
      id: this.counter,
      tekst: tekst,
      important: checked,
      date: date,
      active: true,
      finishDate: null
    };

    //console.log(task)
    this.counter++

    // this.setState(prevState => ({
    //   tasks: [...prevState.tasks, task]
    // }))
    const tasks = [...this.state.tasks];
    tasks.push(task);
    this.setState({ tasks })
    console.log(this.state.tasks)
    return true
  }


  render() {
    return (
      <div className="App">
        <h1>To do app :)</h1>
        <AddTask addTask={this.handleAddTask} />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} changeActive={this.changeActive} />
      </div>
    );
  }
}

export default App;








