import React, { useContext } from "react";
import { GroupsContext } from "../../context/GroupsContext";
import GroupsCard from "./GroupsCard";
import GroupsForm from "./GroupsForm";

export default function GroupsList() {
  const { groups } = useContext(GroupsContext);
  return (
    <>
      <h1 id="group-list-top">
        {" "}
        activist groups and networks working on the topic of feminist
        programming:
      </h1>

      <div className="groups-list-Container">
        <div className="groups-cards-Container">
          {groups &&
            groups.map((item, i) => <GroupsCard group={item} key={i} />)}
        </div>
        <GroupsForm />
      </div>
      <div className="ankerlinks-container">
        <a className="ankerlinks" href="#group-list-top">
          back to the top
        </a>
      </div>
    </>
  );
}
