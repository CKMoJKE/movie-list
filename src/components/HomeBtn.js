import { useState } from "react";

export default function HomeBtn() {
  const [homebtn, setHomebtn] = useState(false);

  const showButton = () => {
    if (window.scrollY >= 150) {
      setHomebtn(true);
    } else {
      setHomebtn(false);
    }
  };

  const goHome = () => {
    window.scroll(0, 0);
  };

  window.addEventListener("scroll", showButton);
  if (homebtn === true) {
    return (
      <button
        onClick={goHome}
        className="fixed z-10 bottom-24 right-4 bg-red-700 text-stone-100 text-xs font-bold rounded-lg w-12 h-12"
      >
        UP
      </button>
    );
  }
}
