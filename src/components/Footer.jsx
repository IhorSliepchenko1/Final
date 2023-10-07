import { useEffect } from "react";

export const Footer = () => {
  useEffect(() => {
    document.getElementById("year").innerHTML = new Date().getFullYear();
  }, []);

  return (
    <footer className="footer">
      <div className="footer__copyright">
        <span id="year"></span> All Rights Reserved.Ojjomedia
      </div>
    </footer>
  );
};
