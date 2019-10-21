import React from 'react';
import Task from "./Task";

const TaskList = (props) => {

  const tasks = props.tasks.map(task =>
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      changeActive={props.changeActive}
    />)

  return (
    <div>
      <div className="active">
        <h2>Lista Zadań do zrobienia</h2>
        {tasks}
      </div>
      <hr />
      <div className="done">
        <h2>Lista Zadań zrobionych (0)</h2>

      </div>
    </div>


  );

}

export default TaskList;