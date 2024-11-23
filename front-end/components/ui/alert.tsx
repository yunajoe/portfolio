import { cva, type VariantProps } from "class-variance-authority";

const alertVariants = cva("base-alert", {
  defaultVariants: {
    variant: "default",
  },
  variants: {
    variant: {
      default: {
        size: "medium",
        color: "primary",
      },
      size: {
        small: "button-small",
        medium: "button-medium",
        large: "button-large",
      },
      color: {
        primary: "button-primary",
        secondary: "button-secondary",
      },
    },
  },
});

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

function Alert({ className, variant, ...props }: AlertProps) {
  return <div className={alertVariants({ variant })} {...props}></div>;
}

export default Alert;
