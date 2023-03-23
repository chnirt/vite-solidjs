import { ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import clsx from 'clsx'
import Typography from "./Typography";

export type BadgeVariantProps = VariantProps<typeof BadgeVariants>;
export interface IBadge {
  className?: string;
  max?: number;
  badgeContent?: number;
  children: ReactNode;
}
/**
 * Badge
 */
export interface BadgeProps extends BadgeVariantProps, IBadge { }
const BadgeVariants = cva(
  /* Badge base style */
  "basefont",
  {
    variants: {
      /* Badge variant */
      variant: {
        dl: "dl",
        dm: "dm",
        ds: "ds",
        hl: "hl",
        hm: "hm",
        hs: "hs",
        tl: "tl",
        tm: "tm",
        ts: "ts",
        ll: "ll",
        lm: "lm",
        ls: "ls",
        bl: "bl",
        bm: "bm",
        bs: "bs",
      },

      /* Badge weight */
      weight: {
        thin: "ft",
        extralight: "fxl",
        light: "fl",
        normal: "fn",
        medium: "fm",
        semibold: "fsb",
        bold: "fb",
        extrabold: "fxb",
        black: "fbl",
      },
    },

    // defaults
    defaultVariants: {
      variant: "dl",
      weight: "normal",
    },
  }
);

export default function Badge({
  className,
  badgeContent,
  max = 99,
  children,
}: BadgeProps) {
  return (
    <div className={clsx("relative", className)}>
      {Number(badgeContent) > 0 && (
        <div
          className={clsx(
            "absolute -top-2 -right-2 z-10",
            "min-w-[1rem] h-4 px-1 rounded-full inline-flex justify-center items-center",
            "badgeBackgroundColor"
          )}
        >
          <Typography className={"badgeTextColor"} variant={"ls"}>
            {Number(badgeContent) > max
              ? String(max).concat("+")
              : badgeContent}
          </Typography>
        </div>
      )}
      <div className="badgeIconColor">{children}</div>
    </div>
  );
}
