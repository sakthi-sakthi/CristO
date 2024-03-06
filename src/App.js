import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import AboutUs from "./Pages/AboutUs";
import SupportCenter from "./Pages/SupportCenter";
import MobileApp from "./Pages/MobileApp";
import Security from "./Pages/Security";
import ContactUs from "./Pages/ContactUs";
import MainLayout from "./layout";
import OurTeam from "./Pages/OurTeam";
import DataTransfer from "./Pages/DataTransfer";
import AboutCristo from "./Pages/AboutCristo";
import VissionMission from "./Pages/VissionMission";
import CoreValues from "./Pages/CoreValues";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<MainLayout />}>
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="supportcenter" element={<SupportCenter />} />
            <Route path="mobileapp" element={<MobileApp />} />
            <Route path="security" element={<Security />} />
            <Route path="team" element={<OurTeam />} />
            <Route path="datatransfer" element={<DataTransfer />} />
            <Route path="aboutcristo" element={<AboutCristo />} />
            <Route path="vissmiss" element={<VissionMission />} />
            <Route path="corevalue" element={<CoreValues />} />
            <Route path="contactus" element={<ContactUs />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
