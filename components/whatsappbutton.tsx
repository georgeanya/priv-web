import React from "react";
import whatsapp from "../public/assets/whatsapp.svg";

const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    window.open(`https://wa.link/9p7akl`);
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-5 right-5 rounded-full z-50"
    >
      <img
        src={whatsapp.src}
        alt="Whatapp Logo"
        className="w-[55px] md:w-[65px]"
      />
    </button>
  );
};

export default WhatsAppButton;
