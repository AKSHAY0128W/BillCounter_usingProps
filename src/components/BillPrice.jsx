// eslint-disable-next-line react/prop-types
const BillPrice = ({ bill, totalTip }) => {
  const total = Math.round(totalTip);
  return (
    <div className="bill-price">
      <h2>
        Your Normal Price is :{" "}
        <span>
          {" "}
          {bill} and your final price is {total} {}
        </span>
      </h2>
    </div>
  );
};

export default BillPrice;
