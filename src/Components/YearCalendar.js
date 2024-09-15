import HandleDateString from "./HandleDateString";
import React from "react";

const YEAR_RANGE = 10;
const YEAR_ROW_COUNT = 4;
const CUR_YEAR = new Date().getFullYear();

function YearCalendar (selectedValue, onSelected) {
  const date = HandleDateString(selectedValue);
  let years = CUR_YEAR - YEAR_RANGE;
  let rows = [];
  let cells = [];
  let cellCount = 0;
  let value = "";
  while (years < CUR_YEAR + YEAR_RANGE) {
    value = `${years}/${date.month}/${date.day}`
    cells.push(<td key={`td-${years}`}>
                  <button className={selectedValue === value ? "active" : undefined}
                         key={years}
                         value={value}
                         onClick={(e) => onSelected(e.target.value, "day")}>
                    {years}
                  </button>
              </td>)
    if (cellCount % YEAR_ROW_COUNT === 3) {
      rows.push(<tr key={cellCount}>{cells}</tr>);
      cells = [];
    }
    cellCount++;
    years++;
  }

  return (
    <table className="year">
      <tbody key="body">{rows}</tbody>
    </table>
  )
}

export default YearCalendar;