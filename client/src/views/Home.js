import React from "react";
import FetchingImageHome from "../components/FetchingData/FetchingImageHome";
import Sidebar from "../components/Sidebar/Sidebar";
export default function Home() {
  return (
    <>
      <div className="home-container">
        <Sidebar />
        <FetchingImageHome />
        <div className="welcome-text">
          <p>
            WELCOME! here you will find some Informations about women/flinta*
            people in coding and feminist Programming!
          </p>

          <ul>
            <li>
              "activist groups & networks" shows you a list of feminist groups
              and networks working on social issues of digitalisation such as
              accessibility, active participation, sustainability and equity"
            </li>
            <li>
              "pioneers" shows you a list of Women Pioneers in Computer Science
              and Programming
            </li>
            <li>
              "events" show you a list of events on topics of feminist
              perspectives on/in Programming for your widening your perspective
              and also networking with other interested people
            </li>
          </ul>
          <p>
            Best of all: The idea is that this will be a collection where we all
            together can add new informations, so this will grow for more
            visibility! For that every list has a form somewhere where you can
            post your own feminist group, favorite pioneer or event! Please do
            so!
          </p>
        </div>
      </div>
    </>
  );
}
