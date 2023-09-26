import axios from "axios";
const url = `https://women-in-progr2.vercel.app/`;
//const url = "https://women-in-progr2.onrender.com";

export default axios.create({
  baseURL: url,
  headers: {
    "Content-type": "application/json",
  },
});
