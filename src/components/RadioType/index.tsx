import * as RadioGroup from "@radix-ui/react-radio-group";
import "./index.css";
import * as Select from "@radix-ui/react-select";


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

const selectList = [
  {
    label: "EU3 Armor",
    key: "armor_eu3"
  },
  {
    label: "EU3 WP 1H",
    key: "weapon_1h_eu3"
  },
  {
    label: "EU3 Bike",
    key: "bike_eu3"
  },
  {
    label: "DU14 HH Suit",
    key: "suit_hh_du14"
  },
  {
    label: "DU14 HH Gloves",
    key: "gloves_hh_du14"
  },
  {
    label: "DU14 HH Boots",
    key: "boots_hh_du14"
  },
  {
    label: "DU14 HH Helm",
    key: "helm_hh_du14"
  },
  {
    label: "DU12 ULTI WP 1H",
    key: "weapon_1h_ulti_du12"
  }
]

const RadioType = (props: any) => {
  const { type, setType, setTotal, reset } = props;
  return (
    <form className="flex flex-col gap-4 max-w-[350px] w-full mx-auto">
      <RadioGroup.Root
        className="RadioGroupRoot w-full grid grid-cols-2 gap-3"
        value={type}
        aria-label="View density"
        onValueChange={(v) => {
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
      {/* <div>
        <Select.Root onValueChange={(v) => {
          setType(v)
          setTotal()
        }}>
          <Select.Trigger className="select-none pr-2 py-1 flex gap-2" >
            <Select.Value placeholder="Select DU/UE stat"/>
            <Select.Icon />
          </Select.Trigger>
          <Select.Portal>
            <Select.Content className="bg-white text-black rounded-lg" position="popper">
              <Select.Viewport className="SelectViewport">
                <Select.Group>
                  {selectList.map(item => (
                    <Select.Item value={item.key} key={item.key} className="focus:outline-none cursor-pointer px-2 py-1 hover:bg-black hover:text-white transition-all ease-linear">
                      <Select.ItemText>
                        {item.label}
                      </Select.ItemText>
                    </Select.Item>
                  ))}
                </Select.Group>
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div> */}
    </form>
  );
};
export default RadioType;
