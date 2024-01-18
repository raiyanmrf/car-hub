import { CustomButtonProps } from "@/types";
import React from "react";

const CustomButton = ({
  title,
  handleClick,
  type,
  customStyle,
}: CustomButtonProps) => {
  return <button className={`${customStyle} px-4 py-1  `}>{title}</button>;
};

export default CustomButton;
