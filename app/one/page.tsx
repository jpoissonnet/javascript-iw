import React from "react";
import "./css/style.css";
import Link from "next/link";

const Page = async () => {
  const books = await fetch("https://the-one-api.dev/v2/book")
    .then((response) => response.json())
    .then((data) => {
      return data.docs;
    });
  const movies = await fetch("https://the-one-api.dev/v2/movie", {
    headers: {
      Authorization: "Bearer pVMmFVyTQmwApukmrkDl",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data.docs;
    });
  return (
    <>
      <header className={"text-center bg-[#000000B2] p-6"}>
        <h1>The One API</h1>
        <p>
          Afficher la liste des livres Seigneurs des Anneaux via{" "}
          <a href="https://the-one-api.dev/">The One API</a>.
        </p>
      </header>

      <section id="content">
        <ul className={"list mt-[50px] pl-0 flex gap-[50px]"}>
          {books.map((book: { _id: string; name: string }) => (
            <li key={book._id}>
              <Link href={"/one/book/" + book._id + "?name=" + book.name}>
                {book.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <header className={"text-center bg-[#000000B2] p-6 mt-3"}>
        <p>
          Liste des films Seigneurs des Anneaux via{" "}
          <a href="https://the-one-api.dev/">The One API</a>.
        </p>
      </header>
      <section>
        <ul
          className={
            "list mt-[50px] mx-auto pl-0 flex flex-wrap w-1/2 gap-[50px] justify-around"
          }
        >
          {movies?.map((movie: { _id: string; name: string }) => (
            <li key={movie._id}>
              <Link href={"/one/movie/" + movie._id + "?name=" + movie.name}>
                {movie.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Page;
