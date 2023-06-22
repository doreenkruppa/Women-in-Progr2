import React, { useState, useContext } from "react";
import { GroupsContext } from "../../context/GroupsContext";
import axios from "axios";

export default function GroupsForm() {
  const { groups, listGroups } = useContext(GroupsContext);
  const [newGroup, setNewGroup] = useState({
    name: "",
    description: "",
    contact: "",
    img: "",
  });
  const url = "http://localhost:4000/api/groups";
  const addGroup = async (data) => {
    try {
      if (groups.some((group) => group.name === data.name))
        return alert("the name exists");

      await axios.post(`${url}/create`, data);
    } catch (err) {
      return err;
    }
  };
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await addGroup(newGroup);
    console.log("sending rerequest");
    setNewGroup({
      name: "",
      description: "",
      contact: "",
      img: "",
    });
    await listGroups();
  }
  return (
    <div className="groups-form-container">
      <div className="group-form">
        <h3>
          Add a group or network which works on issues of feminist Coding here:
        </h3>
        <form onSubmit={handleSubmit}>
          <p>Name of the group/ network:</p>
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setNewGroup({ ...newGroup, name: e.target.value })}
            value={newGroup?.name}
          />
          <p>Some Infos/ Discription:</p>
          <input
            type={"text"}
            placeholder="description"
            onChange={(e) =>
              setNewGroup({ ...newGroup, description: e.target.value })
            }
            value={newGroup?.description}
          />
          <p>Contact/ website-url:</p>
          <input
            type={"url"}
            placeholder="contact"
            onChange={(e) =>
              setNewGroup({ ...newGroup, contact: e.target.value })
            }
            value={newGroup?.contact}
          />
          <p>Copy an image adress from their website inside here:</p>
          <input
            type="text"
            placeholder="image"
            onChange={(e) => setNewGroup({ ...newGroup, img: e.target.value })}
            value={newGroup?.img}
          />
          <br></br>
          <button>add</button>
        </form>
      </div>
    </div>
  );
}
