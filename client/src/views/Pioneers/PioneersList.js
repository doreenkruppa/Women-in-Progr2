import React, { useEffect, useState } from "react";
import axios from "axios";
import PioneersCard from "./PioneersCard";
import PioneersForm from "./PioneersForm";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function PioneersList() {
  const [pioneers, setPioneers] = useState([]);
  const url = "http://localhost:4000/api/pioneers";

  const listPioneers = async () => {
    const res = await axios.get(`${url}/list`);
    setPioneers(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    listPioneers();
  }, []);
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
            pioneers.map((pioneer, i) => (
              <PioneersCard
                pioneer={pioneer}
                pioneers={pioneers}
                listPioneers={listPioneers}
                setPioneers={setPioneers}
                key={i}
              />
            ))}
        </div>
        <PioneersForm listPioneers={listPioneers} />
      </div>
      <div className="ankerlinks-container">
        <a className="ankerlinks" href="#pioneers-list-top">
          back to the top
        </a>
      </div>
    </>
  );
}
