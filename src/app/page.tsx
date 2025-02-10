"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import RadioType from "@/components/RadioType";
import InputStat from "@/components/InputStat";
import Base from "@/app/Base.json";
import { CPType, CPTypekey, InputType, StatKey } from "./type";
import SelectType from "@/components/SelectType";
import CP from "@/app/CP.json";

export default function Home() {
  const [type, setType] = useState<CPTypekey>("armor");
  const [total, setTotal] = useState<number>(0);
  const [defaultData, setDefaultData] = useState<InputType>();
  const [selectKey, resetSelectKey] = useState<number>(0)

  const { handleSubmit, register, reset, control, setValue } = useForm({
    mode: "onChange",
  });

  const onReset = () => {
    reset();
    (CP as CPType)[type].forEach(item => {
      setValue(item.key, '')
    })
    if (defaultData) {
      Object.entries(defaultData).forEach(([key, value]) => {
        setValue(key, "");
      });
    }
    setTotal(0);
  };

  const onTotal = (data: InputType) => {
    let total: number = 0;
    Object.entries(data).forEach(([key, value]) => {
      if (Number.isNaN(value)) return;
      total += value * Base[key as StatKey];
    });
    
    setTotal(Math.floor(total));
  };

  const onSubmit = (data: InputType) => {
    Object.keys(data).forEach((key) => {
      if (!data[key as StatKey]) {
        delete data[key as StatKey];
      }
    });
    // const newData = {
    //   type,
    //   stats: data,
    // };
    // localStorage.setItem(CP_KEY, JSON.stringify(newData));
    onTotal(data);
  };

  useEffect(() => {
    // const data = JSON.parse(localStorage.getItem(CP_KEY) || JSON.stringify(""));
    // if (data) {
    //   setDefaultData(data?.stats);
    //   setType(data?.type);
    //   onTotal(data?.stats);
    // }
  }, []);

  return (
    <div className="flex flex-col gap-6 max-w-[350px] h-[calc(100vh_-_32px)] mt-4 mx-auto dark:bg-[#f0eeee] bg-black text-white dark:text-black p-2 pt-10 rounded-xl">
      <form
        className="flex flex-col gap-4 max-w-[350px] w-full mx-auto"
      >
        <RadioType
          type={type}
          setType={setType}
          setTotal={setTotal}
          reset={onReset}
          resetSelectKey={resetSelectKey}
        />
        <SelectType 
          setType={setType}
          reset={reset}
          setDefaultData={setDefaultData}
          onSubmit={onSubmit}
          type={type}
          selectKey={selectKey}
          resetSelectKey={resetSelectKey}
        />
      </form>
      <div className="max-w-[350px] w-full mx-auto">
        <button
          className="rounded-md px-4 py-1 border bg-white text-black dark:text-white dark:bg-black cursor-pointer"
          onClick={onReset}
        >
          Reset
        </button>
      </div>
      <form
        className={`grid gap-x-6 gap-y-4 max-w-[350px] mx-auto w-full grid-cols-2`}
        onChange={handleSubmit(onSubmit)}
        onSubmit={(e) => e.preventDefault()}
      >
        <InputStat
          type={type}
          register={register}
          total={total}
          defaultData={defaultData}
          control={control}
        />
      </form>
    </div>
  );
}
