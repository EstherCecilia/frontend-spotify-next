import React from "react";
import styles from "@/styles/check.module.scss";

type CheckboxComponentProps = {
  label: string;
  value: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CheckboxComponent: React.FC<CheckboxComponentProps> = ({
  value,
  label,
  onChange,
}) => {
  return (
    <div className={styles.check}>
      <input type="checkbox" checked={value} onChange={onChange} />
      <label>{label}</label>
    </div>
  );
};
