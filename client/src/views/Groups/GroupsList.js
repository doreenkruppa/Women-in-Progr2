import React, { useEffect, useState } from "react";
import axios from "axios";
import GroupsCard from "./GroupsCard";
import GroupsForm from "./GroupsForm";

export default function GroupsList() {
  const [groups, setGroups] = useState([]);
  const url = "http://localhost:4000/api/groups";
  const listGroups = async () => {
    const res = await axios.get(`${url}/list`);
    setGroups(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    listGroups();
  }, []);

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
            groups.map((item, i) => (
              <GroupsCard
                group={item}
                key={i}
                groups={groups}
                listGroups={listGroups}
                setGroups={setGroups}
              />
            ))}
        </div>
        <GroupsForm listGroups={listGroups} />
      </div>
      <div className="ankerlinks-container">
        <a className="ankerlinks" href="#group-list-top">
          back to the top
        </a>
      </div>
    </>
  );
}
