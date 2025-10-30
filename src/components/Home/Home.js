"use client"; // ⬅️ add this line first!

import Banner from "./Banner/Banner";
import ContactSection from "./Contact/Contact";
import Services from "./services/Sevices";
import AboutUs from "../about";
import JoinNetwork from "./JoinNetwork/JoinNetwork";
import LanguageWidget from "../LanguageSwitcher";

function HomeMain() {
  return (
    <div>
      <Banner />
      <Services />
      <JoinNetwork />

      <AboutUs />
      <ContactSection />
    </div>
  );
}

export default HomeMain;
