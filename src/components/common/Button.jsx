import React from "react";

function Button({ className = "h-[50px] w-[20%]", title = "Shop now" }) {
  return (
    <button
      className={`text-white bg-black font-medium mt-[50px] cursor-pointer ${className}`}
    >
      {title}
    </button>
  );
}

export default Button;
