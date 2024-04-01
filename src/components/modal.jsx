import PropTypes from "prop-types";
import ReactModal from "react-modal";

export default function Modal({ isOpen, onRequestClose, onClick }) {
  return (
    <ReactModal
      isOpen={isOpen}
      ariaHideApp={false}
      onRequestClose={onRequestClose}
      className="modal"
    >
      <button onClick={onClick} className="modal__btn"></button>
      <p>Employee Created!</p>
    </ReactModal>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
