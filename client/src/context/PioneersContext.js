import { useState, createContext, useEffect } from "react";
import axios from "../axios-index";

export const PioneersContext = createContext();

export default function PioneersContextProvider({ children }) {
  const [pioneers, setPioneers] = useState([]);
  //const url = "http://localhost:4000/api/pioneers";

  const listPioneers = async () => {
    const res = await axios.get(`/api/pioneers/list`);
    setPioneers(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    listPioneers();
  }, []);

  const addPioneer = async (data) => {
    try {
      if (pioneers.some((pioneer) => pioneer.name === data.name))
        return alert("the name exists");

      await axios.post(`/api/pioneers/create`, data);
    } catch (err) {
      return err;
    }
  };
  return (
    <PioneersContext.Provider
      value={{ pioneers, setPioneers, listPioneers, addPioneer }}
    >
      {children}
    </PioneersContext.Provider>
  );
}
