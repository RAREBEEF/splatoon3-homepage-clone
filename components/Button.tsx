import { PropsWithChildren, ReactNode } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface Props {
  children: ReactNode;
  width: "sm" | "md" | "lg";
}

const Button: React.FC<Props> = ({ children, width }) => {
  return (
    <button className={classNames(styles.button, styles[width])}>
      {children}
    </button>
  );
};

export default Button;
