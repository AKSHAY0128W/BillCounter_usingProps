// eslint-disable-next-line react/prop-types
const ResetBtn = ({ onReset }) => {
  return (
    <div className="reset">
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default ResetBtn;
