import resumePDF from "../../../assets/resume/Tarang _Sinha_compressed.pdf";
import styles from "./Resume.module.css";

export const Resume = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>My Resume</h2>
      <div className={styles.pdfContainer}>
        <iframe
          src={resumePDF}
          title="Resume"
          className={styles.pdfViewer}
        ></iframe>
      </div>
      <a href={resumePDF} download className={styles.downloadButton}>
        Download Resume
      </a>
    </div>
  );
};
