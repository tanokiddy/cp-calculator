import * as Label from "@radix-ui/react-label";
import CP from "@/app/CP.json";
import { Control, Controller, FieldValues, UseFormRegister } from "react-hook-form";
import { CPType, CPTypekey, InputType } from "@/app/type";

type Props = {
  type: CPTypekey;
  register: UseFormRegister<FieldValues>
  total?: number;
  defaultData?: InputType;
  control: Control<FieldValues, any>;
};

const InputStat = (props: Props) => {
  const { type, register, total, defaultData, control } = props;
  return (
    <>
      {(CP as CPType)[type].map((item) => {
        return (
          <div
            key={item.name}
            className="flex gap-2 justify-center max-w-[350px] w-full"
          >
            <Label.Root className="flex-1 text-xs font-semibold flex items-center text-nowrap" htmlFor={item.name}>
              {item.name}
            </Label.Root>
            <Controller
              control={control}
              name={item.key}
              render={() => (
                <input
                  {...register(item.key, {
                    setValueAs: (v: string): number => {
                      return parseInt(v)
                    },
                  })}
                  className="w-[45px] text-black px-1 focus:outline-none focus-visible:outline-none rounded-[4px]"
                  type="text"
                  id={item.name}
                  defaultValue={defaultData?.[item.key] || ''}
                />
              )}
            />
          </div>
        )
      })}
      <div className="flex gap-2 justify-center max-w-[350px] w-full">
        <Label.Root className="flex-1 text-xs font-semibold flex items-center text-nowrap">
          Total
        </Label.Root>
        <span>{total}</span>
      </div>
      <button></button>
    </>
  );
};

export default InputStat;
