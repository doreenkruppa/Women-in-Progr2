import { useState, createContext, useEffect } from "react";
import axios from "../axios-index";
export const GroupsContext = createContext();

export default function GroupsContextProvider({ children }) {
  const [groups, setGroups] = useState([]);
  //const url = "http://localhost:4000/api/groups";

  const listGroups = async () => {
    const res = await axios.get(`/api/groups/list`);
    setGroups(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    listGroups();
  }, []);

  const addGroup = async (data) => {
    try {
      if (groups.some((group) => group.name === data.name))
        return alert("the name already exists");

      await axios.post(`/api/groups/create`, data);
    } catch (err) {
      return err;
    }
  };
  return (
    <GroupsContext.Provider value={{ groups, setGroups, addGroup }}>
      {children}
    </GroupsContext.Provider>
  );
}
