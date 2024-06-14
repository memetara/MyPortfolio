import { getImageUrl } from "../../util";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hey! I am Tarang</h1>
        <p className={styles.description}>
          I am a Full Stack developer with 3 years of experience using React and
          NodeJS. Reach out if you would like to learn more!
        </p>
        <a
          href="mailto:tarangsinha1999@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Her"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
