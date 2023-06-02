"use client";
import React, { useEffect } from "react";
import "./style.css";

const gradientStyle =
  " center / 100px no-repeat, radial-gradient(circle, rgb(204, 31, 54) 0%, rgb(255, 174, 104) 100%)";
const Page = () => {
  /*# Méthodologie recommandée
                  
  *En partant du fait que les `li` sont déjà présentes dans le HTML...*

  Je vous recommande de suivre les étapes suivantes :

  1. Créer un tableau qui liste les 10 personnages (reprendre les mêmes noms que celles des images 😉)
  2. Au chargement de la page, on associe à chaque `li` un personnage (pour rappel, le memory fonctionne par paire donc on le fait 2 fois par personnage) en utilisant les un `data-perso` sur la `li`
  3. On ajoute un gestionnaire d'événement sur chacune des `li` pour qu'au click cela les retourne (voir dans le CSS ce qui est à notre disposition 😉)
  4. Lorsqu'on retourne une carte, on veut voir la photo du personnage (dont le nom est stocké dans la balise) *→ voir comment faire pour que la photo apparaisse pour donner vraiment l'illusion d'une carte qui se retourne*
  5. Gestion des paires :
      - si c'est la 1ere carte qu'on est en train de retourner = il faut en garder l'info
      - si c'est la 2eme carte qu'on retourne et qu'elle est égale à la 1ère, alors on veut supprimer l'événement associé qui permet de cliquer dessus
      - si les cartes retournées ne sont pas les mêmes, on désire les remettre face cachée après 2 secondes

          Evidemment, on ne peut pas retourner une 3eme carte tant que les 2 premières ne sont pas de nouveau face cachée.

  6. Ajouter une gestion du compteur de paires retournées afin de savoir combien d'essais on a mis avant de trouver toutes les paires
  7. Une fois toutes les paires retournées, afficher le résultat.*/
  useEffect(() => {
    const personnages = [
      "aragorn",
      "boromir",
      "frodon",
      "gandalf",
      "gimli",
      "legolas",
      "merry",
      "pipin",
      "sam",
      "gollum",
    ];
    const cards = document.querySelectorAll("li");
    const flippedCards: {
      first: HTMLLIElement | null;
      second: HTMLLIElement | null;
    } = { first: null, second: null };
    let tries = 0;
    function storeFlippedCard(card: HTMLLIElement) {
      tries++;
      if (flippedCards.first === null) {
        flippedCards.first = card;
      } else if (flippedCards.second === null) {
        flippedCards.second = card;
      }
      if (flippedCards.first !== null && flippedCards.second !== null) {
        if (
          flippedCards.first.getAttribute("data-perso") ===
          flippedCards.second.getAttribute("data-perso")
        ) {
          flippedCards.first.removeEventListener("click", () => {});
          flippedCards.second.removeEventListener("click", () => {});
          flippedCards.first = null;
          flippedCards.second = null;
          if(document.querySelectorAll("li:not(.flipped)").length === 0){
            document.querySelector(".result").classList.add("open");
            document.querySelector(".result strong").innerHTML = tries.toString();
          }
        } else {
          setTimeout(() => {
            flippedCards.first.classList.remove("flipped");
            flippedCards.second.classList.remove("flipped");
            flippedCards.first.style.background = "";
            flippedCards.second.style.background = "";

            flippedCards.first = null;
            flippedCards.second = null;
          }, 2000);
        }
      }
    }

    cards.forEach((card, index) => {
      card.addEventListener("click", () => {
        if (card.classList.contains("flipped")) {
          card.classList.remove("flipped");
          setTimeout(() => {
            card.style.background = "";
          }, 250);
        } else {
          card.classList.add("flipped");
          storeFlippedCard(card);
          setTimeout(() => {
            card.style.background =
              `url(/img/persos/${card.getAttribute("data-perso")}.jpeg)` +
              gradientStyle;
          }, 250);
        }
      });
      if (index < personnages.length) {
        card.setAttribute("data-perso", personnages[index]);
      } else {
        card.setAttribute(
          "data-perso",
          personnages[index - personnages.length]
        );
      }
    });
  }, []);
  return (
    <>
      <header>
        <h1>Memory</h1>
        <p>
          Règles du jeu : il faut retrouver des paires d'images le plus
          rapidement possible !
        </p>
      </header>

      <ul id="cards">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <div className="result">
        <p>
          Bravo !<br />
          Vous avez trouvé toutes les paires. Il vous aura fallu{" "}
          <strong></strong> essais !
        </p>
      </div>
    </>
  );
};
export default Page;
