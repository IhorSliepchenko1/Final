import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CV } from "./components/CV";
import { Rayan } from "./sections/Rayan";
import { Services } from "./sections/Services";
import { Price } from "./sections/Price";
import { Recommendations } from "./sections/Recommendations";
import { Education } from "./sections/Education";
import { WorkHistory } from "./sections/WorkHistory";
import { Portfolio } from "./sections/Portfolio";
import { Blog } from "./sections/Blog";
import { YourInfo } from "./sections/YourInfo";

import { Map } from "./sections/Map";
import { Logo } from "./sections/Logo";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="wrapper">
        <CV />
        <div className="content">
          <main className="main">
            <Rayan />
            <Services />
            <Price />
            <Recommendations />
            <Education />
            <WorkHistory />
            <Portfolio />
            <Blog />
            <YourInfo />
            <Map />
            <Logo />
          </main>
          <Footer />
        </div>
        <NavBar />
      </div>
    </>
  );
}

export default App;
