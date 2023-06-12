import React, { useState } from "react";
import axios from "axios";

export default function EventsForm({ listEvents }) {
  const [newEvent, setNewEvent] = useState({
    name: "",
    description: "",
    linkToWebsite: "",
  });

  //const url = "https://women-in-coding.onrender.com"
  const url = "http://localhost:4000/api/events";

  const addEvent = async (data) => {
    try {
      await axios.post(`${url}/create`, data);
    } catch (err) {
      return err;
    }
  };
  async function handleAddSubmit(e) {
    e.preventDefault();

    const res = await addEvent(newEvent);
    console.log("sending request...");
    setNewEvent({
      name: "",
      description: "",
      linkToWebsite: "",
    });
    await listEvents();
  }

  return (
    <div className="events-form-container">
      <div className=" form-adding-event">
        <form onSubmit={handleAddSubmit}>
          <span className="event-span">Add a Event:</span>
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
            value={newEvent?.name}
          />
          <input
            type="text"
            placeholder="descriptions of the event"
            onChange={(e) =>
              setNewEvent({ ...newEvent, description: e.target.value })
            }
            value={newEvent?.description}
          />
          <input
            type="link"
            placeholder="link to website of the event"
            onChange={(e) =>
              setNewEvent({ ...newEvent, linkToWebsite: e.target.value })
            }
            value={newEvent?.linkToWebsite}
          />
          <button>Add</button>
        </form>
      </div>
    </div>
  );
}
