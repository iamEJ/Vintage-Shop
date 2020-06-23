import React from "react";
import { faAngleUp, faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ScrollButton() {
  const height = 200;

  const scrollToTheTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={height > 100 ? "scrollBtnShow" : "scrollBtnHide"}
      onClick={scrollToTheTop}
    >
      <FontAwesomeIcon icon={faAngleDoubleUp} />
    </button>
  );
}
