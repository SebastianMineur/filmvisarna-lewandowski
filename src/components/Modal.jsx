import style from "../css/Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import Entry from "./Entry";

const Modal = ({ children, onClose }) => {
  const handleClick = (e) => {
    if (e.target.id !== "modalChild") {
      onClose();
    }
  };

  return (
    <div className={style.modal} onClick={handleClick}>
      <div className={style.modalContainer}>
        <div className={style.close}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <div id="modalChild">
          {children}
          {/* <Entry /> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
