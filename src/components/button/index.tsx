import Button from "@mui/joy/Button";
import styles from "@/styles/button.module.scss";
import React from "react";

type ButtonComponentProps = {
  outline?: boolean;
  label: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  outline,
  label,
  onClick,
}) => {
  return (
    <Button
      className={`${styles.button} ${
        outline ? styles.outline : styles.complete
      }`}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};
