import * as RadioGroup from "@radix-ui/react-radio-group";
import "./index.css";
import { CPTypekey } from "@/app/type";
import { Dispatch, SetStateAction } from "react";
import { FieldValues, UseFormReset } from "react-hook-form";

const allType = [
  {
    label: "Armor",
    value: "armor",
  },
  {
    label: "Weapon",
    value: "weapon",
  },
  {
    label: "Attack Power",
    value: "attack_power",
  },
  {
    label: "Defense Power",
    value: "defense_power",
  },
];

type Props = {
  type: CPTypekey
  setType: Dispatch<SetStateAction<CPTypekey>>
  setTotal: Dispatch<SetStateAction<number>>
  reset: UseFormReset<FieldValues>
}

const RadioType = (props: Props) => {
  const { type, setType, setTotal, reset } = props;
  return (
    <RadioGroup.Root
      className="RadioGroupRoot w-full grid grid-cols-2 gap-3"
      value={type}
      aria-label="View density"
      onValueChange={(v: CPTypekey) => {
        reset();
        setType(v);
        setTotal(0);
      }}
    >
      {allType.map((item) => (
        <div key={item.value} className="flex items-center">
          <RadioGroup.Item
            className="RadioGroupItem"
            value={item.value}
            id={item.value}
          >
            <RadioGroup.Indicator className="RadioGroupIndicator" />
          </RadioGroup.Item>
          <label
            className="leading-[25px] font-semibold text-xs pl-4 w-[calc(100%_-_25px)] text-nowrap"
            htmlFor={item.value}
          >
            {item.label}
          </label>
        </div>
      ))}
    </RadioGroup.Root>
  );
};
export default RadioType;
