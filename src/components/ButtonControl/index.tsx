import clsx from "clsx";
import React from "react";

type ButtonControlProps = {
  onReset?: () => void;
};

const ButtonControl = ({ onReset }: ButtonControlProps) => {
  return (
    <div className="max-w-[350px] w-full mx-auto">
      <button
        className={clsx(
          "rounded-md px-4 py-1 border cursor-pointer",
          "bg-white text-black",
          "dark:text-white dark:bg-black"
        )}
        onClick={onReset}
      >
        Reset Field
      </button>
    </div>
  );
};

export default ButtonControl;
