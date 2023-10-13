import Img1 from "../assets/img/1.jpg";
import Img2 from "../assets/img/2.jpg";
import Img3 from "../assets/img/3.jpg";

export const Blog = () => {
  return (
    <>
      <section className="blog" data-aos="zoom-in-up" id="blog">
        <h2 className="blog__title">Blog</h2>
        <p className="blog__desc">
          Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet
          Sint. Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum
        </p>
        <div className="blog__article">
          <div className="blog__item">
            <img className="item__img" src={Img1} alt="web-tempates" />
            <div className="item__info">
              <a href="/" className="item__title">
                How To Make Web Tempates
              </a>
              <p className="item__desc">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae
                Nulla Diam In Ac Dictum A Urna
              </p>
              <a href="/" className="item__link">
                Learn more
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_2_934)">
                      <path
                        d="M10.1431 10L7.78564 7.64334L8.96398 6.46417L12.4998 10L8.96398 13.5358L7.78564 12.3567L10.1431 10Z"
                        fill="#FFB400"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_934">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div className="blog__item">
            <img className="item__img" src={Img2} alt="Business card" />
            <div className="item__info">
              <a href="/" className="item__title">
                Make Business Card
              </a>
              <p className="item__desc">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae
                Nulla Diam In Ac Dictum A Urna
              </p>
              <a href="/" className="item__link">
                Learn more
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_2_934)">
                      <path
                        d="M10.1431 10L7.78564 7.64334L8.96398 6.46417L12.4998 10L8.96398 13.5358L7.78564 12.3567L10.1431 10Z"
                        fill="#FFB400"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_934">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div className="blog__item">
            <img className="item__img" src={Img3} alt="flyer-desing" />
            <div className="item__info">
              <a href="/" className="item__title">
                How To Make Flyer Design
              </a>
              <p className="item__desc">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae
                Nulla Diam In Ac Dictum A Urna
              </p>
              <a href="/" className="item__link">
                Learn more
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_2_934)">
                      <path
                        d="M10.1431 10L7.78564 7.64334L8.96398 6.46417L12.4998 10L8.96398 13.5358L7.78564 12.3567L10.1431 10Z"
                        fill="#FFB400"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_934">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
