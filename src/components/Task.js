import React from 'react';


const Task = (props) => {
  //destrukturyzacja
  const { text, date, id } = props.task;

  return (
    <div>
      <p>
        <strong>{text}  </strong>
        termin: <span>{date} </span>
        <button onClick={() => props.changeActive(id)}>Zrobione</button>
        <button onClick={() => props.delete(id)}>Usuń</button>
      </p>
      <br />

    </div>

  );

}

export default Task;