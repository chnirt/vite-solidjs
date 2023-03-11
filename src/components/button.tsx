import { cva } from "class-variance-authority";
import { MouseEventHandler } from "react";
import { ReactNode } from "react";

const ButtonVariants = cva(
  /* button base style */
  "h-fit text-white uppercase transition-colors duration-150",
  {
    variants: {
      /* button colors */
      intent: {
        primary: "bg-green-500 hover:bg-green-600",
        secondary: "bg-red-500 hover:bg-red-600",
        default: "bg-gray-500 hover:bg-gray-600",
      },

      /* button sizes */
      size: {
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-base", "py-2", "px-4"],
        large: ["text-lg", "py-4", "px-8"],
      },

      /* button roundness */
      roundness: {
        square: "rounded-none",
        round: "rounded-md",
        pill: "rounded-full",
      },
    },

    // defaults
    defaultVariants: {
      intent: "default",
      size: "medium",
      roundness: "round",
    },
  }
);

interface IButton {
  intent?: string;
  size?: string;
  roundness?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
}

export default function Button({
  intent = "default",
  size = "medium",
  roundness = "round",
  onClick,
  children,
}: IButton) {
  return (
    <button
      className={ButtonVariants({ intent, size, roundness })}
      onClick={typeof onClick === "function" ? onClick : undefined}
    >
      {children}
    </button>
  );
}
