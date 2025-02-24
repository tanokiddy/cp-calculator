import React from "react";
import * as SelectGroup from "@radix-ui/react-select";
import { selectList } from "@/utils/const";

type SelectProps<T> = {
  onValueChange: (value: T) => void;
  placeholder?: string;
};

function Select<T extends string>(props: SelectProps<T>) {
  const { onValueChange, placeholder } = props;

  return (
    <div>
      <SelectGroup.Root onValueChange={(value: T) => onValueChange(value)}>
        <SelectGroup.Trigger className="select-none pr-2 py-1 flex gap-2">
          <SelectGroup.Value placeholder={placeholder} />
          <SelectGroup.Icon />
        </SelectGroup.Trigger>
        <SelectGroup.Portal>
          <SelectGroup.Content
            className="bg-white text-black rounded-lg overflow-hidden"
            position="popper"
          >
            <SelectGroup.Viewport>
              <SelectGroup.Group>
                {selectList.map((item) => (
                  <SelectGroup.Item
                    value={item.key}
                    key={item.key}
                    className="focus:outline-none cursor-pointer px-2 py-1 hover:bg-blue-700 hover:text-white transition-hover ease-linear focus-within:bg-blue-700 focus-within:text-white"
                  >
                    <SelectGroup.ItemText>{item.label}</SelectGroup.ItemText>
                  </SelectGroup.Item>
                ))}
              </SelectGroup.Group>
            </SelectGroup.Viewport>
          </SelectGroup.Content>
        </SelectGroup.Portal>
      </SelectGroup.Root>
    </div>
  );
}

export default Select;
