import clsx from "clsx";
import React from "react";
import { allStatTypes } from "@/utils/const";
import SelectEUDU from "@/components/Atoms/select";
import BaseStatsRadio from "@/components/Atoms/radio";
import { CPTypekey, EUDUKey } from "@/app/type";

type TopActionProps = {
  cpType: CPTypekey;
  onValueChangeRadio: (value: CPTypekey) => void;
  onValueChangeType: (value: EUDUKey) => void;
};

const TopAction = ({
  cpType,
  onValueChangeRadio,
  onValueChangeType,
}: TopActionProps) => {
  return (
    <form
      className={clsx("flex flex-col gap-4", "max-w-[350px] w-full mx-auto")}
    >
      <BaseStatsRadio
        radios={allStatTypes}
        type={cpType}
        onValueChange={(value) => {
          onValueChangeRadio(value);
        }}
      />
      <SelectEUDU
        onValueChange={(value: EUDUKey) => {
          onValueChangeType(value);
        }}
        placeholder="Select DU/UE stat"
      />
    </form>
  );
};

export default TopAction;
