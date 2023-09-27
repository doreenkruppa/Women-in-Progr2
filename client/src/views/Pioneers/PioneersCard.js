import React from "react";
import axios from "../../axios-index";

export default function PioneersCard({ pioneer, listPioneers }) {
  const deletePioneer = async () => {
    console.log("deleting...");
    const res = await axios.delete(`/api/pioneers/delete/${pioneer._id}`);
    await listPioneers();
  };
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
      <img
        style={{ width: "350px" }}
        src={pioneer.imageadresse}
        alt={pioneer.name}
      />

      <div className="pioneers-cards-text">
        <h1>{pioneer.name}</h1>
        <br />
        <span style={{ fontSize: "15px" }}>
          <b> Vita:</b> {pioneer.description}
        </span>
        <div style={{ fontSize: "15px" }}>
          <b>for further informations look here:</b>
          <a href={pioneer.linkToWebsite}>{pioneer.linkToWebsite}</a>
        </div>
      </div>
      <button onClick={deletePioneer}>Delete</button>
    </div>
  );
}
