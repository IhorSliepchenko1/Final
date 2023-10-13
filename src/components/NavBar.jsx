import { useState } from "react";

import Dark from "./UI/Dark";

export const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
    updateCSSVariables(darkMode);

    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    updateCSSVariables(newDarkMode);
  }

  const updateCSSVariables = (isDarkMode) => {
    const root = document.documentElement;
    root.style.setProperty(
      "--White-background",
      isDarkMode ? "#464646" : "#fff"
    );
    root.style.setProperty("--Background", isDarkMode ? "#2a2a2a" : "#f0f0f6");
    root.style.setProperty("--Black", isDarkMode ? "#fff" : "#464646");
    root.style.setProperty(
      "--Paragraph-Font",
      isDarkMode ? "#b3b3b4" : "#767676"
    );
  };
  const [showTooltip, setShowTooltip] = useState(false);
  const [showTooltipFile, setShowTooltipFile] = useState(false);
  const [showTooltipCV, setShowTooltipCV] = useState(false);
  const [showTooltipPortfolio, setShowTooltipPortfolio] = useState(false);
  const [showTooltipBlog, setShowTooltipBlog] = useState(false);
  const [showTooltipContact, setShowTooltipContact] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };
  const handleMouseEnterFile = () => {
    setShowTooltipFile(true);
  };
  const handleMouseEnterCV = () => {
    setShowTooltipCV(true);
  };
  const handleMouseEnterPortfolio = () => {
    setShowTooltipPortfolio(true);
  };
  const handleMouseEnterBlog = () => {
    setShowTooltipBlog(true);
  };
  const handleMouseEnterContact = () => {
    setShowTooltipContact(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };
  const handleMouseLeaveFile = () => {
    setShowTooltipFile(false);
  };
  const handleMouseLeaveCV = () => {
    setShowTooltipCV(false);
  };
  const handleMouseLeavePortfolio = () => {
    setShowTooltipPortfolio(false);
  };
  const handleMouseLeaveBlog = () => {
    setShowTooltipBlog(false);
  };
  const handleMouseLeaveContact = () => {
    setShowTooltipContact(false);
  };

  const navBar = document.querySelector(".nav-bar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navBar.style.top = "0";
    } else {
      navBar.style.top = "-35rem"; // Adjust this value as needed
    }
  });

  return (
    <>
      <nav className="nav-bar">
        <div
          className="nav-bar__mode"
          onClick={() => {
            toggleDarkMode();
          }}
        >
          <Dark class="dark" />
        </div>

        <ul className="nav-bar__ul">
          <li className="nav-bar__li">
            <a
              href="#rayan"
              className="nav-bar__a"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <svg
                width="40rem"
                height="40rem"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#F0F0F6" />
                <g clipPath="url(#clip0_2_586)">
                  <path
                    d="M26 25.9999C26 26.1989 25.921 26.3896 25.7803 26.5303C25.6397 26.6709 25.4489 26.7499 25.25 26.7499H14.75C14.5511 26.7499 14.3603 26.6709 14.2197 26.5303C14.079 26.3896 14 26.1989 14 25.9999V19.2499H11.75L19.4952 12.2089C19.6333 12.0833 19.8133 12.0137 20 12.0137C20.1867 12.0137 20.3667 12.0833 20.5048 12.2089L28.25 19.2499H26V25.9999Z"
                    fill="#2B2B2B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_586">
                    <rect
                      width="18"
                      height="18"
                      fill="white"
                      transform="translate(11 11)"
                    />
                  </clipPath>
                </defs>
              </svg>
              {showTooltip && <div className="tooltip">Home</div>}
            </a>
          </li>
          <li className="nav-bar__li">
            <a
              href="/"
              className="nav-bar__a"
              onMouseEnter={handleMouseEnterFile}
              onMouseLeave={handleMouseLeaveFile}
            >
              <svg
                width="40rem"
                height="40rem"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#F0F0F6" />
                <g clipPath="url(#clip0_2_590)">
                  <path
                    d="M28.5 15.287V15.5H23V11H23.2603C23.5338 11 23.7962 11.0889 23.9896 11.2471L28.198 14.6904C28.3913 14.8486 28.5 15.0632 28.5 15.287ZM22.6562 16.625C22.0891 16.625 21.625 16.2453 21.625 15.7812V11H13.0312C12.4617 11 12 11.3778 12 11.8438V28.1562C12 28.6222 12.4617 29 13.0312 29H27.4688C28.0383 29 28.5 28.6222 28.5 28.1562V16.625H22.6562ZM17.294 25.0803C17.2732 25.0984 17.2482 25.1131 17.2204 25.1234C17.1926 25.1337 17.1627 25.1394 17.1322 25.1402C17.1018 25.141 17.0714 25.1368 17.0429 25.1281C17.0144 25.1193 16.9883 25.106 16.966 25.0889L14.1788 22.951C14.1557 22.9332 14.1372 22.9118 14.1246 22.888C14.112 22.8641 14.1055 22.8384 14.1055 22.8125C14.1055 22.7865 14.112 22.7608 14.1246 22.737C14.1372 22.7132 14.1557 22.6917 14.1788 22.674L16.966 20.5361C16.9883 20.519 17.0144 20.5057 17.0429 20.4969C17.0714 20.4881 17.1018 20.484 17.1322 20.4848C17.1627 20.4856 17.1926 20.4913 17.2204 20.5016C17.2482 20.5119 17.2732 20.5265 17.294 20.5447L18.1353 21.2789C18.1566 21.2975 18.173 21.3194 18.1838 21.3432C18.1945 21.3671 18.1993 21.3925 18.1978 21.4179C18.1963 21.4433 18.1886 21.4682 18.1751 21.4911C18.1616 21.514 18.1426 21.5345 18.1193 21.5513L16.3678 22.8125L18.1193 24.0737C18.1426 24.0905 18.1616 24.111 18.1751 24.1339C18.1886 24.1568 18.1963 24.1817 18.1978 24.2071C18.1993 24.2325 18.1945 24.2579 18.1838 24.2818C18.173 24.3056 18.1566 24.3275 18.1353 24.3461L17.294 25.0803ZM19.4981 26.8549L18.3185 26.5747C18.2594 26.5607 18.2095 26.528 18.1799 26.4839C18.1502 26.4398 18.1432 26.3878 18.1603 26.3394L20.8003 18.8995C20.8175 18.8511 20.8574 18.8103 20.9113 18.7861C20.9653 18.7618 21.0287 18.756 21.0878 18.7701L22.2674 19.0503C22.2967 19.0572 22.324 19.0688 22.3478 19.0844C22.3716 19.1 22.3914 19.1192 22.406 19.1411C22.4207 19.1629 22.43 19.1869 22.4334 19.2117C22.4367 19.2365 22.434 19.2616 22.4256 19.2855L19.7856 26.7255C19.7771 26.7494 19.7629 26.7718 19.7439 26.7913C19.7248 26.8107 19.7013 26.8269 19.6746 26.8389C19.6479 26.851 19.6186 26.8586 19.5883 26.8613C19.558 26.864 19.5274 26.8619 19.4981 26.8549ZM26.4071 22.951L23.6199 25.0889C23.5977 25.106 23.5716 25.1193 23.5431 25.1281C23.5145 25.1368 23.4842 25.141 23.4537 25.1402C23.4233 25.1394 23.3933 25.1337 23.3655 25.1234C23.3378 25.1131 23.3128 25.0984 23.2919 25.0803L22.4506 24.346C22.4293 24.3275 22.4129 24.3056 22.4021 24.2817C22.3914 24.2579 22.3866 24.2325 22.3881 24.2071C22.3896 24.1817 22.3973 24.1568 22.4108 24.1338C22.4243 24.1109 22.4433 24.0905 22.4666 24.0737L24.2182 22.8125L22.4666 21.5513C22.4433 21.5345 22.4243 21.514 22.4108 21.4911C22.3974 21.4682 22.3896 21.4433 22.3882 21.4179C22.3867 21.3925 22.3914 21.3671 22.4022 21.3432C22.4129 21.3194 22.4294 21.2975 22.4506 21.2789L23.292 20.5447C23.3128 20.5265 23.3378 20.5119 23.3656 20.5016C23.3934 20.4913 23.4233 20.4856 23.4538 20.4848C23.4842 20.484 23.5146 20.4881 23.5431 20.4969C23.5716 20.5057 23.5977 20.519 23.62 20.5361L26.4072 22.674C26.4303 22.6917 26.4488 22.7132 26.4614 22.737C26.474 22.7608 26.4805 22.7865 26.4805 22.8125C26.4805 22.8385 26.474 22.8641 26.4613 22.888C26.4487 22.9118 26.4303 22.9332 26.4071 22.951Z"
                    fill="#767676"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_590">
                    <rect
                      width="16.5"
                      height="18"
                      fill="white"
                      transform="translate(12 11)"
                    />
                  </clipPath>
                </defs>
              </svg>
              {showTooltipFile && <div className="tooltip">File</div>}
            </a>
          </li>
          <li className="nav-bar__li">
            <a
              href="#cv"
              className="nav-bar__a"
              onMouseEnter={handleMouseEnterCV}
              onMouseLeave={handleMouseLeaveCV}
            >
              <svg
                width="40rem"
                height="40rem"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#F0F0F6" />
                <g clipPath="url(#clip0_2_594)">
                  <path
                    d="M23.7636 22.272L20.25 25.6259L16.7364 22.272C14.103 22.381 12 24.4376 12 26.9759V27.3134C12 28.245 12.7919 29.0009 13.7679 29.0009H26.7321C27.7081 29.0009 28.5 28.245 28.5 27.3134V26.9759C28.5 24.4376 26.397 22.381 23.7636 22.272ZM12.5009 13.8064L12.7366 13.8591V15.9122C12.4788 16.0599 12.2946 16.3165 12.2946 16.6259C12.2946 16.9212 12.4641 17.1673 12.7035 17.3185L12.1289 19.5087C12.0663 19.7513 12.2063 20.0009 12.4088 20.0009H13.9483C14.1509 20.0009 14.2908 19.7513 14.2282 19.5087L13.6537 17.3185C13.8931 17.1673 14.0625 16.9212 14.0625 16.6259C14.0625 16.3165 13.8783 16.0599 13.6205 15.9122V14.063L16.0513 14.622C15.7346 15.2267 15.5357 15.9017 15.5357 16.6259C15.5357 19.1114 17.6461 21.1259 20.25 21.1259C22.8539 21.1259 24.9643 19.1114 24.9643 16.6259C24.9643 15.9017 24.7691 15.2267 24.4487 14.622L27.9954 13.8064C28.6657 13.6517 28.6657 12.8536 27.9954 12.6989L20.9829 11.0817C20.5041 10.9728 19.9996 10.9728 19.5208 11.0817L12.5009 12.6954C11.8343 12.8501 11.8343 13.6517 12.5009 13.8064Z"
                    fill="#767676"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_594">
                    <rect
                      width="18"
                      height="18"
                      fill="white"
                      transform="translate(11 11)"
                    />
                  </clipPath>
                </defs>
              </svg>
              {showTooltipCV && <div className="tooltip">CV</div>}
            </a>
          </li>
          <li className="nav-bar__li">
            <a
              href="#portfolio"
              className="nav-bar__a"
              onMouseEnter={handleMouseEnterPortfolio}
              onMouseLeave={handleMouseLeavePortfolio}
            >
              <svg
                width="40rem"
                height="40rem"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#F0F0F6" />
                <g clipPath="url(#clip0_2_598)">
                  <path
                    d="M17.75 20.75V23H22.25V20.75H27.5V26C27.5 26.1989 27.421 26.3897 27.2803 26.5303C27.1397 26.671 26.9489 26.75 26.75 26.75H13.25C13.0511 26.75 12.8603 26.671 12.7197 26.5303C12.579 26.3897 12.5 26.1989 12.5 26V20.75H17.75ZM19.25 19.25H20.75V21.5H19.25V19.25ZM16.25 14.75V12.5C16.25 12.3011 16.329 12.1103 16.4697 11.9697C16.6103 11.829 16.8011 11.75 17 11.75H23C23.1989 11.75 23.3897 11.829 23.5303 11.9697C23.671 12.1103 23.75 12.3011 23.75 12.5V14.75H26.75C26.9489 14.75 27.1397 14.829 27.2803 14.9697C27.421 15.1103 27.5 15.3011 27.5 15.5V19.25H22.25V17.75H17.75V19.25H12.5V15.5C12.5 15.3011 12.579 15.1103 12.7197 14.9697C12.8603 14.829 13.0511 14.75 13.25 14.75H16.25ZM17.75 13.25V14.75H22.25V13.25H17.75Z"
                    fill="#767676"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_598">
                    <rect
                      width="18"
                      height="18"
                      fill="white"
                      transform="translate(11 11)"
                    />
                  </clipPath>
                </defs>
              </svg>
              {showTooltipPortfolio && <div className="tooltip">Portfolio</div>}
            </a>
          </li>
          <li className="nav-bar__li">
            <a
              href="#blog"
              className="nav-bar__a"
              onMouseEnter={handleMouseEnterBlog}
              onMouseLeave={handleMouseLeaveBlog}
            >
              <svg
                width="40rem"
                height="40rem"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#F0F0F6" />
                <g clipPath="url(#clip0_2_602)">
                  <path
                    d="M26.75 12.5C15.5 12.5 14 23 13.25 27.5H14.7485C15.248 25.0002 16.4983 23.6255 18.5 23.375C21.5 23 23.75 20.375 24.5 18.125L23.375 17.375L24.125 16.625C24.875 15.875 25.628 14.75 26.75 12.5Z"
                    fill="#767676"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_602">
                    <rect
                      width="18"
                      height="18"
                      fill="white"
                      transform="translate(11 11)"
                    />
                  </clipPath>
                </defs>
              </svg>
              {showTooltipBlog && <div className="tooltip">Blog</div>}
            </a>
          </li>
          <li className="nav-bar__li">
            <a
              href="#contacts"
              className="nav-bar__a"
              onMouseEnter={handleMouseEnterContact}
              onMouseLeave={handleMouseLeaveContact}
            >
              <svg
                width="40rem"
                height="40rem"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#F0F0F6" />
                <g clipPath="url(#clip0_2_606)">
                  <path
                    d="M15.8412 25.25L12.5 27.875V14C12.5 13.8011 12.579 13.6103 12.7197 13.4697C12.8603 13.329 13.0511 13.25 13.25 13.25H26.75C26.9489 13.25 27.1397 13.329 27.2803 13.4697C27.421 13.6103 27.5 13.8011 27.5 14V24.5C27.5 24.6989 27.421 24.8897 27.2803 25.0303C27.1397 25.171 26.9489 25.25 26.75 25.25H15.8412Z"
                    fill="#767676"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_606">
                    <rect
                      width="18"
                      height="18"
                      fill="white"
                      transform="translate(11 11)"
                    />
                  </clipPath>
                </defs>
              </svg>
              {showTooltipContact && <div className="tooltip">Contact</div>}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
