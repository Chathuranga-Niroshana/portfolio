import React, { useState, useEffect } from "react";
import "./TopButton.css";

const TopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div style={{ display: showButton ? "block" : "none" }}>
      <i
        id="goTopBtn"
        onClick={goToTop}
        className="fa fa-chevron-circle-up"
      ></i>
    </div>
  );
};

export default TopButton;
