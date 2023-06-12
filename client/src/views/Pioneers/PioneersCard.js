import React from "react";

export default function PioneersCard({ pioneer }) {
  return (
    <div
      className="pioneer-card"
      style={{
        border: "1px solid black",
        padding: "10px",
        width: "60vw",
        height: "370px",
        borderRadius: "20px",
        margin: "20px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <img style={{ width: "350px" }} src={pioneer.img} alt={pioneer.name} />

      <div className="pioneers-cards-text">
        <h1>{pioneer.name}</h1>
        <br />
        <span style={{ fontSize: "15px" }}>
          <b> Vita:</b> {pioneer.vita}
        </span>
        <div style={{ fontSize: "15px" }}>
          <b>for further informations look here:</b>
          <a href={pioneer.furtherInfo}>{pioneer.furtherInfo}</a>
        </div>
      </div>
    </div>
  );
}
