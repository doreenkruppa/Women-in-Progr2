import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

import PioneersList from "./views/Pioneers/PioneersList";

import GroupsList from "./views/Groups/GroupsList";
import Home from "./views/Home";
import GroupsContextProvider from "./context/GroupsContext";
import PioneersContextProvider from "./context/PioneersContext";
import Footer from "./components/Footer/Footer";
import EventsContextProvider from "./context/EventsContext";
import EventsListTest from "./views/Events/EventsListTest";
import ArticlesList from "./views/Articles/ArticlesList";

function App() {
  return (
    <>
      <div className="App">
        <PioneersContextProvider>
          <GroupsContextProvider>
            <EventsContextProvider>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/groups" element={<GroupsList />} />
                <Route path="/pioneers" element={<PioneersList />} />
                <Route path="/events" element={<EventsListTest />} />
                <Route path="/articles" element={<ArticlesList />} />
              </Routes>

              <Footer />
            </EventsContextProvider>
          </GroupsContextProvider>
        </PioneersContextProvider>
      </div>
    </>
  );
}

export default App;
