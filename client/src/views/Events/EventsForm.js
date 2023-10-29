import React, { useState, useContext } from "react";
import { EventsContext } from "../../context/EventsContext";

export default function EventsForm() {
  const { listEvents, addEvent } = useContext(EventsContext);
  const [newEvent, setNewEvent] = useState({
    name: "",
    dateOfEvent: "",
    description: "",
    linkToWebsite: "",
  });

  //const url = "https://women-in-coding.onrender.com"
  //const url = "http://localhost:4000/api/events";

  async function handleAddSubmit(e) {
    e.preventDefault();

    const res = await addEvent(newEvent);
    console.log("sending request...");
    setNewEvent({
      name: "",
      dateOfEvent: "",
      description: "",
      linkToWebsite: "",
    });
    await listEvents();
  }

  return (
    <div className="events-form">
      <h3>Add an Event:</h3>
      <form onSubmit={handleAddSubmit}>
        <p>Name of the Event:</p>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
          value={newEvent?.name}
        />
        <p>Date:</p>
        <input
          type="date"
          placeholder="date of event"
          onChange={(e) =>
            setNewEvent({ ...newEvent, dateOfEvent: e.target.value })
          }
          value={newEvent?.dateOfEvent}
        />
        <p>Some Infos about the Event:</p>
        <input
          type="text"
          placeholder="description of the event"
          onChange={(e) =>
            setNewEvent({ ...newEvent, description: e.target.value })
          }
          value={newEvent?.description}
        />
        <p>Link to further informations:</p>
        <input
          type="link"
          placeholder="link to website of the event"
          onChange={(e) =>
            setNewEvent({ ...newEvent, linkToWebsite: e.target.value })
          }
          value={newEvent?.linkToWebsite}
        />
        <br></br>
        <button>Add</button>
      </form>
    </div>
  );
}
