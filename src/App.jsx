import "./App.css";
import BillInput from "./components/BillInput.jsx";
import BillPrice from "./components/BillPrice.jsx";
import ResetBtn from "./components/ResetBtn.jsx";

function App() {
  return (
    <div className="bill-list">
      <h1>my bill app</h1>
      <div className="bill">
        <h2>Your bill</h2>
        <BillInput />

        <BillPrice />

        <ResetBtn />
      </div>
    </div>
  );
}

export default App;
