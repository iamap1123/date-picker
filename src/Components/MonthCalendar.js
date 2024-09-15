import HandleDateString from "./HandleDateString";

const MONTHS_OF_YEAR = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
const MONTH_ROW_COUNT = 4;

function MonthCalendar (selectedValue, onSelected) {
    const date = HandleDateString(selectedValue);
    let rows = [];
    let cells = [];
    for (let i = 0; i < MONTHS_OF_YEAR.length; i++) {
      const value = `${date.year}/${MONTHS_OF_YEAR[i]}/${date.day}`;

      cells.push(
        <td key={`td-${MONTHS_OF_YEAR[i]}`}>
          <button className={selectedValue === value ? 'active' : undefined} key={MONTHS_OF_YEAR[i]} value={value} onClick={(e) => onSelected(e.target.value, 'day')}>{MONTHS_OF_YEAR[i]}</button>
        </td>
      );
      if (i % MONTH_ROW_COUNT === 3) {
        rows.push(<tr key={i}>{cells}</tr>);
        cells = [];
      }
    }
  
    return (
      <table className="month">
        <tbody key="body">{rows}</tbody>
      </table>
    )
}

export default MonthCalendar;