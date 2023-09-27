import React, { useState, useContext } from "react";
import { PioneersContext } from "../../context/PioneersContext";

export default function PioneersForm() {
  const { listPioneers, addPioneer } = useContext(PioneersContext);
  const [newPioneer, setNewPioneer] = useState({
    name: "",
    description: "",
    linkToWebsite: "",
    imageadresse: "",
  });
  //const url = "http://localhost:4000/api/pioneers";

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await addPioneer(newPioneer);
    console.log("sending res");
    setNewPioneer({
      name: "",
      description: "",
      linkToWebsite: "",
      imageadresse: "",
    });
    await listPioneers();
  }

  return (
    <div className="pioneers-form">
      <h3>Add another Women Pioneer here:</h3>
      <form onSubmit={handleSubmit}>
        <p>Name of the Women Pioneer:</p>
        <input
          type="text"
          placeholder="name"
          onChange={(e) =>
            setNewPioneer({ ...newPioneer, name: e.target.value })
          }
          value={newPioneer?.name}
        />
        <p>Some Infos about her:</p>
        <input
          type="text"
          placeholder="Infos about her"
          onChange={(e) =>
            setNewPioneer({ ...newPioneer, description: e.target.value })
          }
          value={newPioneer?.description}
        />

        <p>Link to further informations:</p>
        <input
          type="url"
          placeholder="Link zu mehr Infos"
          onChange={(e) =>
            setNewPioneer({ ...newPioneer, linkToWebsite: e.target.value })
          }
          value={newPioneer?.linkToWebsite}
        />
        <p>copy an image adress from a picture of her inside here:</p>
        <input
          type="text"
          placeholder="imageadress"
          onChange={(e) =>
            setNewPioneer({ ...newPioneer, imageadresse: e.target.value })
          }
          value={newPioneer?.imageadresse}
        />
        <br></br>
        <button>add</button>
      </form>
    </div>
  );
}
