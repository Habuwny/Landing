import React, { MouseEventHandler } from "react";
interface BtnProps {
  border: string;
  color: string;
  children?: React.ReactNode;
  height?: string;
  onClick?: MouseEventHandler;
  onMouseOver?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
  radius: string;
  width?: string;
  padding?: string;
  classes?: string;
}

export const Button = ({
  border,
  color,
  children,
  height,
  onClick,
  radius,
  width,
  onMouseLeave,
  onMouseOver,
  padding,
  classes,
}: BtnProps) => {
  return (
    <button
      className={classes}
      onClick={onClick}
      onMouseLeave={onMouseLeave}
      onMouseOver={onMouseOver}
      style={{
        backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width,
        padding: padding,
        color: "#fff",
      }}
    >
      {children}
    </button>
  );
};
