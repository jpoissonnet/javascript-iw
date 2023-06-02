"use client";
import React from "react";
import "./css/style.css";

const Page = () => {
  const [dataType, setDataType] = React.useState(1);
  const [result, setResult] = React.useState("<em>Résultats...</em>");

  function fetchDataAndFill() {
    switch (dataType) {
      case 1:
        fetch("http://localhost:3000/data/1-get-html-article.html")
          .then((response) => response.text())
          .then((data) => setResult(data));
        break;
      case 2:
        fetch("http://localhost:3000/data/2-get-contacts-list.json")
          .then((response) => response.json())
          .then((data) => {
            let html = "<ul>";
            data.forEach((contact: { firstName: string; phone: string }) => {
              html += `<li>${contact.firstName + " " + contact.phone}</li>`;
            });
            setResult(html);
          });
        break;
      case 3:
        fetch("http://localhost:3000/data/3-get-html-movies.html")
          .then((response) => response.text())
          .then((data) => setResult(data));
        break;
      case 4:
        fetch("http://localhost:3000/data/4-get-json-movies.json")
          .then((response) => response.json())
          .then((data) => {
            let html = "<ul class='movie-list'>";
            data.forEach(
              (movie: { title: string; duration: number; cover: string }) => {
                html += `<li>
              <img src="http://localhost:3000/images/${movie.cover}">
                <p>
                  <strong>${movie.title}</strong> -
                  <em>${movie.duration}</em>
                </p>
              </li>`;
              }
            );
            setResult(html);
          });
        break;
      default:
        break;
    }
  }

  return (
    <>
      <header>
        <h1>Exercice AJAX</h1>
      </header>

      <main className={"w-1/2"}>
        <section
          id="target"
          className={
            "flex flew-wrap border border-white p-4 min-w-[4px] rounded"
          }
          dangerouslySetInnerHTML={{ __html: result }}
        ></section>
        <form className={"mt-2"}>
          <fieldset className={"border border-white p-4 min-w-[4px] rounded"}>
            <legend>Votre choix</legend>
            <ul className={"my-3"}>
              <li>
                <input
                  type="radio"
                  name="what"
                  value={dataType}
                  id="get-html-data"
                  onChange={() => setDataType(1)}
                  defaultChecked
                />
                <label htmlFor="get-html-data">
                  Récupérer un contenu HTML du serveur
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="what"
                  value={dataType}
                  id="get-json-data"
                  onChange={() => setDataType(2)}
                />
                <label htmlFor="get-json-data">
                  Récupérer un contenu JSON du serveur
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="what"
                  id="get-html-movies"
                  value={dataType}
                  onChange={() => setDataType(3)}
                />
                <label htmlFor="get-html-movies">Récupérer les films</label>
              </li>
              <li>
                <input
                  type="radio"
                  name="what"
                  id="get-json-movies"
                  value={dataType}
                  onChange={() => setDataType(4)}
                />
                <label htmlFor="get-json-movies">
                  Récupérer les films en JSON
                </label>
              </li>
              <li className={"mt-5"}>
                <button
                  type="button"
                  className={"border border-2 p-3 rounded-md border-white"}
                  onClick={fetchDataAndFill}
                >
                  Exécuter
                </button>
              </li>
            </ul>
          </fieldset>
        </form>
      </main>
    </>
  );
};

export default Page;
