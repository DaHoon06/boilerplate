import { LoginForm } from "@/features/login-form/ui";
import styles from "./page.module.scss";

export default function LoginPage() {
  return (
    <div className={styles.loginContainer}>
      <section>이미지 캐러셀</section>
      <LoginForm />
    </div>
  );
}
