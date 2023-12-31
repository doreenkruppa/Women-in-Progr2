import React, { useContext } from "react";
import "../../App.css";
import { EventsContext } from "../../context/EventsContext";
//import axios from "../../axios-index";
import EventsForm from "./EventsForm";
import EventsCard from "./EventsCard";

export default function EventsList() {
  const { events } = useContext(EventsContext);

  /**const url = "http://localhost:4000/api/events";

  const removeHandler = (index) => {
    const removedEvent = events.filter((event, i) => i === index);
    console.log(removedEvent);
    setDeletedEvent(removedEvent);
    const updatedEvents = events.filter((event, i) => i !== index);
    console.log(updatedEvents);
    setEvents(updatedEvents);
  };*/

  return (
    <div>
      <h1 id="events-list-top">
        {" "}
        upcoming events on the topics of feminism in programming:
      </h1>
      <div className="events-list-Container">
        {events &&
          events.map((event, i) => (
            <EventsCard events={events} event={event} key={i} />
          ))}
      </div>
      <EventsForm />
      <div className="ankerlinks-container">
        <a className="ankerlinks" href="#events-list-top">
          back to the top
        </a>
      </div>
    </div>
  );
}
