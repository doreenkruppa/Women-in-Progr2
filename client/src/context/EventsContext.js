import { useState, createContext, useEffect } from "react";
import axios from "../axios-index";
export const EventsContext = createContext();

export default function EventsContextProvider({ children }) {
  const [events, setEvents] = useState([]);
  //const url = "http://localhost:4000/api/groups";

  const listEvents = async () => {
    const res = await axios.get(`/api/events/list`);
    setEvents(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    listEvents();
  }, []);

  const addEvent = async (data) => {
    try {
      if (events.some((event) => event.name === data.name))
        return alert("the name already exists");

      await axios.post(`/api/events/create`, data);
    } catch (err) {
      return err;
    }
  };
  return (
    <EventsContext.Provider value={{ events, setEvents, addEvent, listEvents }}>
      {children}
    </EventsContext.Provider>
  );
}
