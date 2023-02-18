import React from "react";
import Button from "../../Misc/Button";
import Modal from "../../Misc/Modal";

export default function AddButton(props) {



  return (
    <Button
      buttonDescription="Add Photo"
      className="add-button"
      type="button"
      onClick={props.onClick}
    />
  );
}
