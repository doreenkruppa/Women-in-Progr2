import React, { useContext } from "react";
import { PioneersContext } from "../../context/PioneersContext";
import PioneersCard from "./PioneersCard";
import PioneersForm from "./PioneersForm";

export default function PioneersList() {
  const { pioneers } = useContext(PioneersContext);
  return (
    <>
      <h1 id="group-list-top">
        {" "}
        Women Pioneers in Programming & Computer Science:
      </h1>
      <div className="pioneers-list-Container">
        <div>
          {pioneers &&
            pioneers.map((pioneer, i) => (
              <PioneersCard pioneer={pioneer} key={i} />
            ))}
        </div>
        <PioneersForm />
      </div>
      <div className="ankerlinks-container">
        <a className="ankerlinks" href="#pioneers-list-top">
          back to the top
        </a>
      </div>
    </>
  );
}
