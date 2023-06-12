import React, { useContext } from "react";
import { PioneersContext } from "../../context/PioneersContext";
import PioneersCard from "./PioneersCard";
import PioneersForm from "./PioneersForm";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function PioneersList() {
  const { pioneers } = useContext(PioneersContext);
  return (
    <>
      <h1 id="group-list-top">
        {" "}
        Women Pioneers in Programming & Computer Science:
      </h1>
      <div className="pioneers-list-Container">
        <Sidebar />
        <div>
          {pioneers &&
            pioneers.map((item, i) => <PioneersCard pioneer={item} key={i} />)}
        </div>
        <PioneersForm />
      </div>
      <div className="ankerlinks-container">
        <a className="ankerlinks" href="#group-list-top">
          back to the top
        </a>
      </div>
    </>
  );
}
