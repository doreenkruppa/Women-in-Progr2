//import { useContext } from "react";
//import { PioneersContext } from "../../context/PioneersContext";
//import axios from "../../axios-index";

export default function PioneersCard({ pioneer }) {
  // const { pioneer, deletePioneer } = useContext(PioneersContext);

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
      {/**<button onClick={deletePioneer}>Delete</button>*/}
    </div>
  );
}
