import React, { Dispatch, SetStateAction, useState } from "react";
import * as Select from "@radix-ui/react-select";
import {
  CPTypekey,
  EU_DU_ItemType,
  EU_DU_Key,
  EU_DU_ListType,
  InputType,
} from "@/app/type";
import { FieldValues, UseFormReset } from "react-hook-form";
import EU_DU from "@/app/EU_DU.json";

type SelectItemType = {
  label: string;
  key: CPTypekey;
};
const selectList: SelectItemType[] = [
  {
    label: "EU3 Armor",
    key: "armor_eu3",
  },
  {
    label: "EU3 WP 1H",
    key: "weapon_1h_eu3",
  },
  {
    label: "EU3 Bike",
    key: "bike_eu3",
  },
  {
    label: "DU14 HH Suit",
    key: "suit_hh_du14",
  },
  {
    label: "DU14 HH Gloves",
    key: "gloves_hh_du14",
  },
  {
    label: "DU14 HH Boots",
    key: "boots_hh_du14",
  },
  {
    label: "DU14 HH Helm",
    key: "helm_hh_du14",
  },
  {
    label: "DU12 ULTI WP 1H",
    key: "weapon_1h_ulti_du12",
  },
];

type Props = {
  type: CPTypekey;
  setType: Dispatch<SetStateAction<CPTypekey>>;
  reset: UseFormReset<FieldValues>;
  setDefaultData: Dispatch<InputType>;
  onSubmit: (data: InputType) => void;
  selectKey?: number
};

const SelectType = (props: Props) => {
  const { setType, reset, setDefaultData, onSubmit } = props;
  
  return (
    <div>
      <Select.Root
        onValueChange={(selectValue: EU_DU_Key) => {
          const data: InputType = {};
          (EU_DU as EU_DU_ListType)[selectValue].forEach(
            (item: EU_DU_ItemType) => {
              data[item.key] = item.value;
            }
          );
          reset();
          setType(selectValue);
          setDefaultData(data);
          onSubmit(data);
        }}
      >
        <Select.Trigger className="select-none pr-2 py-1 flex gap-2">
          <Select.Value placeholder="Select DU/UE stat" />
          <Select.Icon />
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            className="bg-white text-black rounded-lg overflow-hidden"
            position="popper"
          >
            <Select.Viewport className="SelectViewport">
              <Select.Group>
                {selectList.map((item) => (
                  <Select.Item
                    value={item.key}
                    key={item.key}
                    className="focus:outline-none cursor-pointer px-2 py-1 hover:bg-blue-700 hover:text-white transition-hover ease-linear focus-within:bg-blue-700 focus-within:text-white"
                  >
                    <Select.ItemText>{item.label}</Select.ItemText>
                  </Select.Item>
                ))}
              </Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};

export default SelectType;
