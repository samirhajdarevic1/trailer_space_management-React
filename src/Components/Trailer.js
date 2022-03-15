import { useState } from "react";
import Buttons from "./Buttons";
import Modal from "./Modal";
import ProcentageHandler from "./ProcentageHandler";

const array = [];

const Trailer = () => {
  const [item, setItem] = useState(array);
  const [error, setError] = useState();

  const removeHandler = (id) => {
    const updatedArray = item.filter((number) => number !== id);
    setItem(updatedArray);
  };

  const addHandler = () => {
    const updatedArray = item.concat([Math.random()]);
    if (updatedArray.length > 33) {
      setError({
        title: "En Error occured!",
        message: "You reached the maximum number of pallets per trailer!",
      });
      throw new Error("Maximum number of pallets");
    }
    setItem(updatedArray);
  };
  const removeAllPallets = () => {
    setItem([]);
  };

  const removeModal = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          removeModalHandler={removeModal}
        />
      )}
      <Buttons addButton={addHandler} removeAllButton={removeAllPallets} />
      <ul className="frame">
        {item.map((number) => {
          return (
            <li key={Math.random()} className="Item">
              <button onClick={() => removeHandler(number)}>X</button>
            </li>
          );
        })}
      </ul>
      <ProcentageHandler items={item.length} />
    </>
  );
};
export default Trailer;
