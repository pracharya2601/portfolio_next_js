import React, { useState, useEffect } from "react";

const useScrollPosition = () => {
  if (typeof window === "undefined") return 500;

  // Store the state
  const [scrollPos, setScrollPos] = useState();

  // On Scroll
  const onScroll = () => {
    setScrollPos(document.querySelector('#pagecontainer').pageYOffset);
  };

  // Add and remove the window listener
  useEffect(() => {
    const elem = document.querySelector('#pagecontainer');
    console.log(elem.pageYOffset);
    document.querySelector('#pagecontainer').addEventListener("scroll", onScroll);
    return () => {
      document.querySelector('#pagecontainer').removeEventListener("scroll", onScroll);
    };
  });
  console.log(scrollPos);
  return scrollPos;
};

export default useScrollPosition;