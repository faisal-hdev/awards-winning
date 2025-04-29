import React from "react";

const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
  return (
    <div
      id={id}
      className={`group flex relative z-10 w-fit gap-3 items-center justify-center overflow-hidden rounded-full bg-violet-50 py-3 text-black px-7 ${containerClass}`}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </div>
  );
};

export default Button;
