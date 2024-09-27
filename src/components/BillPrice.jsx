// eslint-disable-next-line react/prop-types
const BillPrice = ({ bill, totalTip }) => {
  return (
    <div className="bill-price">
      <h2>
        Your Normal Price is :{" "}
        <span>
          {" "}
          {bill} and your Discount is {totalTip} {}
        </span>
      </h2>
    </div>
  );
};

export default BillPrice;
