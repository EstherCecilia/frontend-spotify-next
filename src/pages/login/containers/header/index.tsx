import { LogoSpotify } from "@/assets/svg/logo";
import styles from "@/styles/header.module.scss";

export const HeaderContainer = () => {
  return (
    <section className={styles.container}>
      <LogoSpotify />
      <hr />
    </section>
  );
};
