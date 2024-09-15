import Header from "./Header";
import GenerateBody from "./GenerateBody";
import Footer from "./Footer";

function Picker ({selectedValue, onSelected, viewStatus, showView, togglePickerView, resetPicker, handleSelected}) {
  if (showView) {
    return (
      <div className="Picker">
        <Header selectedValue={selectedValue} onSelected={onSelected} />
        <GenerateBody selectedValue={selectedValue} onSelected={onSelected} viewStatus={viewStatus} />
        <Footer togglePickerView={togglePickerView} resetPicker={resetPicker} handleSelected={handleSelected}/>
      </div>
    )
  }
}

export default Picker;