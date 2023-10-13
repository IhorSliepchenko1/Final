import bg from "../assets/img/main-bg.png";
import rayan from "../assets/people/Rayan.png";

export const Rayan = () => {
  return (
    <>
      <section
        data-aos="zoom-in-down"
        id="rayan"
        className="rayan container"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="rayan__info">
          <h1 className="rayan__title">
            I’m Rayan Adlrdard <span className="title__span">Front-end</span>{" "}
            Developer
          </h1>
          <p className="rayan__desc">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Et,
            Volutpat feugiat Placerat Lobortis. Natoque Rutrum Semper Sed
            Suspendisse Nunc Lectus.
          </p>

          <a href="/" className="rayan__main-btn">
            <span className="main-btn__span">HIRE ME</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clipPath="url(#clip0_2_2655)">
                  <path
                    d="M10.7812 7.33312L7.20517 3.75712L8.14784 2.81445L13.3332 7.99979L8.14784 13.1851L7.20517 12.2425L10.7812 8.66645H2.6665V7.33312H10.7812Z"
                    fill="#2B2B2B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_2655">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>{" "}
          </a>
        </div>
        <div className="rayan__img">
          <img className="rayan__rayan" src={rayan} alt="rayan" />
        </div>
      </section>
    </>
  );
};
