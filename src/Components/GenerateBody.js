import GenerateMonths from './MonthCalendar';
import GenerateYears from './YearCalendar';
import GenerateDays from './DayCalendar';

function GenerateBody ({selectedValue, onSelected, viewStatus}) {
  if (viewStatus === 'year') {
    return GenerateYears(selectedValue, onSelected);
  } else if (viewStatus === 'month') {
    return GenerateMonths(selectedValue, onSelected);
  } else if (viewStatus === 'day') {
    return GenerateDays(selectedValue, onSelected);
  }
}

export default GenerateBody;