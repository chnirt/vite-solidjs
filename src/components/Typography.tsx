import { cva, VariantProps } from "class-variance-authority";
import classNames from "classnames";

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

    compoundVariants: [],
  }
);

export interface TypographyProps
  extends VariantProps<typeof TypographyVariants> {
  className?: string;
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  className,
  variant = "dl",
  weight = "normal",
  children,
  ...props
}) => {
  return (
    <span
      className={classNames(TypographyVariants({ variant, weight }), className)}
      {...props}
    >
      {children}
    </span>
  );
};

export default Typography;
