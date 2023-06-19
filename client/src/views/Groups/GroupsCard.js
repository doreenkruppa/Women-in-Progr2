import React from "react";
import axios from "axios";

export default function GroupsCard({ group, listGroups }) {
  const deleteGroup = async () => {
    console.log("deleting");
    const url = "http://localhost:4000/api/groups";
    const res = await axios.delete(`${url}/delete/${group._id}`);
    await listGroups();
  };
  return (
    <div
      className="group-card"
      style={{
        //backgroundImage: `${group.img}`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        border: "1px solid black",
        padding: "10px",
        width: "40%",
        height: "340px",
        borderRadius: "20px",
        marginBottom: "20px",
      }}
    >
      <div className="text">
        <h2>{group.name}</h2>
        <div>
          <span style={{ fontSize: "15px" }}>
            <b> Description:</b> {group.description}
          </span>
        </div>
        <div style={{ fontSize: "15px", paddingTop: "10px" }}>
          <b>Contact:</b>
          <a href={group.contact}>{group.contact}</a>
        </div>

        <button onClick={deleteGroup}>Delete</button>
      </div>
    </div>
  );
}
