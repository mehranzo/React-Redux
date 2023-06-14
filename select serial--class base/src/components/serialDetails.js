import React from "react";
import DOMPurify from "dompurify";
import NoImage from "../assets/image/no image.jpg";

function serialDetails(props) {
  if (!props.selectedSerial) {
    return <div>select a serial </div>;
  }

  const CleanHtml=DOMPurify.sanitize(props.selectedSerial.summary)
  return (
    <div className="card">
      <img
        src={
          props.selectedSerial.image ? props.selectedSerial.image.original : NoImage
        }
        className="card-img-top"
        alt="cover"
      />
      <div className="card-body">
        <h3 className="card-title">{props.selectedSerial.name}</h3>
        <p className="card-text" dangerouslySetInnerHTML={{__html:CleanHtml}}></p>
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

export default serialDetails;
