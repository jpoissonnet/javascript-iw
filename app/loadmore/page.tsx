"use client";
import React from "react";
import "./style.css";

const data: { title: string; content: string; price: string }[] = [
  {
    title: "Maitre Gims",
    content: "à Marseille le 2 mai 2022",
    price: "50€",
  },
  {
    title: "Jean-Jacques Goldman",
    content: "à Paris le 8 mai 2022",
    price: "45€",
  },
  {
    title: "Céline Dion",
    content: "à Lyon le 12 mai 2022",
    price: "55€",
  },
  {
    title: "Jean-Jacques Goldman",
    content: "à Paris le 8 mai 2022",
    price: "40€",
  },
  {
    title: "Patrick Bruel",
    content: "à Marseille le 15 mai 2022",
    price: "40€",
  },
  {
    title: "Céline Dion",
    content: "à Lyon le 12 mai 2022",
    price: "45€",
  },
  {
    title: "Patrick Bruel",
    content: "à Marseille le 15 mai 2022",
    price: "55€",
  },
];

function Card(props: {
  item: { title: string; content: string; price: string };
}) {
  return (
    <li>
      <strong>{props.item.title}</strong>
      <p>{props.item.content}</p>
      <span>{props.item.price}</span>
    </li>
  );
}

const Page = () => {
  const [numberedDisplayed, setNumberedDisplayed] = React.useState(3);

  return (
    <>
      <h1>Liste de concert</h1>
      <p>Avec un bouton de chargement pour voir plus d'éléments.</p>
      <ul id="content">
        {data.map((item, index) => {
          if (index >= numberedDisplayed) return null;
          return <Card key={index} item={item} />;
        })}
      </ul>
      <button
        onClick={() => {
          numberedDisplayed < data.length &&
            setNumberedDisplayed(numberedDisplayed + 3);
        }}
      >
        Voir plus
      </button>
      <button
        onClick={() => {
          numberedDisplayed > 3 && setNumberedDisplayed(numberedDisplayed - 3);
        }}
      >
        Voir moins
      </button>
    </>
  );
};

export default Page;
