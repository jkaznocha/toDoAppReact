import React, { Component } from 'react';
import "./App.css";
import TaskList from "./TaskList";
import AddTask from './AddTask';


class App extends Component {
  counter = 9
  state = {
    tasks: [
      { id: 0, tekst: 'zagrać wreszcie w Wiedźmina 3', date: '2018-02-15', important: true, active: true, finishDate: null },
      { id: 1, tekst: "zrobić dobry uczynek", date: '2020-11-12', important: false, active: true, finishDate: null },
      { id: 2, tekst: "pomalować dom po sylwestrze", date: '2019-09-11', important: false, active: true, finishDate: null },
      { id: 3, tekst: "schudnąć 30 kilogramów", date: '2019-05-20', important: true, active: true, finishDate: null },
      { id: 4, tekst: "sprzedać butelki po piwie (20 skrzynek)", date: '2020-11-12', important: false, active: true, finishDate: null },
      { id: 5, tekst: "jeszcze raz pomalować dom", date: '2019-09-11', important: false, active: true, finishDate: null },
      { id: 6, tekst: "fryzjer!!!", date: '2019-05-20', important: true, active: true, finishDate: null },
      { id: 7, tekst: "nie odbierać poleconego od komornika", date: '2020-11-12', important: false, active: true, finishDate: null },
      { id: 8, tekst: "kupić 2 butelki litrowe", date: '2019-09-11', important: false, active: true, finishDate: null },
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

    console.log(task)
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








