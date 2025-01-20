export type StatKey =
  | "all_att"
  | "att_rate"
  | "cr"
  | "cd"
  | "all_amp"
  | "accu"
  | "pen"
  | "add_dmg"
  | "ig_eva"
  | "final_dmg_incr"
  | "ig_dmg_reduce"
  | "ig_resist_cr"
  | "ig_resist_cd"
  | "ig_resist_amp"
  | "normal_dmg_up"
  | "cancel_ig_pen"
  | "hp"
  | "def"
  | "def_rate"
  | "eva"
  | "dmg_reduce"
  | "resist_cr"
  | "resist_cd"
  | "resist_amp"
  | "ig_pen"
  | "ig_accu"
  | "final_dmg_decr"
  | "cancel_ig_dmg_reduce";

export type StatType = {
  key: StatKey;
  name: string;
  rate: number;
};

export type CPTypekey =
  | "attack_power"
  | "defense_power"
  | "armor"
  | "weapon"
  | "armor_eu3"
  | "weapon_1h_eu3"
  | "bike_eu3"
  | "suit_hh_du14"
  | "gloves_hh_du14"
  | "boots_hh_du14"
  | "helm_hh_du14"
  | "weapon_1h_ulti_du12";

export type CPType = {
  [key in CPTypekey]: StatType[];
};

export type InputType = {
  [key in StatKey]?: number;
};

export type EU_DU_Key =
  | "armor_eu3"
  | "weapon_1h_eu3"
  | "bike_eu3"
  | "suit_hh_du14"
  | "gloves_hh_du14"
  | "boots_hh_du14"
  | "helm_hh_du14"
  | "weapon_1h_ulti_du12";

export type RadioTypeKey =
  | "attack_power"
  | "defense_power"
  | "armor"
  | "weapon";

export type EU_DU_ItemType = {
  key: StatKey;
  value: number;
};

export type EU_DU_ListType = {
  [key in EU_DU_Key]: EU_DU_ItemType[];
};
