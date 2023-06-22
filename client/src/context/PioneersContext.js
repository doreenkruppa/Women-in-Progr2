import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const PioneersContext = createContext();

export default function PioneersContextProvider({ children }) {
  const [pioneers, setPioneers] = useState([]);
  const url = "http://localhost:4000/api/pioneers";

  const listPioneers = async () => {
    const res = await axios.get(`${url}/list`);
    setPioneers(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    listPioneers();
  }, []);

  return (
    <PioneersContext.Provider value={{ pioneers, setPioneers, listPioneers }}>
      {children}
    </PioneersContext.Provider>
  );
}
