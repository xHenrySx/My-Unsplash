import React from "react";
import { Modal, Button, SERVER } from "../Import/componentsImport.js";
import axios from "axios";

export default function Photo(props) {
  function showDeleteModal(e) {
    e.preventDefault();
    document.getElementById("delete-modal " + props.id).style.display = "block";
  }

  const [deleteModalBody, setModalBody] = React.useState(
    <div className="input-group">
      <label htmlFor={"password " + props.id}>Password</label>
      <input
        type="password"
        id={"password " + props.id}
        placeholder="Password"
        required
        autoComplete="true"
      />
    </div>
  );

  const onDelete = (e) => {
    // si todos los campos estan completos
    if (e.target.form.checkValidity()) {
      const password = document.getElementById("password " + props.id).value;
      try {
        axios
          .delete(SERVER + "/photos/" + props.id, {
            data: {
              password: password,
            },
          })
          .then((res) => {
            if (res.status === 204) {
              document.getElementById(props.id).remove();
              document.getElementById("delete-modal " + props.id).style.display =
                "none";
            }
          })
          .catch((err) => {
            if (err.response.status === 401) {
              setModalBody(
                <div className="input-group">
                  <label htmlFor={"password " + props.id}>Password</label>
                  <input type="password" name="password" id={"password " + props.id} placeholder="Password" required autoComplete="true" />
                  <p className="error-message">Incorrect password</p>
                </div>
              );
            } else {
              alert("Error: " + err);
            }
          });
      } catch (error) {
        alert("Error: " + error);
      }
    }
  };

  const deleteModalFooter = (
    <div className="modal-buttons">
      <button
        type="button"
        className="cancel-button"
        onClick={() => {
          document.getElementById("delete-modal " + props.id).style.display =
            "none";
        }}
      >
        Cancel
      </button>
      <button type="button" className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );

  return (
    <div id={props.id} className="grid-item">
      <Modal
        action="#"
        method="#"
        id={"delete-modal " + props.id}
        class="delete-modal"
        title="Are you sure?"
        body={deleteModalBody}
        footer={deleteModalFooter}
      />
      <Button
        type="button"
        className="photo-delete"
        onClick={showDeleteModal}
        buttonDescription="Delete"
      />
      <img src={props.url} alt={props.title} className="photo-image"></img>
      <p className="photo-description">{props.description}</p>
    </div>
  );
}
