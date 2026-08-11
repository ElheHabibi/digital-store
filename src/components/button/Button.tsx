import React, { type ComponentProps } from "react";

type TVariant = "primary" | "secondary" | "danger" | "success" | "warning" | "outline";
type Button = ComponentProps<"button"> & {
  variant: TVariant;
};

function Button({ children, variant, ...rest}: Button) {
  return <button {...rest} style={{padding: "0.5rem 1rem", borderRadius :"0.25rem", ...CheckVariant(variant)}}>{children}</button>;
}

export default Button;

function CheckVariant(variant: TVariant) {
  if (variant === "primary") {
    return { backgroundColor: "blue", color: "white", border: "1px solid darkblue" };
  } else if (variant === "secondary") {
    return { backgroundColor: "gray", color: "black", border: "1px solid darkgray" };
  } else if (variant === "danger") {
    return { backgroundColor: "red", color: "white", border: "1px solid darkred" };
  } else if (variant === "success") {
    return { backgroundColor: "green", color: "white", border: "1px solid darkgreen" };
  } else if (variant === "warning") {
    return { backgroundColor: "yellow", color: "white", border: "1px solid orange" };
  } else if (variant === "outline") {
    return { backgroundColor: "transparent", color: "blue", border: "1px solid blue" };
  }
}