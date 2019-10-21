import React, { Component } from 'react';
import './AddTask.css';


class AddTask extends Component {
  state = {
    tekst: "cokolwiek",
    checked: ""
  }

  render() {
    return (
      < div className="form">
        <div>Dodaj zadanie</div>
        <input type="text" value={this.state.tekst} placeholder="Dodaj zadanie"></input>
        <input type="checkbox" checked={this.state.checked}>Priorytet</input>
        <hr />
      </div>
    );
  }

}

export default AddTask;