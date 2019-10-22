import React from 'react';


const Task = (props) => {


  const importatntStyle = { color: "red" }

  //destrukturyzacja
  const { tekst, date, id, active, finishDate, important } = props.task;


  if (active) {
    return (
      <div>
        <p>
          {important ? <strong style={importatntStyle}>{tekst}  </strong> : <strong>{tekst}  </strong>}
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
          <strong>{tekst}  </strong>
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