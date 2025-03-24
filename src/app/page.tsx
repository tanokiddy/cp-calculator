"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Base from "@/app/Base.json";
import {
  CPType,
  CPTypekey,
  EUDUItemType,
  EUDUKey,
  EUDUListType,
  InputType,
  StatKey,
} from "./type";
import CP from "@/app/CP.json";
import EU_DU_List from "@/app/EU_DU.json";
import ButtonControl from "@/components/ButtonControl";
import TopAction from "@/components/TopAction";
import InputField from "@/components/InputField";
import Container from "@/components/Container";

export default function Home() {
  const [type, setType] = useState<CPTypekey>("armor");
  const [total, setTotal] = useState<number>(0);
  const [defaultData, setDefaultData] = useState<InputType>();

  const { handleSubmit, reset, control, setValue } = useForm({
    mode: "onChange",
  });

  const onReset = () => {
    reset();
    (CP as CPType)[type].forEach((item) => {
      setValue(item.key, "");
    });
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
      total += Math.floor(value * Base[key as StatKey]);
    });

    setTotal(total);
  };

  const onSubmit = (data: InputType) => {
    Object.keys(data).forEach((key) => {
      if (!data[key as StatKey]) {
        delete data[key as StatKey];
      }
    });
    onTotal(data);
  };

  const onValueChangeRadio = (value: CPTypekey) => {
    onReset();
    setType(value);
  };

  const onValueChangeType = (value: EUDUKey) => {
    const data: InputType = {};
    (EU_DU_List as EUDUListType)[value].forEach((item: EUDUItemType) => {
      data[item.key] = item.value;
    });
    reset();
    setType(value);
    setDefaultData(data);
    onSubmit(data);
  };

  useEffect(() => {}, []);

  return (
    <Container>
      <TopAction
        cpType={type}
        onValueChangeRadio={(value) => onValueChangeRadio(value)}
        onValueChangeType={(value) => onValueChangeType(value)}
      />
      <ButtonControl onReset={onReset} />
      <InputField
        type={type}
        total={total}
        defaultData={defaultData}
        onChange={handleSubmit(onSubmit)}
        control={control}
      />
    </Container>
  );
}
