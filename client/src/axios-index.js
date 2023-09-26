import axios from "axios";

const url = "https://women-in-progr2.vercel.app/";

export default axios.create({
  baseURL: url,
  headers: {
    "Content-type": "application/json",
  },
});
