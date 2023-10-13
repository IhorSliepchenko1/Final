import Rayan_avatar from "../assets/people/Rayan-avatar.png";
import facebook from "../assets/socials/facebook.svg";
import instagram from "../assets/socials/instagram.svg";
import twitter from "../assets/socials/twitter.svg";
import linkedin from "../assets/socials/linkedin.svg";
import youtube from "../assets/socials/youtube.svg";
import dribbble from "../assets/socials/dribbble.svg";
import extra_skills from "../assets/icons/extra-skills.svg";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const CV = () => {
  const userData = {
    age: 24,
    residence: "BD",
    freelance: "Available",
    address: "Dhaka,Bangladesh",
  };

  const languages = {
    Bangla: "100%",
    English: "80%",
    Spanish: "60%",
  };

  const skills = {
    Html: "90%",
    CSS: "85%",
    Js: "80%",
    PHP: "75%",
    WordPress: "85%",
  };

  const downloadPDF = () => {
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const cvElement = document.querySelector(".cv");

    html2canvas(cvElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const imgWidth = pageWidth * 0.3;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const xPosition = (pageWidth - imgWidth) / 2;
      const yPosition = (pageHeight - imgHeight) / 2;

      pdf.addImage(imgData, "PNG", xPosition, yPosition, imgWidth, imgHeight);

      pdf.save("cv.pdf");
    });
  };

  return (
    <>
      <aside className="cv" id="cv" data-aos="zoom-in-up">
        <div className="cv__avatar">
          <img src={Rayan_avatar} alt="Rayan-avatar" />
          <h4 className="cv__name">Rayan Adlardard</h4>
          <p className="cv__profession">Font-end Developer</p>
          <div className="cv__socials">
            <a target="/" href="https://www.facebook.com/" className="cv__a">
              <img src={facebook} alt="facebook" />
            </a>
            <a target="/" href="https://www.instagram.com/" className="cv__a">
              <img src={instagram} alt="instagram" />
            </a>
            <a target="/" href="https://twitter.com/?lang=ru" className="cv__a">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="https://ua.linkedin.com/" className="cv__a">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a
              target="/"
              href="https://www.youtube.com/?gl=UA&hl=ru"
              className="cv__a"
            >
              <img src={youtube} alt="youtube" />
            </a>
            <a target="/" href="https://dribbble.com/" className="cv__a">
              <img src={dribbble} alt="dribbble" />
            </a>
          </div>
        </div>

        <div className="cv__info">
          <div className="cv__info-props">
            <p className="cv__argument">Age:</p>
            <p className="cv__value">{userData.age}</p>
          </div>
          <div className="cv__info-props">
            <p className="cv__argument">Residence:</p>
            <p className="cv__value">{userData.residence}</p>
          </div>
          <div className="cv__info-props">
            <p className="cv__argument">Freelance:</p>
            <p className="cv__value _color">{userData.freelance}</p>
          </div>
          <div className="cv__info-props">
            <p className="cv__argument">Address:</p>
            <p className="cv__value"> {userData.address}</p>
          </div>
        </div>

        <div className="cv__languages">
          <h4 className="cv__title">Languages</h4>
          <div className="cv__languages-list">
            <div className="cv__language-slot">
              <p className="cv__language-name">Bangla</p>
              <div className="cv__language-value">{languages.Bangla}</div>
            </div>
            <div className="cv__language-progress">
              <span
                className="cv__language-line"
                style={{ width: languages.Bangla, display: "block" }}
              ></span>
            </div>
            <div className="cv__language-slot">
              <p className="cv__language-name">English</p>
              <div className="cv__language-value">{languages.English}</div>
            </div>
            <div className="cv__language-progress">
              <span
                className="cv__language-line"
                style={{ width: languages.English, display: "block" }}
              ></span>
            </div>
            <div className="cv__language-slot">
              <p className="cv__language-name">Spanish</p>
              <div className="cv__language-value">{languages.Spanish}</div>
            </div>
            <div className="cv__language-progress">
              <span
                className="cv__language-line"
                style={{ width: languages.Spanish, display: "block" }}
              ></span>
            </div>
          </div>
        </div>

        <div className="cv__skills">
          <h4 className="cv__title">Skills</h4>
          <div className="cv__skills-list">
            <div className="cv__skill-slot">
              <p className="cv__skill-name">Html</p>
              <div className="cv__skill-value">{skills.Html}</div>
            </div>
            <div className="cv__skill-progress">
              <span
                className="cv__skill-line"
                style={{ width: skills.Html, display: "block" }}
              ></span>
            </div>
            <div className="cv__skill-slot">
              <p className="cv__skill-name">CSS</p>
              <div className="cv__skill-value">{skills.CSS}</div>
            </div>
            <div className="cv__skill-progress">
              <span
                className="cv__skill-line"
                style={{ width: skills.CSS, display: "block" }}
              ></span>
            </div>
            <div className="cv__skill-slot">
              <p className="cv__skill-name">Js</p>
              <div className="cv__skill-value">{skills.Js}</div>
            </div>
            <div className="cv__skill-progress">
              <span
                className="cv__skill-line"
                style={{ width: skills.Js, display: "block" }}
              ></span>
            </div>

            <div className="cv__skill-slot">
              <p className="cv__skill-name">PHP</p>
              <div className="cv__skill-value">{skills.PHP}</div>
            </div>
            <div className="cv__skill-progress">
              <span
                className="cv__skill-line"
                style={{ width: skills.PHP, display: "block" }}
              ></span>
            </div>

            <div className="cv__skill-slot">
              <p className="cv__skill-name">WordPress</p>
              <div className="cv__skill-value">{skills.WordPress}</div>
            </div>
            <div className="cv__skill-progress">
              <span
                className="cv__skill-line"
                style={{ width: skills.WordPress, display: "block" }}
              ></span>
            </div>
          </div>
        </div>

        <div className="cv__extra-skills">
          <div className="cv__title">Extra Skills</div>
          <div className="cv__extra-list">
            <div className="cv__extra-slot">
              <img src={extra_skills} alt="extra_skills" />
              <p className="cv__extra-skills-name">Bootstrap, Materialize</p>
            </div>

            <div className="cv__extra-slot">
              <img src={extra_skills} alt="extra_skills" />
              <p className="cv__extra-skills-name">Stylus, Sass, Less</p>
            </div>

            <div className="cv__extra-slot">
              <img src={extra_skills} alt="extra_skills" />
              <p className="cv__extra-skills-name">Gulp, Webpack, Grunt</p>
            </div>

            <div className="cv__extra-slot">
              <img src={extra_skills} alt="extra_skills" />
              <p className="cv__extra-skills-name">GIT Knowledge</p>
            </div>
          </div>
        </div>

        <button className="cv__btn" onClick={downloadPDF}>
          <p className="cv__btn-title"> Download CV</p>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="17"
              viewBox="0 0 14 17"
              fill="none"
            >
              <g clipPath="url(#clip0_2_6732)">
                <path
                  d="M2.33317 12.9523H11.6665V8.28564H12.8332V13.619C12.8332 13.7958 12.7717 13.9654 12.6623 14.0904C12.5529 14.2154 12.4045 14.2856 12.2498 14.2856H1.74984C1.59513 14.2856 1.44675 14.2154 1.33736 14.0904C1.22796 13.9654 1.1665 13.7958 1.1665 13.619V8.28564H2.33317V12.9523ZM8.1665 6.28564H11.0832L6.99984 10.9523L2.9165 6.28564H5.83317V2.28564H8.1665V6.28564Z"
                  fill="#2B2B2B"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_6732">
                  <rect
                    width="14"
                    height="16"
                    fill="white"
                    transform="translate(0 0.285645)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
        </button>
      </aside>
    </>
  );
};
