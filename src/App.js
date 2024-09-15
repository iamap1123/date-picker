import React from 'react';
import './App.css';
import DatePicker from './Components/DatePicker';


function App () {

  // Selected event
  const eventSelected = (date) => {
    alert("Selected: " + date);
  }

  const DatePickerProps = {
    value: '',                // Default selected date: String
    selected: eventSelected   // Sselected event: String | undefined
  }

  return (
    <div>
      <h1 className="title">DatePicker</h1>
      <DatePicker prop={DatePickerProps} />
    </div>
  )
}

export default App;