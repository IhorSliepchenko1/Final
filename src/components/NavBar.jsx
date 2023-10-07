import dark_mode from "../assets/icons/dark_mode.svg";
import light_mode from "../assets/icons/light_mode.svg";

export const NavBar = () => {
  function LightMode() {
    const lightElement = document.getElementById("light");
    const darkElement = document.getElementById("dark");

    lightElement.classList.toggle("_active");
    darkElement.classList.toggle("_active");

    // const body = document.body;
    // const currentBackground =
    //   getComputedStyle(body).getPropertyValue("--Background");
    // const isLightMode = currentBackground === "rgb(240, 240, 246)";

    // if (isLightMode) {
    //   body.style.setProperty("--Background", "rgb(71, 71, 71)");
    // } else {
    //   body.style.setProperty("--Background", "#f0f0f6");
    // }
  }

  return (
    <>
      <nav className="nav-bar">
        <img
          className="light"
          onClick={LightMode}
          id="light"
          src={light_mode}
          alt="light_mode"
        />
        <img
          onClick={LightMode}
          className="dark"
          id="dark"
          src={dark_mode}
          alt="dark_mode"
        />

        <ul className="nav-bar__ul">
          <li className="nav-bar__li">
            <a href="/" className="nav-bar__a"></a>
          </li>
          <li className="nav-bar__li">
            <a href="/" className="nav-bar__a"></a>
          </li>
          <li className="nav-bar__li">
            <a href="/" className="nav-bar__a"></a>
          </li>
          <li className="nav-bar__li">
            <a href="/" className="nav-bar__a"></a>
          </li>
          <li className="nav-bar__li">
            <a href="/" className="nav-bar__a"></a>
          </li>
          <li className="nav-bar__li">
            <a href="/" className="nav-bar__a"></a>
          </li>
        </ul>
      </nav>
    </>
  );
};
