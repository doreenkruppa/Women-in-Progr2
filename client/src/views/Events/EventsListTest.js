import React, { useEffect, useState } from "react";
import axios from "axios";
import EventsForm from "./EventsForm";
import EventsCard from "./EventsCard";

export default function EventsListTest() {
  const [events, setEvents] = useState([]);
  const [deletedEvent, setDeletedEvent] = useState({});

  const url = "http://localhost:4000/api/events";

  const listEvents = async () => {
    const res = await axios.get(`${url}/`);
    setEvents(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    listEvents();
  }, []);

  const removeHandler = (index) => {
    const removedEvent = events.filter((event, i) => i === index);
    console.log(removedEvent);
    setDeletedEvent(removedEvent);
    const updatedEvents = events.filter((event, i) => i !== index);
    console.log(updatedEvents);
    setEvents(updatedEvents);
  };

  return (
    <div>
      <h1 id="events-list-top">
        {" "}
        upcoming events on the topics of feminism in programming:
      </h1>
      <div className="events-cards-Container">
        {events &&
          events.map((event, i) => (
            <EventsCard
              events={events}
              event={event}
              key={i}
              listEvents={listEvents}
              setEvents={setEvents}
              onDelete={() => removeHandler(i)}
              deletedEvent={deletedEvent}
            />
          ))}
      </div>
      <EventsForm listEvents={listEvents} />
      <div className="ankerlinks-container">
        <a className="ankerlinks" href="#events-list-top">
          back to the top
        </a>
      </div>
    </div>
  );
}
