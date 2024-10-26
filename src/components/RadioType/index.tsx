import * as RadioGroup from "@radix-ui/react-radio-group";
import "./index.css";

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

const RadioType = (props: any) => {
  const { type, setType, setTotal, reset } = props;
  return (
    <form className="flex max-w-[280px] w-full mx-auto">
      <RadioGroup.Root
        className="RadioGroupRoot w-full grid grid-cols-2 gap-3"
        value={type}
        aria-label="View density"
        onValueChange={(v) => {
          reset()
          setType(v);
          setTotal(0)
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
            <label className="leading-[25px] font-semibold text-xs pl-4 w-[calc(100%_-_25px)] text-nowrap" htmlFor={item.value}>
              {item.label}
            </label>
          </div>
        ))}
      </RadioGroup.Root>
    </form>
  );
};
export default RadioType;
