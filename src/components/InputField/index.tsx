import React from "react";
import StatInput from "@/components/InputStat";
import { CPTypekey, InputType } from "@/app/type";
import { Control, FieldValues } from "react-hook-form";
import Total from "@/components/Total";

type InputFieldProps = {
  type: CPTypekey;
  defaultData?: InputType;
  total: number;
  onChange: (e: any) => void;
  control: Control<FieldValues, any>;
};

function InputField({
  type,
  total,
  defaultData,
  onChange,
  control,
}: InputFieldProps) {
  return (
    <form
      className="grid gap-x-6 gap-y-4 max-w-[350px] mx-auto w-full grid-cols-2"
      onChange={onChange}
      onSubmit={(e) => e.preventDefault()}
    >
      <StatInput type={type} control={control} defaultData={defaultData} />
      <Total total={total} />
    </form>
  );
}

export default InputField;
