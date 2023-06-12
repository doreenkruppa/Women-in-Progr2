import React, { useContext } from "react";
import { GroupsContext } from "../../context/GroupsContext";

export default function GroupsForm() {
  const { groups, setGroups } = useContext(GroupsContext);
  return (
    <div className="group-form">
      <h3>
        Add a group or network which works on issues of feminist Coding here:
      </h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setGroups([
            ...groups,
            {
              name: e.target.name.value,
              description: e.target.description.value,
              contact: e.target.contact.value,
              img: e.target.image.value,
            },
          ]);
        }}
      >
        <p>Name of the group/ network:</p>
        <input type={"text"} name="name" />
        <p>Some Infos/ Discription:</p>
        <input type={"text"} name="description" />
        <p>Contact/ website-url:</p>
        <input type={"url"} name="contact" />
        <p>Copy an image adress from their website inside here:</p>
        <input type={"text"} name="image" />
        <br></br>
        <button>add</button>
      </form>
    </div>
  );
}
