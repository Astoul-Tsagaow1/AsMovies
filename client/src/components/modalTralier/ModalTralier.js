import React from "react";
import Modal from "react-modal";

Modal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, 0.75)";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "82%",
    background: "black"
  }
};
export default function ModalTralier(props) {
  return (
    <div>
      {props.Showtrailer === undefined ? (
        <Modal
          ariaHideApp={false}
          isOpen={props.isOpen}
          style={customStyles}
          onRequestClose={props.onRequestClose}
        >
          <div class="spinner-border text-light " role="status">
            <span class="sr-only d-flex justify-content-center">Loading...</span>
          </div>
        </Modal>
      ) : (
        <Modal
          ariaHideApp={false}
          isOpen={props.isOpen}
          style={customStyles}
          onRequestClose={props.onRequestClose}
        >
          <iframe
            title="Youtube"
            src={`https://www.youtube.com/embed/${props.trailerkey}`}
            style={{ height: "650px", width: "100%", border: "none" }}
          ></iframe>
        </Modal>
      )}
    </div>
  );
}
