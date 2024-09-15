import React from "react";

function Result ({selectedValue, showResult, setView}) {
  return(
    <div className="Result">
      <input name="result" className="resultInput" value={showResult ? selectedValue : ''} onClick={() => setView('day')} readOnly></input>
    </div>
  )
}

export default Result;