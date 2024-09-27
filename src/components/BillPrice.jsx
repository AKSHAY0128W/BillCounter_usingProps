// eslint-disable-next-line react/prop-types
const BillPrice = ({ bill, totalTip }) => {
  const total = Math.round(totalTip);
  return (
    <div className="bill-price">
      <h2>
        Your Normal Price is : <span> {bill}</span>
        <br />
        Your Discounted price is : <span>{total}</span> {}
      </h2>
    </div>
  );
};

export default BillPrice;
