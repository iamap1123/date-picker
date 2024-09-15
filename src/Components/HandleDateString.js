function HandleDateString (selectedValue) {
  const year = selectedValue.slice(0, 4);
  const month = selectedValue.slice(5, 7);
  const day = selectedValue.slice(8, 10);

  return {year: year, month: month, day: day}
}

export default HandleDateString;