import { InputComponent } from "@/components/input";
import { CheckboxComponent } from "@/components/checkbox";
import { ButtonComponent } from "@/components/button";
import styles from "@/styles/form.module.scss";
import { useLogin } from "@/pages/login/hooks/useLogin";

export const FormContainer = () => {
  const {
    email,
    password,
    remember,
    setEmail,
    setPassword,
    setRemember,
    onLogin,
  } = useLogin();

  return (
    <section className={styles.form}>
      <div>
        <label htmlFor="">Email address or username</label>
        <InputComponent
          placeholder="Email address or username"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
      </div>

      <div>
        <label htmlFor="">Password</label>
        <InputComponent
          placeholder="Password"
          value={password}
          type="password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
      </div>

      <a href="">Forgot your password?</a>

      <div className={styles.action}>
        <CheckboxComponent
          label="Remember me"
          value={remember}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setRemember(e.target.checked)
          }
        />
        <ButtonComponent label="LOG IN" onClick={onLogin} />
      </div>
    </section>
  );
};
