import React, { useContext } from "react";
import { GroupsContext } from "../../context/GroupsContext";
import { PioneersContext } from "../../context/PioneersContext";
import SidebarCard from "./SidebarCard";

export default function Sidebar() {
  const { pioneers } = useContext(PioneersContext);
  const { groups } = useContext(GroupsContext);

  return (
    <div
      className="sidebar-container"
      style={{
        borderRight: "1px solid black",
        padding: "10px",
        width: "20%vw",
        height: "100vh",

        margin: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="groups-sidebar-Container">
        <p style={{ textAlign: "left", fontWeight: "bold" }}>
          all activist groups:
        </p>
        {groups &&
          groups.map((itemG, i) => (
            <SidebarCard groupName={itemG.name} keyG={i} />
          ))}
      </div>
      <div className="pioneers-sidebar-Container">
        <p style={{ textAlign: "left", fontWeight: "bold" }}>all pioneers:</p>
        {pioneers &&
          pioneers.map((itemP, i) => (
            <SidebarCard pioneerName={itemP.name} keyP={i} />
          ))}
      </div>
    </div>
  );
}
