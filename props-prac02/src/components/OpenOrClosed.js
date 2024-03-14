import React from "react";

const OpenOrClosed = ({status}) => {
  return (
    <div className={status ? "res-open" : "res-closed"}>
      {status ? "Open Now" : "Closed"}
    </div>
  );
};

export default OpenOrClosed;
