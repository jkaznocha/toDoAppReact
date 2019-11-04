import React from 'react';
import Task from "./Task";


const TaskList = (props) => {


  const active = props.tasks.filter(task => task.active);

  const done = props.tasks.filter(task => task.active === false);

  const activeTasks = active.map(task => <Task
    key={task.id}
    task={task}
    delete={props.delete}
    changeActive={props.changeActive}
  />)

  const doneTask = done.map(task => <Task
    key={task.id}
    task={task}
    delete={props.delete}
    changeActive={props.changeActive}
  />);

  return (
    <div>
      <div className="active">
        <h2>Lista Zadań do zrobienia</h2>
        {activeTasks.length > 0 ? activeTasks : <p>Brak zadań</p>}
      </div>
      <hr />
      <div className="done">
        <h2>Lista Zadań zrobionych ({done.length})</h2>
        {done.length > 5 ? <span style={{ fontSize: 10, fontStyle: "italic" }}>Brawo wykonałeś już ponad 5 zadań!!</span> : null}
        {doneTask}
      </div>
    </div>


  );

}

export default TaskList;