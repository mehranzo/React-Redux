import React from "react";
import "./spinner.css";
import "bootstrap/dist/css/bootstrap.min.css";

function spinner() {
  return (
    <div className="container">
    <div className=" fullscreen  ">
      <div class="spinner-grow text-primary mt-3  " role="status">
        <span class="  sr-only mx-50 container text-dark">L</span>
      </div>
      <div class="spinner-grow text-secondary" role="status">
        <span class="  sr-only mx-50 container text-dark">O</span>
      </div>
      <div class="spinner-grow text-success" role="status">
        <span class="  sr-only mx-50 container text-dark">A</span>
      </div>
      <div class="spinner-grow text-danger" role="status">
        <span class="  sr-only mx-50 container text-dark">D</span>
      </div>

      <div class="spinner-grow text-warning" role="status">
        <span class="  sr-only mx-50 container text-dark">I</span>
      </div>
      <div class="spinner-grow text-info" role="status">
        <span class="  sr-only mx-50 container text-dark">N</span>
      </div>
      <div class="spinner-grow text-primary " role="status">
        <span class="  sr-only mx-50 container text-dark">G</span>
      </div>
    </div>
    </div>
  );
}

export default spinner;
