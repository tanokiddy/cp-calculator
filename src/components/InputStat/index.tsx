import * as Label from "@radix-ui/react-label";
import CP from "@/app/CP.json";
import {
  Control,
  Controller,
  FieldValues,
} from "react-hook-form";
import { CPType, CPTypekey, InputType } from "@/app/type";

type StatInputProps = {
  type: CPTypekey;
  defaultData?: InputType;
  control: Control<FieldValues, any>;
};

const StatInput = (props: StatInputProps) => {
  const { type, defaultData, control } = props;
  return (CP as CPType)[type].map((item) => {
    return (
      <div
        key={item.name}
        className="flex gap-2 justify-center max-w-[350px] w-full"
      >
        <Label.Root
          className="flex-1 text-xs font-semibold flex items-center truncate"
          htmlFor={item.name}
        >
          {item.name}
        </Label.Root>
        <Controller
          control={control}
          name={item.key}
          render={() => (
            <input
              {...control.register(item.key, {
                setValueAs: (v: string): number => {
                  return parseInt(v);
                },
              })}
              className="w-[45px] placeholder:text-black dark:placeholder:text-white text-black dark:text-white dark:bg-black px-1 focus:outline-none focus-visible:outline-none rounded-md"
              type="text"
              id={item.name}
              defaultValue={defaultData?.[item.key] || ""}
              placeholder="0"
            />
          )}
        />
      </div>
    );
  });
};

export default StatInput;
