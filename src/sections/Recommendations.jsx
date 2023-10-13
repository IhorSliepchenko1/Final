import { Swiper, SwiperSlide } from "swiper/react";
import { Star } from "../components/UI/Star";
import James from "../assets/people/James-avatar.png";
import Tiana from "../assets/people/Tiana-avatar.png";
import Talan from "../assets/people/Talan-avatar.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export const Recommendations = () => {
  return (
    <>
      <section
        className="reccomendations container"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <h2 className="section-rec__title">Recommendations</h2>
        <p className="section-rec__desc">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            800: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="section-rec__item">
              <div className="section-rec__item-star">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <h5 className="section-rec__item-title">Great Quality!</h5>
              <p className="section-rec__item-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                nulla diam in ac dictum a urna viverra morbi. Morbi donec
                amet....
              </p>
              <div className="section-rec__item-about">
                <div className="section-rec__about-image">
                  <img className="section-rec__about-img" src={James} alt="" />
                </div>
                <div className="section-rec__about-info">
                  <h5 className="section-rec__info-name">James Gouse</h5>
                  <p className="section-rec__info-role">Graphic Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="section-rec__item">
              <div className="section-rec__item-star">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <h5 className="section-rec__item-title">Amazing work!</h5>
              <p className="section-rec__item-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                nulla diam in ac dictum a urna viverra morbi. Morbi donec
                amet....
              </p>
              <div className="section-rec__item-about">
                <div className="section-rec__about-image">
                  <img className="section-rec__about-img" src={Tiana} alt="" />
                </div>
                <div className="section-rec__about-info">
                  <h5 className="section-rec__info-name">Tiana Philips</h5>
                  <p className="section-rec__info-role">Photographer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="section-rec__item">
              <div className="section-rec__item-star">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <h5 className="section-rec__item-title">Great Quality!</h5>
              <p className="section-rec__item-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                nulla diam in ac dictum a urna viverra morbi. Morbi donec
                amet....
              </p>
              <div className="section-rec__item-about">
                <div className="section-rec__about-image">
                  <img className="section-rec__about-img" src={Talan} alt="" />
                </div>
                <div className="section-rec__about-info">
                  <h5 className="section-rec__info-name">Talan Westervelt</h5>
                  <p className="section-rec__info-role">Business man</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="section-rec__item">
              <div className="section-rec__item-star">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <h5 className="section-rec__item-title">Great Quality!</h5>
              <p className="section-rec__item-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                nulla diam in ac dictum a urna viverra morbi. Morbi donec
                amet....
              </p>
              <div className="section-rec__item-about">
                <div className="section-rec__about-image">
                  <img className="section-rec__about-img" src={James} alt="" />
                </div>
                <div className="section-rec__about-info">
                  <h5 className="section-rec__info-name">James Gouse</h5>
                  <p className="section-rec__info-role">Graphic Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="section-rec__item">
              <div className="section-rec__item-star">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <h5 className="section-rec__item-title">Amazing work!</h5>
              <p className="section-rec__item-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                nulla diam in ac dictum a urna viverra morbi. Morbi donec
                amet....
              </p>
              <div className="section-rec__item-about">
                <div className="section-rec__about-image">
                  <img className="section-rec__about-img" src={Tiana} alt="" />
                </div>
                <div className="section-rec__about-info">
                  <h5 className="section-rec__info-name">Tiana Philips</h5>
                  <p className="section-rec__info-role">Photographer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="section-rec__item">
              <div className="section-rec__item-star">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <h5 className="section-rec__item-title">Great Quality!</h5>
              <p className="section-rec__item-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                nulla diam in ac dictum a urna viverra morbi. Morbi donec
                amet....
              </p>
              <div className="section-rec__item-about">
                <div className="section-rec__about-image">
                  <img className="section-rec__about-img" src={Talan} alt="" />
                </div>
                <div className="section-rec__about-info">
                  <h5 className="section-rec__info-name">Talan Westervelt</h5>
                  <p className="section-rec__info-role">Business man</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="section-rec__item">
              <div className="section-rec__item-star">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <h5 className="section-rec__item-title">Great Quality!</h5>
              <p className="section-rec__item-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                nulla diam in ac dictum a urna viverra morbi. Morbi donec
                amet....
              </p>
              <div className="section-rec__item-about">
                <div className="section-rec__about-image">
                  <img className="section-rec__about-img" src={James} alt="" />
                </div>
                <div className="section-rec__about-info">
                  <h5 className="section-rec__info-name">James Gouse</h5>
                  <p className="section-rec__info-role">Graphic Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="section-rec__item">
              <div className="section-rec__item-star">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <h5 className="section-rec__item-title">Amazing work!</h5>
              <p className="section-rec__item-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                nulla diam in ac dictum a urna viverra morbi. Morbi donec
                amet....
              </p>
              <div className="section-rec__item-about">
                <div className="section-rec__about-image">
                  <img className="section-rec__about-img" src={Tiana} alt="" />
                </div>
                <div className="section-rec__about-info">
                  <h5 className="section-rec__info-name">Tiana Philips</h5>
                  <p className="section-rec__info-role">Photographer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="section-rec__item">
              <div className="section-rec__item-star">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <h5 className="section-rec__item-title">Great Quality!</h5>
              <p className="section-rec__item-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                nulla diam in ac dictum a urna viverra morbi. Morbi donec
                amet....
              </p>
              <div className="section-rec__item-about">
                <div className="section-rec__about-image">
                  <img className="section-rec__about-img" src={Talan} alt="" />
                </div>
                <div className="section-rec__about-info">
                  <h5 className="section-rec__info-name">Talan Westervelt</h5>
                  <p className="section-rec__info-role">Business man</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};
