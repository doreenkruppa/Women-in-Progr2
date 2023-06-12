import { useState, createContext, useEffect } from "react";

export const PioneersContext = createContext();

export const starterPioneers = [
  {
    name: "Ada Lovelace",
    vita: "(1815-1852),was a mathematician in Victorian Times,mainly known for her contributions to the mechanical general-purpose computer, the Analytical Engine created by Charles Babbage, Ada Lovelace was also the first person to realize that the Analytical Engine could be used for more than just calculations and so she wrote an algorithm to compute Bernoulli numbers using the Analytical Engine. This is the reason she is known as “The First Computer Programmer in the World”.   ",
    furtherInfo: "https://www.mpg.de/frauen-in-der-forschung/ada-lovelace",
    img: "https://images.computerhistory.org/babbage/5-7-1.jpg",
  },
  {
    name: "Kathleen Booth ",
    vita: "(Born 1922), wrote the first Assembly language in the world. And that is not enough, she also designed the assembler and auto code for the first computer system at Birkbeck College, the University of London ",
    furtherInfo: "https://www.computinghistory.org.uk/det/32489/Kathleen-Booth",
    img: "http://www.computinghistory.org.uk/userdata/images/large/31/28/product-83128.jpg",
  },
  {
    name: "Margaret Hamilton",
    vita: "(Born in 1936),was the director of the Software Engineering Division at MIT. She was responsible for creating the software(literally from scratch!!!) for the Apollo Guide Computer in the Apollo Space Program.She went on to create the Universal Systems Language based on her experience of writing software for the Apollo program and also founded a company for that, Hamilton Technologies, Inc.",
    furtherInfo: "https://solarsystem.nasa.gov/people/320/margaret-hamilton/",
    img: "https://solarsystem.nasa.gov/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaG8zIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--90dcd5cb460c44999d7e8be1d8a9c1537d93730f/Margaret_Hamilton.jpg?disposition=attachment",
  },
];

const getStarterPioneers = () => {
  const pioneers = localStorage.getItem("pioneers");
  return pioneers ? JSON.parse(pioneers) : starterPioneers;
};

export default function PioneersContextProvider({ children }) {
  const [pioneers, setPioneers] = useState(() => getStarterPioneers());
  useEffect(() => {
    localStorage.setItem("pioneers", JSON.stringify(pioneers));
  }, [pioneers]);

  return (
    <PioneersContext.Provider value={{ pioneers, setPioneers }}>
      {children}
    </PioneersContext.Provider>
  );
}
