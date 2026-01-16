// Your Button component
type buttonVariant = "primary" | "secondary" | "danger";
type buttonSize = "sm" | "md" | "lg";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: buttonVariant;
  size?: buttonSize;
  className?: string;
}

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: IButton) => {
  const bgVariant: Record<buttonVariant, string> = {
    primary: "bg-blue-900 text-white hover:bg-blue-600",
    secondary:
      "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-900  transition-all duration-200 group",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  const bSize: Record<buttonSize, string> = {
    sm: "py-1 px-2 text-sm",
    md: "py-2 px-4 text-md",
    lg: "py-3 px-6 text-lg",
  };

  return (
    <button
      {...props}
      className={`w-full ${bgVariant[variant]} ${bSize[size]} rounded-md ${className}`}
    >
      {children}
    </button>
  );
};
