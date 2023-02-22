import React from "react";
export default function Alert(props) {
  return (
    props.text && (
      <div
        className="alert alert-success alert-dismissible fade show"
        role="alert"
      >
        <strong>{props.text}</strong>
      </div>
    )
  );
}
