import SelectionPut from "./SelectionPut.jsx";
import { useState } from "react";

const BillInput = () => {
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  return (
    <div className="bill-content">
      <h3>How Much Your Bill :</h3>
      <input type="text" placeholder="Enter total bill price " />

      <SelectionPut percentage={percentage1} onSelect={setPercentage1}>
        How much Rating for service ?{/* children props in SelectionPut  */}
      </SelectionPut>

      <SelectionPut percentage={percentage2} onSelect={setPercentage2}>
        How muchyour friends Rating for service ?
      </SelectionPut>
    </div>
  );
};

export default BillInput;
