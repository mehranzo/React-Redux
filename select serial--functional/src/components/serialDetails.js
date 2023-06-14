import React from "react";
import DOMPurify from "dompurify";
import NoImage from "../assets/image/no image.jpg";
import Spinner from "./spinner/spinner";
import { useState, useEffect } from "react";

function SerialDetails(props) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    // const timer = setTimeout(() => setShowSpinner(true), 500);
    // return () => clearTimeout(timer);
  }, []);
  if (!props.selectedSerial) {
    return <div>select a serial </div>;
  }

  const CleanHtml = DOMPurify.sanitize(props.selectedSerial.summary );
  const handleImageLoaded = () => {
    setImageLoaded(true);
    setShowSpinner(false);
  };
  const handleImageError = () => {
    setShowSpinner(true);
  };

  return (
    <div className="card">
      {showSpinner && <Spinner />}
      <img
        src={
          props.selectedSerial.image
            ? props.selectedSerial.image.original
            : NoImage
        }
        className="card-img-top"
        alt="cover"
        onLoad={handleImageLoaded}
        onError={handleImageError}
        style={{ display: imageLoaded ? "block" : "none" }}
      />
      <div className="card-body">
        <h3 className="card-title">{props.selectedSerial.name}</h3>
        <p
          className="card-text"
          dangerouslySetInnerHTML={{ __html: CleanHtml }}
        ></p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Genre:{props.selectedSerial.genres.join(",")}
        </li>
        <li className="list-group-item">
          Language:{props.selectedSerial.language}
        </li>
        <li className="list-group-item">
          channel:
          {props.selectedSerial.webChannel
            ? props.selectedSerial.webChannel.name
            : "unknown"}
        </li>
      </ul>
    </div>
  );
}

export default SerialDetails;
