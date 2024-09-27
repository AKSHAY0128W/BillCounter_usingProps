// eslint-disable-next-line react/prop-types
const SelectionPut = ({ children, percentage, onSelect }) => {
  return (
    <>
      <h3>{children} </h3>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0"> Its Okay 😕</option>
        <option value="5"> Good 🙂</option>
        <option value="10"> Very Good 😃</option>
        <option value="20"> Excelente 🤩</option>
      </select>
    </>
  );
};

export default SelectionPut;
