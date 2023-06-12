import React, { useContext } from "react";
import { PioneersContext } from "../../context/PioneersContext";

export default function PioneersForm() {
  const { pioneers, setPioneers } = useContext(PioneersContext);
  return (
    <div className="pioneers-form">
      <h3>Add another Women Pioneer here:</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (pioneers.some((pioneer) => pioneer.name === e.target.name.value))
            return pioneers;
          else
            setPioneers([
              ...pioneers,
              {
                name: e.target.name.value,
                vita: e.target.vita.value,
                furtherInfo: e.target.furtherInfo.value,
                img: e.target.image.value,
              },
            ]);
        }}
      >
        <p>Name of the Women Pioneer:</p>
        <input type={"text"} name="name" />
        <p>Some Infos about her:</p>
        <input type={"text"} name="vita" />
        <p>Link to further informations:</p>
        <input type={"url"} name="furtherInfo" />
        <p>copy an image adress from a picture of her inside here:</p>
        <input type={"text"} name="image" />
        <br></br>
        <button>add</button>
      </form>
    </div>
  );
}
