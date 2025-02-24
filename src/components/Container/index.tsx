import clsx from "clsx";
import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={clsx(
        "flex flex-col gap-6",
        "bg-black text-white",
        "dark:bg-[#f0eeee] dark:text-black",
        "max-w-[350px] h-[calc(100vh_-_32px)] mt-4 mx-auto p-2 pt-10 rounded-xl"
      )}
    >
      {children}
    </div>
  );
};

export default Container;
