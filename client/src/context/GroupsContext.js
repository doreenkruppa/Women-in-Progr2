import { useState, createContext, useEffect } from "react"; //
export const GroupsContext = createContext(); //

export const starterGroups = [
  {
    name: "The Feminist Principles of the Internet",
    description:
      "are a series of statements that offer a gender and sexual rights lens on critical internet-related rights. They were drafted at the first Imagine a Feminist Internet meeting that took place in Malaysia in April 2014. The meeting was organised by the Association for Progressive Communications (APC) and brought together 50 activists and advocates...",
    contact: "https://feministinternet.org/",
    img: "https://feministinternet.org/sites/default/files/2022-02/logo-emblem-text_1.png",
  },
  {
    name: "Feministische Digitalppolitik",
    description:
      "Feministische Digitalpolitik analysiert bestehende gesellschaftliche Machtverhältnisse kritisch und wirkt darauf hin, Gerechtigkeit herzustellen.",
    contact: "https://feministtechpolicy.org/",
    img: "https://feministtechpolicy.org/header_huf8873dda9a85eb0367a8e11423c3f73b_985213_2560x1440_fit_q75_h2_box.webp",
  },
  {
    name: "Heart of Code",
    description:
      "Ein Hackspace für programmierende und technikbegeisterte Frauen (trans und cis), trans* und nicht-binäre Personen",
    contact: "http://heartofcode.org/",
    img: "http://heartofcode.org/img/heartofcode42.jpg",
  },
];

const getStarterGroups = () => {
  const groups = localStorage.getItem("groups");
  return groups ? JSON.parse(groups) : starterGroups;
};
export default function GroupsContextProvider({ children }) {
  const [groups, setGroups] = useState(() => getStarterGroups());
  useEffect(() => {
    localStorage.setItem("groups", JSON.stringify(groups));
  }, [groups]);

  return (
    <GroupsContext.Provider value={{ groups, setGroups }}>
      {children}
    </GroupsContext.Provider>
  );
}
