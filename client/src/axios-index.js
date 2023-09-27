import axios from "axios";
//const url = `https://women-in-progr2.vercel.app/`;
//const url = "http:s://women-in-progr2.onrender.com";
const url = "http://localhost:4000";

export default axios.create({
  baseURL: url,
  headers: {
    "Content-type": "application/json",
  },
});
