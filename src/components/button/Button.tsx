import { type ComponentProps } from "react";

type TVariant = "primary" | "secondary" | "danger" | "success" | "warning" | "outline";
type Button = ComponentProps<"button"> & {
  variant: TVariant;
};

function Button({ children, variant, ...rest}: Button) {
  return <button {...rest} style={{padding: "0.5rem 1rem", borderRadius :"0.25rem", cursor: "pointer", ...CheckVariant(variant)}}       className="hover:opacity-80 transition-opacity"
>{children}</button>;
}

export default Button;

function CheckVariant(variant: TVariant) {
  if (variant === "primary") {
    return { backgroundColor: "#E8A33D", color: "#151513", border: "1px solid #E8A33D" };
  } else if (variant === "secondary") {
    return { backgroundColor: "#2C2C28", color: "#EDEDE8", border: "1px solid #2C2C28" };
  } else if (variant === "danger") {
    return { backgroundColor: "#E5544D", color: "#151513", border: "1px solid #E5544D" };
  } else if (variant === "success") {
    return { backgroundColor: "#5FAE72", color: "#151513", border: "1px solid #5FAE72" };
  } else if (variant === "warning") {
    return { backgroundColor: "#E8A33D", color: "#151513", border: "1px solid #E8A33D" };
  } else if (variant === "outline") {
    return { backgroundColor: "transparent", color: "#EDEDE8", border: "1px solid #2C2C28" };
  }
}