import minimap from "../assets/icons/location.svg";
import email from "../assets/icons/mail.svg";
import phone from "../assets/icons/mobile.svg";
export const YourInfo = () => {
  return (
    <section className="contacts container">
      <div className="contacts__name">
        <h2>Leave us your info</h2>
        <h2>Contact information</h2>
      </div>
      <div className="info">
        <div className="forms">
          <span className="forms__name">Your Full Name ( Required)</span>
          <input type="text" name="name" placeholder="" />
          <span className="forms__name">Your Email ( Required)</span>
          <input type="text" name="mail" placeholder="" />
          <span className="forms__name">Subject</span>
          <input type="text" name="name" placeholder="" />
          <span className="forms__name">Your Message</span>
          <textarea type="text" name="Bio" placeholder=""></textarea>
        </div>
        <div className="information">
          <div className="information__item">
            <img src={minimap} alt="" />
            <div className="information__countrys">
              <div className="information__country">Country:</div>
              <div className="information__name">Bangladesh</div>
              <div className="information__Citys">
                <div className="information__City">City:</div>
                <div className="information__desc">Dhaka</div>
                <div className="information__Streets">
                  <div className="information__street">Streat:</div>
                  <div className="information__desc">35 vhatara, Badda</div>
                </div>
              </div>
            </div>
          </div>
          <div className="information__item">
            <img src={email} alt="" />
            <div className="information__Emails">
              <div className="information__Email">Email:</div>
              <div className="information__name">youremail@gmail.com</div>
              <div className="information__Skypes">
                <div className="information__Skype">Skype:</div>
                <div className="information__desc">@yourusername</div>
                <div className="information__Telegrams">
                  <div className="information__Telegram">Telegram</div>
                  <div className="information__desc">@yourusername</div>
                </div>
              </div>
            </div>
          </div>
          <div className="information__item">
            <img src={phone} alt="" />
            <div className="information__Supports">
              <div className="information__Support">Support services:</div>
              <div className="information__name">15369</div>
              <div className="information__Offices">
                <div className="information__Office">Office:</div>
                <div className="information__desc">+58 (021)356 587 235</div>
                <div className="information__Personals">
                  <div className="information__personal">Personal:</div>
                  <div className="information__desc">+58 (021)356 587 235</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
