// eslint-disable-next-line react/prop-types
const BillInput = ({ bill, onPrice, per, onPer, per2, onPer2 }) => {
  return (
    <div className="bill-content">
      <h3>How Much Your Bill :</h3>
      <input
        type="text"
        placeholder="Enter total bill price "
        value={bill}
        onChange={(e) => onPrice(e.target.value)}
      />
      <h3> How much Rating for service ? </h3>
      <select value={per} onChange={(e) => Number(onPer(e.target.value))}>
        <option value={0}> Its Okay 😕</option>
        <option value={5}> Good 🙂</option>
        <option value={10}> Very Good 😃</option>
        <option value={15}> Excelente 😍</option>
      </select>

      <h3>How muchyour friends Rating for service ? </h3>
      <select value={per2} onChange={(e) => Number(onPer2(e.target.value))}>
        <option value={0}> Its Okay 😕</option>
        <option value={5}> Good 🙂</option>
        <option value={10}> Very Good 😃</option>
        <option value={15}> Excelente 😍</option>
      </select>
    </div>
  );
};

export default BillInput;
