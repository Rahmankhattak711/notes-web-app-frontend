type buttonVariant = "primary" | "secondary" | "danger";
type buttonSize = "sm" | "md" | "lg";

interface IButton {
  children: React.ReactNode;
  variant: buttonVariant;
  size: buttonSize;
}

export const Button = ({ children, variant, size }: IButton) => {
  const bgVariant: Record<buttonVariant, string> = {
    primary: "bg-blue-900 w-full text-white hover:bg-blue-600",
    secondary: "bg-gray-500 w-full text-white hover:bg-gray-600",
    danger: "bg-red-500 w-full text-white hover:bg-red-600",
  };

  const bSize: Record<buttonSize, string> = {
    sm: "py-1 px-2 text-sm",
    md: "py-2 px-4 text-md",
    lg: "py-3 px-6 text-lg",
  };

  return (
    <button className={` ${bgVariant[variant]} ${bSize[size]}} rounded-md`}>
      {children}
    </button>
  );
};
