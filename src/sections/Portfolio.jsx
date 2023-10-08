import Img1 from "../assets/img/1.png";
import Img2 from "../assets/img/2.png";
import Img3 from "../assets/img/3.png";
import Img4 from "../assets/img/4.png";
import Img5 from "../assets/img/5.png";
import Img6 from "../assets/img/6.png";
import Img7 from "../assets/img/7.png";
import Img8 from "../assets/img/8.png";
import Img9 from "../assets/img/9.png";
// import { Plus } from "../components/UI/Plus";

export const Portfolio = () => {
  function navToggle(buttonId) {
    const buttons = document.querySelectorAll(".portfolio__a");

    buttons.forEach((button) => {
      if (button.id === buttonId) {
        button.classList.add("a__active");
      } else {
        button.classList.remove("a__active");
      }
    });
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     orders: [],
  //     items: [
  //       {
  //         id:1,
  //         img: '../assets/img/2.png',
  //         category: 'ui',
  //       },
  //       {
  //         id:2,
  //         img: '../assets/img/3.png',
  //         category: 'ui',
  //       },
  //       {
  //         id:3,
  //         img: '../assets/img/4.png',
  //         category: 'ui',
  //       },
  //       {
  //         id:4,
  //         img: '../assets/img/5.png',
  //         category: 'ui',
  //       },
  //       {
  //         id:5,
  //         img: '../assets/img/6.png',
  //         category: 'ui',
  //       },
  //       {
  //         id:6,
  //         img: '../assets/img/7.png',
  //         category: 'ui',
  //       },
  //       {
  //         id:7,
  //         img: '../assets/img/8.png',
  //         category: 'ui',
  //       },
  //       {
  //         id:8,
  //         img: '../assets/img/9.png',
  //         category: 'ui',
  //       },
  //     ]
  //   }
  // }

  return (
    <>
      <section className="portfolio">
        <div className="portfolio__header">
          <h2 className="portfolio__title">Portfolio</h2>
          <p className="portfolio__desc">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </p>
        </div>
        <ul className="portfolio__ul">
          <li className="portfolio__li">
            <button
              onClick={() => navToggle("all")}
              id="all"
              className="portfolio__a a__active"
            >
              All categories
            </button>
          </li>
          <li className="portfolio__li">
            <button
              onClick={() => navToggle("ui")}
              id="ui"
              className="portfolio__a"
            >
              UI Design
            </button>
          </li>
          <li className="portfolio__li">
            <button
              onClick={() => navToggle("web")}
              id="web"
              className="portfolio__a"
            >
              Web Templates
            </button>
          </li>
          <li className="portfolio__li">
            <button
              onClick={() => navToggle("logo")}
              id="logo"
              className="portfolio__a"
            >
              Logo
            </button>
          </li>
          <li className="portfolio__li">
            <button
              onClick={() => navToggle("brand")}
              id="brand"
              className="portfolio__a"
            >
              Branding
            </button>
          </li>
        </ul>
        <div className="portfolio__container">
          <img width="310px" height="300" src={Img1} alt="img1" />
          <img width="310px" height="300" src={Img2} alt="img2" />
          <img width="310px" height="300" src={Img3} alt="img3" />
          <img width="310px" height="300" src={Img4} alt="img4" />
          <img width="310px" height="300" src={Img5} alt="img5" />
          <img width="310px" height="300" src={Img6} alt="img6" />
          <img width="310px" height="300" src={Img7} alt="img7" />
          <img width="310px" height="300" src={Img8} alt="img8" />
          <img width="310px" height="300" src={Img9} alt="img9" />
        </div>
      </section>
    </>
  );
};
