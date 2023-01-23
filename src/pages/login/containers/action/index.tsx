import { ButtonComponent } from "@/components/button";
import styles from "@/styles/action.module.scss";

export const ActionContainer = () => {
  return (
    <section className={styles.action}>
      <hr />
      <span>{`Don't have an account?`}</span>
      <ButtonComponent outline label="SIGN UP FOR SPOTIFY" />
    </section>
  );
};
