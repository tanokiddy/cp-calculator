"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import RadioType from "@/components/RadioType";
import InputStat from "@/components/InputStat";
import CP from '@/app/CP.json'

const key = "CP";
export type TYPE_SELECT = "attack_power" | "defense_power" | "weapon" | "armor";

export default function Home() {
  const [type, setType] = useState<TYPE_SELECT>("armor");
  const [total, setTotal] = useState<number>(0);
  const [defaultData, setDefaultData] = useState<any>();
  const { handleSubmit, register, reset, control, setValue } = useForm({
    mode: "onChange",
  });

  const onReset = () => {
    reset();
    localStorage.setItem(key, "");
    if (defaultData) {
      Object.entries(defaultData).forEach((item: any) => {
        setValue(item[0], "");
      });
    }
    setTotal(0);
  };

  const onTotal = (data: any) => {
    let total: any = 0;
    Object.values(data).forEach((item: any) => {
      if (Number.isNaN(item.value)) return;
      total += item.value * item.rate;
    });
    setTotal(Math.floor(total));
  };

  const onSubmit = (data: any) => {
    Object.keys(data).forEach((item) => {
      if (!data[item]) {
        delete data[item];
      }
    });
    const newData = {
      type,
      stats: data,
    };
    localStorage.setItem(key, JSON.stringify(newData));
    onTotal(data);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(key) || JSON.stringify(""));
    if (data) {
      setDefaultData(data?.stats);
      setType(data?.type);
      onTotal(data?.stats);
    }
  }, []);

  return (
    <div className="flex flex-col gap-6 mt-10">
      <RadioType
        type={type}
        setType={setType}
        setTotal={setTotal}
        reset={onReset}
      />
      <div className="max-w-[350px] w-full mx-auto">
        <button
          className="rounded-md px-4 py-1 border bg-white text-black cursor-pointer"
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
