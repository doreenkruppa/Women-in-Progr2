import React, { useState } from "react";
import axios from "axios";

export default function EventsCard({
  listEvents,
  deletedEvent,
  setEvents,
  event,
  events,
  key,
}) {
  const deleteEvent = async () => {
    console.log("deleting");
    const url = "http://localhost:4000/api/events";
    const res = await axios.delete(`${url}/delete/${event._id}`);
    await listEvents();
  };

  /**const 


  const deleteEvent = async (data) => {
    try {
      await axios.delete(`${url}/delete`, data);
    } catch (err) {
      return err;
    }
  };
  async function handleDelete(e) {
    e.preventDefault();

    const res = await deleteEvent(deletedEvent);
    await listEvents();
*/
  return (
    <div
      className="events-card"
      style={{
        border: "1px solid black",
        padding: "10px",
        width: "40%",
        height: "340px",
        borderRadius: "20px",
        marginBottom: "20px",
      }}
    >
      <div className="text">
        <h2>{event.name}</h2>
        <div>
          <span style={{ fontSize: "15px" }}>
            <b> Description:</b> {event.description}
          </span>
        </div>
        <div style={{ fontSize: "15px", paddingTop: "10px" }}>
          <b>More Infos:</b>
          <a href={event.linkToWebsite}>{event.linkToWebsite}</a>
        </div>
        <button onClick={deleteEvent}>Delete</button>
      </div>
    </div>
  );
}
