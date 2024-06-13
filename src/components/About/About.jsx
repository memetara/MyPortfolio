import { getImageUrl } from "../../util";
import styles from "./About.module.css";
import { Resume } from "../About/Resume";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.conteny}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="her-img"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="cursor icon" />
            <div>
              <h3>Software Developer</h3>
              <p>
                With expertise in Node.js, React, and AWS. I have built scalable
                applications like an e-commerce platform and real-time chat app,
                ensuring high performance and availability. I hold a B.E. in
                Computer Science and an AWS Solutions. Check out my projects on
                GitHub and connect with me on LinkedIn!
              </p>
            </div>
          </li>
        </ul>
        <Resume />
      </div>
    </section>
  );
};
