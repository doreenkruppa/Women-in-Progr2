import "./App.css";
import { Routes, Route } from "react-router-dom";
import PioneersContextProvider from "./context/PioneersContext";
import GroupsContextProvider from "./context/GroupsContext";
import Header from "./components/Header/Header";
import PioneersList from "./views/Pioneers/PioneersList";
import GroupsList from "./views/Groups/GroupsList";
import Home from "./views/Home";
import Footer from "./components/Footer/Footer";
import EventsListTest from "./views/Events/EventsListTest";
import ArticlesList from "./views/Articles/ArticlesList";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  return (
    <>
      <div className="App">
        <PioneersContextProvider>
          <GroupsContextProvider>
            <Header />
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/groups" element={<GroupsList />} />
              <Route path="/pioneers" element={<PioneersList />} />
              <Route path="/events" element={<EventsListTest />} />
              <Route path="/articles" element={<ArticlesList />} />
            </Routes>

            <Footer />
          </GroupsContextProvider>
        </PioneersContextProvider>
      </div>
    </>
  );
}

export default App;
