
function Header ({selectedValue, onSelected}) {
  const year = selectedValue.slice(0, 4);
  const month = selectedValue.slice(5, 7);
  
  return (
    <div className="pickerHeader">
      <button key="year" onClick={() => onSelected(undefined, 'year')}>{year}</button>&nbsp;
      <button key="month" onClick={() => onSelected(undefined, 'month')}>{month}</button>
    </div>
  )
}

export default Header;