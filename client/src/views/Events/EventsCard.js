//import axios from "../../axios-index";

export default function EventsCard({ event }) {
  /**const deleteEvent = async () => {
    console.log("deleting");
    //const url = "http://localhost:4000/api/events";
    try {
      await axios.delete(`/api/events/delete/${event._id}`);
    } catch (err) {
      return err;
    }
    await listEvents();
  };
  async function handleDelete(e) {
    e.preventDefault();
    const res = await deleteEvent(deletedEvent);
    await listEvents();*/

  return (
    <div
      className="event-card"
      style={{
        border: "1px solid black",
        padding: "10px",
        width: "60vw",
        height: "370px",
        borderRadius: "20px",
        margin: "20px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div className="events-cards-text">
        <h2>{event.name}</h2>
        <div>
          <p>
            <b>Date of Event:</b> {event?.dateOfEvent?.slice(0, 10)}
          </p>
        </div>
        <div>
          <span style={{ fontSize: "15px" }}>
            <b> Description:</b> {event.description}
          </span>
        </div>
        <div style={{ fontSize: "15px", paddingTop: "10px" }}>
          <b>More Infos:</b>
          <a href={event.linkToWebsite}>{event.linkToWebsite}</a>
        </div>
        {
          //<button onClick={deleteEvent}>Delete</button>
        }
      </div>
    </div>
  );
}
