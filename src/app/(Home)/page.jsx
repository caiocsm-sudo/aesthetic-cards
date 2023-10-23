import styles from "./page.module.css";
import Card from "../Card";

const defaultCard = {
  title: "My Card",
  content: "My beautiful card that i made with this awesome app",
  image:
    "https://i.pinimg.com/736x/87/6b/a5/876ba5dee6c05c0fa3e1a21749e55084.jpg",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.presentation}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>
            Login and start
            <br />
            creating your own cards
          </h2>
          <p className={styles.parag}>
            The perfect application for you
            <br />
            to create your own custom cards
          </p>
        </div>
        <Card
          title={defaultCard.title}
          content={defaultCard.content}
          image={defaultCard.image}
        />
      </section>
    </main>
  );
}
