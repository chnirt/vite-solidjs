import { ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import classNames from "classnames";

export type TypographyVariantProps = VariantProps<typeof TypographyVariants>;
export interface ITypography {
  className?: string;
  children: ReactNode;
}
/**
 * Typography
 */
export interface TypographyProps extends TypographyVariantProps, ITypography {}
const TypographyVariants = cva(
  /* Typography base style */
  "basefont",
  {
    variants: {
      /* Typography variant */
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

      /* Typography weight */
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

export default function Typography({
  className,
  variant = "dl",
  weight = "normal",
  children,
}: TypographyProps) {
  return (
    <span
      className={classNames(TypographyVariants({ variant, weight }), className)}
    >
      {children}
    </span>
  );
}
