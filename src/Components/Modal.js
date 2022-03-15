import React from "react";
import styles from "../Components/Modal.module.css";
import Card from "./Card";

const Modal = (props) => {
  return (
    <>
      <div
        className={styles.backdrop}
        onClick={props.removeModalHandler || props.onRemoveInstructionsModal}
      ></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p className={styles.message}>{props.message}</p>
        </div>
        <footer>
          <button
            className={styles.button}
            onClick={
              props.removeModalHandler || props.onRemoveInstructionsModal
            }
          >
            Okay
          </button>
        </footer>
      </Card>
    </>
  );
};

export default Modal;
