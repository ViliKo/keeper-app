import React from "react";

function Notes(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.title} {props.note}</li>
    </div>
  );
}

export default Notes;
