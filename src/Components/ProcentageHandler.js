const ProcentageHandler = (props) => {
  return (
    <div className="space-procentage">
      <div className="procentage">
        {((props.items * 100) / 33).toFixed(2)} %
      </div>
      <div className="slider-container">
        <input
          type="range"
          min="1"
          max="33"
          id="myRange"
          defaultValue={props.items}
          className="slider"
        ></input>
      </div>
    </div>
  );
};

export default ProcentageHandler;
