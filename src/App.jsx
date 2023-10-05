import { useEffect } from "react";

import { CV } from "./components/CV";
import { Rayan } from "./sections/Rayan";
import { Services } from "./sections/Services";
import { Price } from "./sections/Price";
import { Recommendations } from "./sections/Recommendations";
import { Education } from "./sections/Education";
import { WorkHistory } from "./sections/WorkHistory";
import { Portfolio } from "./sections/Portfolio";
import { Blog } from "./sections/Blog";
import { Map } from "./sections/Map";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";

function App() {
  useEffect(() => {}, []);
  return (
    <>
      <div className="body">
        <CV />
        <div className="container">
          <Rayan />
          <Services />
          <Price />
          <Recommendations />
          <Education />
          <WorkHistory />
          <Portfolio />
          <Blog />
          <Map />
        </div>
        <NavBar />
      </div>

      <Footer />
    </>
  );
}

export default App;