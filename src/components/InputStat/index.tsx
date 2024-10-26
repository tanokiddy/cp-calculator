import * as Label from "@radix-ui/react-label";
import CP from "@/app/CP.json";
import { TYPE_SELECT } from "@/app/page";
import { Controller } from "react-hook-form";
type Props = {
  type: TYPE_SELECT;
  register?: any;
  total?: any;
  defaultData: any;
  control: any;
};

const InputStat = (props: Props) => {
  const { type, register, total, defaultData, control } = props;

  return (
    <>
      {CP[type].map((item) => (
        <div
          key={item.name}
          className="flex gap-2 justify-center max-w-[280px] w-full"
        >
          <Label.Root className="flex-1 text-xs font-semibold flex items-center text-nowrap">
            {item.name}
          </Label.Root>
          <Controller
            control={control}
            name={item.name}
            render={() => (
              <input
                {...register(item.name, {
                  setValueAs: (v: any) => ({
                    value: parseInt(v),
                    rate: item.rate,
                  }),
                })}
                className="w-[80px] text-black px-1 focus:outline-none focus-visible:outline-none rounded-[4px]"
                type="text"
                id={item.name}
                defaultValue={defaultData?.[item.name]?.value}
              />
            )}
          />
        </div>
      ))}
      <div className="flex gap-2 justify-center max-w-[280px] w-full">
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
