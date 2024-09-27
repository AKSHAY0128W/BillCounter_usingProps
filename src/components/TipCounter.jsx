import { useState } from "react";
import BillInput from "./BillInput.jsx";
import BillPrice from "./BillPrice.jsx";
import ResetBtn from "./ResetBtn.jsx";

const TipCounter = () => {
  const [bill, setBill] = useState("");

  return (
    <div className="bill-list">
      <h1>my bill app</h1>
      <div className="bill">
        <h2>Your bill</h2>
        <BillInput bill={bill} onPrice={setBill} tip={} />

        <BillPrice bill={bill} />
        <ResetBtn />
      </div>
    </div>
  );
};

export default TipCounter;
