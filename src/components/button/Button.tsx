import { type ComponentProps } from "react";

type TVariant = "primary" | "secondary" | "danger" | "success" | "warning" | "outline";
type Button = ComponentProps<"button"> & {
  variant: TVariant;
};

function Button({ children, variant, className, ...rest }: Button) {
  const style = "px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg active:scale-95";
  const checkvariant = getVariantStyles(variant);

  return (
    <button {...rest} className={`${style} ${checkvariant} ${className}`}>
      {children}
    </button>
  );
}

export default Button;

function getVariantStyles(variant: TVariant) {
  const variants: Record<TVariant, string> = {
    primary: "bg-blue-600 text-white border border-blue-700 hover:bg-blue-700",
    secondary: "bg-gray-500 text-white border border-gray-600 hover:bg-gray-600",
    danger: "bg-red-600 text-white border border-red-700 hover:bg-red-700",
    success: "bg-green-600 text-white border border-green-700 hover:bg-green-700",
    warning: "bg-yellow-500 text-white border border-yellow-600 hover:bg-yellow-600",
    outline: "bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-50",
  };
  return variants[variant];
}
