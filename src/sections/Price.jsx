import { Check } from "../components/UI/Check";
import { Cross } from "../components/UI/Cross";

export const Price = () => {
  return (
    <>
      <section className="price">
        <div className="price__header">
          <h2 className="price__title">Price plans</h2>
          <p className="price__desc">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </p>
        </div>
        <div className="price__container">
          <div className="price__item plan" data-aos="flip-up">
            <h3 className="plan__title">silver</h3>
            <div className="plan__prices">
              <h2 className="plan__subtitle">$0.00</h2>
              <span className="plan__hour">/hour</span>
            </div>
            <p className="plan__desc">
              For most businesses that want to optimize web queries
            </p>

            <ul className="plan__ul">
              <li className="plan__item">
                <Check />
                <p className="plan__service-on">UI Design</p>
              </li>
              <li className="plan__item">
                <Check />
                <p className="plan__service-on">web development</p>
              </li>
              <li className="plan__item">
                <Cross />
                <p className="plan__service">logo design</p>
              </li>
              <li className="plan__item">
                <Cross />
                <p className="plan__service">seo optimization</p>
              </li>
              <li className="plan__item">
                <Cross />
                <p className="plan__service">wordPress integration</p>
              </li>
              <li className="plan__item">
                <Cross />
                <p className="plan__service">5 Websites</p>
              </li>
              <li className="plan__item">
                <Cross />
                <p className="plan__service">unlimited user</p>
              </li>
              <li className="plan__item">
                <Cross />
                <p className="plan__service">20 gB bandwith</p>
              </li>
            </ul>
            <form className="plan__form">
              <button className="plan__btn">
                <a className="plan__a" href="/">
                  ORDER NOW
                </a>
              </button>
            </form>
          </div>
          <div className="price__item plan most" data-aos="flip-up">
            <div className="plan__header">
              <p className="plan__popular">most popular</p>
            </div>
            <h3 className="plan__title">gold</h3>
            <div className="plan__prices">
              <h2 className="plan__subtitle">$50.00</h2>
              <span className="plan__hour">/hour</span>
            </div>
            <p className="plan__desc">
              For most businesses that want to optimize web queries
            </p>

            <ul className="plan__ul">
              <li className="plan__item">
                <Check />
                <p className="plan__service-on">UI Design</p>
              </li>
              <li className="plan__item">
                <Check />
                <p className="plan__service-on">web development</p>
              </li>
              <li className="plan__item">
                <Check />
                <p className="plan__service-on">logo design</p>
              </li>
              <li className="plan__item">
                <Check />
                <p className="plan__service-on">seo optimization</p>
              </li>
              <li className="plan__item">
                <Cross />
                <p className="plan__service">wordPress integration</p>
              </li>
              <li className="plan__item">
                <Cross />
                <p className="plan__service">5 Websites</p>
              </li>
              <li className="plan__item">
                <Cross />
                <p className="plan__service">unlimited user</p>
              </li>
              <li className="plan__item">
                <Cross />
                <p className="plan__service">20 gB bandwith</p>
              </li>
            </ul>
            <form className="plan__form">
              <button className="plan__btn btn__active">
                <a className="plan__a" href="/">
                  ORDER NOW
                </a>
              </button>
            </form>
          </div>
          <div className="price__item plan" data-aos="flip-up">
            <h3 className="plan__title">dimond</h3>
            <div className="plan__prices">
              <h2 className="plan__subtitle">$80.00</h2>
              <span className="plan__hour">/hour</span>
            </div>
            <p className="plan__desc">
              For most businesses that want to optimize web queries
            </p>

            <ul className="plan__ul">
              <li className="plan__item">
                <Check />
                <p className="plan__service-on">UI Design</p>
              </li>
              <li className="plan__item">
                <Check />
                <p className="plan__service-on">web development</p>
              </li>
              <li className="plan__item">
                <Check />
                <p className="plan__service-on">logo design</p>
              </li>
              <li className="plan__item">
                <Check />
                <p className="plan__service-on">seo optimization</p>
              </li>
              <li className="plan__item">
                <Check />
                <p className="plan__service-on">wordPress integration</p>
              </li>
              <li className="plan__item">
                <Check />
                <p className="plan__service-on">5 Websites</p>
              </li>
              <li className="plan__item">
                <Check />
                <p className="plan__service-on">unlimited user</p>
              </li>
              <li className="plan__item">
                <Check />
                <p className="plan__service-on">20 gB bandwith</p>
              </li>
            </ul>
            <form className="plan__form">
              <button className="plan__btn">
                <a className="plan__a" href="/">
                  ORDER NOW
                </a>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
