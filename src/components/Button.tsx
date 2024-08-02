import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants';

const buttonVariants = tv({
    base: "border-2 flex items-center justify-center gap-2",
    variants: {
      variant: {
        primary: "font-bold bg-zinc-50 text-[#628280] rounded hover:bg-[#628280] hover:text-zinc-50",
        secondary: "bg-transparent",
        third: "bg-transparent hover:bg-[#628280] hover:text-zinc-50",
      },
  
      size: {
        default: "px-4 py-2",
        padding: "py-3 px-4"
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  });

interface buttonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export const Button = ({ children, variant, size, ...props }: buttonProps) => {
  return (
    <button {...props} className={buttonVariants({ variant: variant, size })}>
        {children}
    </button>
  )
}
