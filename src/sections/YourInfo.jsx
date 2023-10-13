import minimap from "../assets/icons/location.svg";
import email from "../assets/icons/mail.svg";
import phone from "../assets/icons/mobile.svg";
export const YourInfo = () => {
  return (
    <section
      className="contacts container"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      id="contacts"
    >
      <div className="contacts__form">
        <h2 className="contacts__title">Leave us your info</h2>
        <form className="forms">
          <span className="forms__name">Your Full Name ( Required)</span>
          <input
            className="forms__input"
            type="text"
            name="name"
            placeholder=""
          />
          <span className="forms__name">Your Email ( Required)</span>
          <input
            className="forms__input"
            type="text"
            name="mail"
            placeholder=""
          />
          <span className="forms__name">Subject</span>
          <input
            className="forms__input"
            type="text"
            name="name"
            placeholder=""
          />
          <span className="forms__name">Your Message</span>
          <textarea
            className="forms__textarea"
            type="text"
            name="Bio"
            placeholder=""
          ></textarea>
          <button className="forms__btn">send message</button>
        </form>
      </div>

      <div className="contacts__information">
        <h2 className="contacts__title">Contact information</h2>
        <div className="information__box">
          <div className="information__item">
            <img src={minimap} alt="" className="information__icon" />
            <div className="information__info">
              <div className="information__title">Country:</div>
              <div className="information__desc">Bangladesh</div>
            </div>
            <div className="information__info">
              <div className="information__title">City:</div>
              <div className="information__desc">Dhaka</div>
            </div>
            <div className="information__info">
              <div className="information__title">Streat:</div>
              <div className="information__desc">35 Vhatara, Badda</div>
            </div>
          </div>
          <div className="information__item">
            <img src={email} alt="" className="information__icon" />
            <div className="information__info">
              <div className="information__title">Email:</div>
              <div className="information__desc">youremail@gmail.com</div>
            </div>
            <div className="information__info">
              <div className="information__title">Skype:</div>
              <div className="information__desc">@yourusername</div>
            </div>
            <div className="information__info">
              <div className="information__title">Telegram:</div>
              <div className="information__desc">@yourusername</div>
            </div>
          </div>
          <div className="information__item">
            <img src={phone} alt="" className="information__icon" />
            <div className="information__info">
              <div className="information__title">Support services:</div>
              <div className="information__desc">15369</div>
            </div>
            <div className="information__info">
              <div className="information__title">Office:</div>
              <div className="information__desc">+58 (021)356 587 235</div>
            </div>
            <div className="information__info">
              <div className="information__title">Personal:</div>
              <div className="information__desc">+58 (021)356 587 235</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
