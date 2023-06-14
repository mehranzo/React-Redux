import React from "react";
import NoImage from "../assets/image/no image.jpg";
import './style.css';
function serial(props) {
  const onClick = () => {
    props.onItemClick(props.serial);
  };

  return (
    <div className="card mb3 borderColor" style={{ maxWidth: "540px" }} onClick={onClick}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={props.serial.image ? props.serial.image.medium : NoImage}
            className="img-fluid rounded-start"
            alt="cover"
          />
        </div>
        <div className="col-md-8 ">
          <div className="card-body">
            <h5 className="card-title pointer">{props.serial.name}</h5>
            <p className="card-text">
              <small className="text-muted">
                {props.serial.genres.join(" , ")}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default serial;
