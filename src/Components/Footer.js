function Footer ({togglePickerView, resetPicker, handleSelected}) {
  return (
    <div className="pickerFooter">
      <button key="Cancel" onClick={() => togglePickerView(false)}>取消</button>&nbsp;
      <button key="Reset" onClick={() => resetPicker()}>清空</button>&nbsp;
      <button key="Confirm" onClick={() => handleSelected()}>確認</button>
    </div>
  )
}

export default Footer;