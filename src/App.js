import React from 'react';
import './App.css';
import DatePicker from './Components/DatePicker';


function App () {
  const eventSelected = (date) => {
    alert("Confirm selected: " + date);
  }

  const DatePickerProps = {
    value: '',
    selected: eventSelected
  }

  return (
    <div>
      <h1 className="title">DatePicker</h1>
      <DatePicker prop={DatePickerProps} />
    </div>
  )
}

export default App;