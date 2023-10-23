import PocketBase from "pocketbase";
import Card from "../Card";

const pb = new PocketBase("http://127.0.0.1:8090");

const getCards = async () => {
  const res = await fetch("http://127.0.0.1:8090/api/collections/aestheticCards/records");
  const cards = await res.json();
  return cards;
};

export default async function Logged() {

  const cardList = await getCards();

  console.log(cardList);

  return (
    <>
    { cardList.map(card => <> { card.title } </>) }
      <Card title={cardList.title} content={cardList.content} image={cardList.field}/>
    </>
  );
}
