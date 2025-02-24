import * as RadioGroup from "@radix-ui/react-radio-group";
import "./radio.css";
import clsx from "clsx";

type RadioItem = {
  label: string;
  value: string;
};

type RadioProps<T> = {
  radios: RadioItem[];
  onValueChange: (value: T) => void;
  type: T;
};

function Radio<T extends string>({
  type,
  radios,
  onValueChange,
}: RadioProps<T>) {
  return (
    <RadioGroup.Root
      className="RadioGroupRoot w-full grid grid-cols-2 gap-3"
      value={type}
      // aria-label="View density"
      onValueChange={(value: T) => onValueChange(value)}
    >
      {radios.map((item) => (
        <div key={item.value} className={clsx("flex items-center")}>
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
}
export default Radio;
