import React from 'react';
import Result from './Result';
import Picker from './Picker';

const defaultDate = new Date();
const year = defaultDate.getFullYear();
const month = ('0' + (defaultDate.getMonth() + 1)).slice(-2);
const day = ('0' + defaultDate.getDate()).slice(-2);
const formatDate = (year, month, day) =>
  `${year}/${('0' + month).slice(-2)}/${('0' + day).slice(-2)}`

export default function DatePicker ({prop}) {
  const [viewStatus, setViewStatus] = React.useState('');
  const [showView, setShowView] = React.useState(false)
  const [showResult, setShowResult] = React.useState(true);
  
  let date;
  if (prop.value == '') {
    date = formatDate(year, month, day);
  } else {
    date = prop.value;
  }

  const [selectedValue, setSelectedValue] = React.useState(date);

  const onSelected = (value, view) => {
      setViewStatus(view);
      if (value !== undefined) {
        setSelectedValue(value);
        toggleResult(true);
      }
  }

  const toggleResult = (show) => {
    setShowResult(show);
  }

  const togglePickerView = (value) => {
    setShowView(value);
  }

  const setView = (view) => {
    setViewStatus(view);
    if (view !== undefined) setShowView(true);
  }

  const resetPicker = () => {
    toggleResult(false);
    togglePickerView(false);
    setSelectedValue(formatDate(year, month, day));
    prop.selected(undefined);
  }

  const handleSelected = () => {
    togglePickerView(false);
    prop.selected(showResult ? selectedValue : undefined);
  }
 

  return (
    <div className="DatePicker">
      <Result selectedValue={selectedValue} showResult={showResult} setView={setView}/>
      <Picker selectedValue={selectedValue}
              onSelected={onSelected}
              viewStatus={viewStatus}
              showView={showView}
              togglePickerView={togglePickerView}
              resetPicker={resetPicker}
              handleSelected={handleSelected} />
    </div>
  )
}