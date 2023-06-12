import { useState, createContext, useEffect } from "react"; //
import axios from "axios";

export const EventsContext = createContext(); //

export default function EventsContextProvider({ children }) {
  const [events, setEvents] = useState([]);

  const url = "http://localhost:4000/api/events/";

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${url}/list/`);
      setEvents(res.data);
    })();
  }, []);

  const showAllEvents = async () => {
    const res = await axios.get(`${url}/list/`);
    setEvents(res.data);
  };

  return (
    <EventsContext.Provider
      value={{
        events,
        setEvents,
        showAllEvents,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
}
