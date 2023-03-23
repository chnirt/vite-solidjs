import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { MouseEventHandler, ReactNode } from "react";

export type ButtonVariantProps = VariantProps<typeof ButtonVariants>;
export interface IButton {
  className?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
}
/**
 * Button
 */
export interface ButtonProps extends ButtonVariantProps, IButton { }
const ButtonVariants = cva(
  /* button base style */
  // "h-fit text-white uppercase transition-colors duration-150",
  "",
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

      disabled: {
        true: "disabledButtonBGColor",
        false: "hover:opacity-80 focus:opacity-80 active:opacity-80",
      },
    },

    // defaults
    defaultVariants: {
      // intent: "default",
      // size: "medium",
      // roundness: "round",
      disabled: false
    },
  }
);

export default function Button({
  className,
  startIcon,
  endIcon,
  onClick,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={clsx(
        "buttonBackgroundColor",
        "flex justify-center items-center rounded-full px-6 py-[0.625rem]",
        ButtonVariants({ disabled, ...props }),
        className
      )}
      disabled={Boolean(disabled)}
      onClick={onClick}
    >
      {startIcon && (
        <div
          className={clsx("buttonIconColor", "mr-2", {
            disabledButtonTextColor: disabled,
          })}
        >
          {startIcon}
        </div>
      )}
      {children && (
        <span
          className={clsx(
            "buttonIconColor",
            "font-roboto font-medium text-[0.875rem] leading-[1.25rem] tracking-[0.00625rem]",
            {
              disabledButtonTextColor: disabled,
            }
          )}
        >
          {children}
        </span>
      )}
      {endIcon && (
        <div
          className={clsx("buttonIconColor", "ml-2", {
            disabledButtonTextColor: disabled,
          })}
        >
          {endIcon}
        </div>
      )}
    </button>
  );
}
