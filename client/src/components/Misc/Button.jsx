import React from "react";

export default function Button(props) {
  return (
    <button
      type={props.type}
      className={props.className}
      onClick={props.onClick}
    >
      {props.buttonDescription}
    </button>
  );
}
