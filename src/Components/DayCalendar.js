import HandleDateString from "./HandleDateString";
import React from "react";

const DAYS_OF_WEEK = ['日', '一', '二', '三', '四', '五', '六'];
const DAYS_IN_WEEK = 7;
const DEFAULT_CAL_DAYS = 42;

function DayCalendar (selectedValue, onSelected) {
  const string = HandleDateString(selectedValue);
  const firstDay = new Date(string.year, string.month - 1);
  const days = new Date(string.year, string.month, 0).getDate();
  const lastMonthDays = new Date(string.year, string.month - 1, 0).getDate();
  const [active, setActive] = React.useState(selectedValue);
  const rows = [];
  let cells = [];
  let count = 0;
  let totalDays = 0;

  const handleClick = (value, onSelected) => {
    onSelected(value, "day");
    setActive(value);
  }

  // Weekday
  rows.push(<tr key="weekDay">
              {DAYS_OF_WEEK.map((dayName) => <td key={dayName} className="weekDay">{dayName}</td>)}
            </tr>);

  // Previous month days
  for(let i = 0; i < firstDay.getDay(); i++) {
    cells.unshift(<td key={`previous-${i}`}>
                <button key={lastMonthDays - i} disabled="disabled">{lastMonthDays - i}</button>
              </td>)
    count++;
    totalDays++;
  }

  // Current month days
  let dateString;
  for(let i = 1; i <= days; i++) {
    dateString = ('0' + i).slice(-2);
    const value = `${string.year}/${string.month}/${dateString}`;
    cells.push(<td key={dateString}>
                  <button className={active === value ? "active" : ""} key={value} value={value}
                          onClick={(e) => handleClick(e.target.value, onSelected)}>
                    {dateString}
                  </button>
               </td>);
    count++;
    totalDays++;

    if (count % DAYS_IN_WEEK === 0) {
      rows.push(<tr key={`tr-${i}`}>{cells}</tr>)
      cells = [];
      count = 0;
    }
  }

  // Next month days
  let i = 1;
  while (totalDays < DEFAULT_CAL_DAYS) {
    dateString = ('0' + i).slice(-2);
    cells.push(<td key={`next-${i}`}>
                <button key={dateString} disabled="disabled">{dateString}</button>
              </td>)
    count++;
    if (count % DAYS_IN_WEEK === 0) {
      rows.push(<tr key={`tr-next-${i}`}>{cells}</tr>)
      cells = [];
      count = 0;
    }

    i++;
    totalDays++;
  }

  return (
    <table className="day">
      <tbody key="body">{rows}</tbody>
    </table>
  )
}
  
export default DayCalendar;