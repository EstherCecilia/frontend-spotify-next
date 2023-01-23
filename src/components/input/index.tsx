import Input from "@mui/joy/Input";
import styles from "@/styles/input.module.scss";
import { text } from "node:stream/consumers";

type InputComponentProps = {
  placeholder?: string;
  value: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputComponent: React.FC<InputComponentProps> = ({
  type = "text",
  value,
  placeholder,
  onChange,
}) => {
  return (
    <Input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
