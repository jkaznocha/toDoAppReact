import React, { Component } from 'react';
import './AddTask.css';


class AddTask extends Component {

  minDate = new Date().toISOString().slice(0, 10);

  state = {
    tekst: "",
    checked: false,
    date: this.minDate
  }

  handleChange = (e) => {
    this.setState({ tekst: e.target.value })
  }

  handleClick = () => {
    console.log('dodaje')

    const { tekst, checked, date } = this.state

    const add = this.props.addTask(tekst, checked, date)

    if (add) {
      this.setState({
        tekst: '',
        checked: false,
        date: this.minDate
      })
    }

  }

  hanglChangeImportant = (e) => {
    this.setState({ checked: e.target.checked })
  }

  changeDate = (e) => {
    this.setState({ date: e.target.value })
  }

  render() {


    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + '12-31';

    return (
      < div className="form">
        <div>Dodaj zadanie</div>
        <input type="text" value={this.state.tekst} placeholder="Dodaj zadanie" onChange={this.handleChange}></input>
        <input type="checkbox" checked={this.state.checked} id="important" onChange={this.hanglChangeImportant} />
        <label htmlFor="important">Priorytet</label>
        <br></br>
        <label htmlFor="date">Termin:</label>
        <input id="date" type="date" min={this.minDate} max={maxDate} value={this.state.date} onChange={this.changeDate}></input>
        <br></br>
        <button onClick={this.handleClick}>Dodaj</button>
        <hr />
      </div >
    );
  }

}

export default AddTask;