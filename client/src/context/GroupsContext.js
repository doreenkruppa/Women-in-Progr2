import { useState, createContext, useEffect } from "react";
import axios from "axios";
export const GroupsContext = createContext();

export default function GroupsContextProvider({ children }) {
  const [groups, setGroups] = useState([]);
  const url = "http://localhost:4000/api/groups";
  const listGroups = async () => {
    const res = await axios.get(`${url}/list`);
    setGroups(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    listGroups();
  }, []);

  return (
    <GroupsContext.Provider value={{ groups, setGroups }}>
      {children}
    </GroupsContext.Provider>
  );
}
