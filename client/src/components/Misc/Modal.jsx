import React from "react";
import { SERVER } from "../Import/componentsImport";

export default function Modal(props) {
  function closeModal() {
    document.getElementById(props.id).style.display = "none";
  }

  return (
    <div id={props.id} className={"modal " + props.class}>
      <form action={SERVER + props.action} method={props.method}>
        <div className="modal-content">
          <div className="modal-header">
            <h2>{props.title}</h2>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
          </div>
          <div className="modal-body">{props.body}</div>
          <div className="modal-footer">{props.footer}</div>
        </div>
      </form>
    </div>
  );
}
