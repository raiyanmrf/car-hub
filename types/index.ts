import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: String;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  type?: String;
  customStyle: String;
}
