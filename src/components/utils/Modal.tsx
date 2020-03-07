import React from "react";

interface Props {
  onConfirmModal?: any;
  children: any;
  onClose: any;
  loading?: boolean;
  title: string;
  disabled: boolean;
}

const Modal: React.FC<Props> = ({ children, onClose, title, disabled }) => {
  return (
    <div className="modal" id="modal">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title title is-marginless">{title}</p>
          <button
            className="delete"
            aria-label="close"
            onClick={onClose}
          ></button>
        </header>
        <section className="modal-card-body">{children}</section>
        <footer className="modal-card-foot">
          <button
            type="submit"
            className="button is-success"
            disabled={disabled}
          >
            Save
          </button>
          <button className="button" onClick={onClose} disabled={disabled}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default React.memo(Modal);
