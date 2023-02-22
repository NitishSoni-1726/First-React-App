import React, { useState } from "react";

export default function TextForm(props) {
  function convertToUc(event) {
    event.preventDefault();
    setText(text.toUpperCase());
  }
  function convertToLc(event) {
    event.preventDefault();
    setText(text.toLowerCase());
  }
  function clearText(event) {
    event.preventDefault();
    setText("");
  }
  function handleOnChange(event) {
    setText(event.target.value);
  }
  const [text, setText] = useState("");
  return (
    <>
      <div className="container my-5">
        <form>
          <div className="mb-3">
            <label htmlFor="My-Text" className="form-label">
              Enter Your Text Below
            </label>
            <textarea
              className={`form-control text-${
                props.mode === "light" ? "dark" : "light"
              } bg-${props.mode} border border-${
                props.mode === "light" ? "dark" : "light"
              }`}
              value={text}
              onChange={handleOnChange}
              id="myBox"
              rows="8"
            />
          </div>
          <button
            className={`btn btn-${props.buttonMode} m-2`}
            onClick={convertToUc}
          >
            Upper Case
          </button>
          <button
            className={`btn btn-${props.buttonMode} m-2`}
            onClick={convertToLc}
          >
            Lower Case
          </button>
          <button
            className={`btn btn-${props.buttonMode} m-2`}
            onClick={clearText}
          >
            Clear Text
          </button>
        </form>
      </div>
      <div className="container my-5">
        <h2>Your Text Summary</h2>
        <p>
          Your Entered Text have {text.split(" ").length - 1} Words and{" "}
          {text.length} Characters
        </p>
        <h2>Text Preview</h2>
        <p>{text.length > 0 ? text : "Enter Something to Preview"}</p>
      </div>
    </>
  );
}
