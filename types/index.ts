import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: String;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  type?: String;
  customStyle: String;
}
export interface SearchManufactureProps {
  searchManufacture: String;
  setSearchManufacture: (searchManufacture: String) => void;
}
export interface CarProps {
  city_mpg: Number;
  class: String;
  combination_mpg: Number;
  cylinders: Number;
  displacement: Number;
  drive: String;
  fuel_type: String;
  highway_mpg: Number;
  make: String;
  model: String;
  transmission: String;
  year: Number;
}
