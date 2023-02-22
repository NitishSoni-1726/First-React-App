import React from "react";
export default function Footer(props) {
  return (
    <>
      <div>
        <div className={`card text-center bg-${props.mode}`}>
          <div className="card-body">
            <h5>Created By Nitish Soni Using React</h5>
            <a
              href="https://www.instagram.com/_2nitish6_"
              className="btn btn-dark mx-2"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://twitter.com/_2nitish6_"
              className="btn btn-dark mx-2"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              href="https://github.com/NitishSoni-1726"
              className="btn btn-dark mx-2"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/nitish-soni-ba0085206"
              className="btn btn-dark mx-2"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
