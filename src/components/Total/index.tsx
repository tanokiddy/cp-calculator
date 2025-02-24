import React from "react";
import * as Label from "@radix-ui/react-label";

const Total = ({ total }: { total: number }) => {
  return (
    <div className="flex gap-2 justify-center max-w-[350px] w-full">
      <Label.Root className="flex-1 text-xs font-semibold flex items-center text-nowrap">
        Total
      </Label.Root>
      <span>{total}</span>
    </div>
  );
};

export default Total;
