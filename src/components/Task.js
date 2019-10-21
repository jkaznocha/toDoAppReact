import React from 'react';


const Task = (props) => {


  const importatntStyle = { color: "red" }

  //destrukturyzacja
  const { text, date, id, active, finishDate, important } = props.task;


  if (active) {
    return (
      <div>
        <p>
          {important ? <strong style={importatntStyle}>{text}  </strong> : <strong>{text}  </strong>}
          termin: <span>{date} </span>
          <button onClick={() => props.changeActive(id)}>Zrobione</button>
          <button onClick={() => props.delete(id)}>Usuń</button>
        </p>

      </div>)
  } else {


    const finish = new Date(finishDate).toLocaleDateString()

    return (
      <div>
        <p>
          <strong>{text}  </strong>
          <em>termin: {date} </em>
          data zakończenia zadania: <span>{finish}</span>
          <button onClick={() => props.delete(id)}>Usuń</button>
        </p>
        <br />

      </div>

    );
  }


}

export default Task;