import styles from "../Components/Buttons.module.css";
const Buttons = (props) => {
  return (
    <div className={styles.buttons}>
      <button onClick={props.addButton}>Add pallet</button>
      <button onClick={props.removeAllButton}>Remove all pallets</button>
    </div>
  );
};
export default Buttons;
