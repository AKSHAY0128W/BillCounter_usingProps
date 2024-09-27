import "./App.css";

function App() {
  return (
    <div className="bill-list">
      <h1>my bill app</h1>
      <div className="bill">
        <h2>Your bill</h2>
        <div className="bill-content">
          <h3>How Much Your Bill :</h3>
          <input type="text" placeholder="Enter total bill price " />

          <h3>How much Rating for service ? </h3>
          <select>
            <option value="0"> Its Okay 😕</option>
            <option value="5"> Good 🙂</option>
            <option value="10"> Very Good 😃</option>
            <option value="20"> Excelente 🤩</option>
          </select>

          <h3>How muchyour friends Rating for service ? </h3>
          <select>
            <option value="0"> Its Okay 😕</option>
            <option value="5"> Good 🙂</option>
            <option value="10"> Very Good 😃</option>
            <option value="20"> Excelente 😍</option>
          </select>
        </div>

        <div className="bill-price">
          <h2>
            Your Total is : <span>₨. 12000</span>{" "}
          </h2>
        </div>

        <div className="reset">
          <button>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
