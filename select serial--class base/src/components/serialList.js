import React from "react";
import Serial from "./serial";


function serialList(props) {
  return (
    <div>
      {props.serials.map((serial) => (
        <Serial serial={serial.show} onItemClick={props.onItemClick} />
      ))}
    </div>
  );
}

export default serialList;
