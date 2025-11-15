import * as styles from "./Button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: keyof typeof styles.buttonVariants;
  children: React.ReactNode;
}

export function Button({ variant, children, ...props }: ButtonProps) {
  return (
    <button className={styles.buttonVariants[variant]} {...props}>
      {children}
    </button>
  );
}
