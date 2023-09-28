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
    <div className="events-form-container">
      <div className=" form-adding-event">
        <form onSubmit={handleAddSubmit}>
          <span className="event-span">Add an Event:</span>
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
            value={newEvent?.name}
          />
          <input
            type="date"
            placeholder="date of event"
            onChange={(e) =>
              setNewEvent({ ...newEvent, dateOfEvent: e.target.value })
            }
            value={newEvent?.dateOfEvent}
          />
          <input
            type="text"
            placeholder="description of the event"
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
