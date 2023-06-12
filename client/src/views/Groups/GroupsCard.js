import React from "react";

export default function GroupsCard({ group }) {
  return (
    <div
      className="group-card"
      style={{
        // backgroundImage: `url(${group.img})`,
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",

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
      </div>
      <div className="image">
        <img
          style={{ width: "300px", height: "340px", borderRadius: "20px" }}
          src={group.img}
          alt="Logo of the group"
        />
      </div>
    </div>
  );
}
