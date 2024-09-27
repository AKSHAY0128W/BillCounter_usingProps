// eslint-disable-next-line react/prop-types
const BillPrice = ({ bill, totalTip }) => {
  return (
    <div className="bill-price">
      <h2>
        Your Total Tip is :{" "}
        <span>
          {" "}
          {bill} and your tip is {totalTip} {}
        </span>
      </h2>
    </div>
  );
};

export default BillPrice;
