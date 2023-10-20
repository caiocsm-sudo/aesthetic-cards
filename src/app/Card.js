import styles from "./Card.module.css";

export default function Card({ title, content, image }) {
  return (
    <div className={styles.cardContainer}>
      <img src={image} alt="Card image" className={styles.image} />
      <div className={styles.textContent}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  );
}
