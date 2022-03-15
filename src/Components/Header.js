import { useState } from "react";
import styles from "../Components/Header.module.css";
import Modal from "./Modal";

const Header = (props) => {
  const [modal, setModal] = useState();

  const showInsturctionsModal = () => {
    setModal({
      title: "INSTRUCTIONS",
      message:
        "This is the application that helps you to track available space in your trailer. The maximum number of pallets per trailer is 33. So, if you want to add pallet in your trailer you need to click add button, else if you want to remove there is remove all pallets button. Also, for removing only single pallet there is x button on every added pallet. Enjoy your space management app! ",
    });
  };
  const removeInstructionsModal = () => {
    setModal(null);
  };
  return (
    <>
      {modal && (
        <Modal
          title={modal.title}
          message={modal.message}
          onRemoveInstructionsModal={removeInstructionsModal}
        />
      )}
      <header className={styles.header}>
        <div className={styles.title}>TRAILERS SPACE MANAGEMENT</div>
        <ul>
          <li onClick={showInsturctionsModal}>Instructions</li>
          <li>Login</li>
        </ul>
      </header>
    </>
  );
};

export default Header;
