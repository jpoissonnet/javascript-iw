"use client";
import React from "react";
import "./css/style.css";

const Page = () => {
  const [firstname, setFirstname] = React.useState("");
  const [data, setData] = React.useState({
    age: null,
    count: null,
    name: null,
  });

  function fetchAge() {
    fetch(`https://api.agify.io/?name=${firstname}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }

  return (
    <>
      <form>
        <h1>Quel est l&apos;âge de ton prénom ?</h1>
        <div>
          <input
            type="text"
            placeholder="Elisabeth"
            id="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <button
            type="button"
            value="Valider"
            onClick={() => {
              fetchAge();
            }}
          >
            Valider
          </button>
        </div>
        <i>
          Ces données sont générées avec l&apos;API{" "}
          <a href="https://agify.io/" target="_blank">
            Agify
          </a>
          .
        </i>
      </form>

      <article className={data.age === null ? "hide" : undefined}>
        <h2>
          D&apos;après Agify, avec le prénom {data.name} vous avez {data.age}{" "}
          ans
        </h2>
        <p>
          Cela a été demandé <strong>{data.count}</strong> fois.
        </p>
      </article>
    </>
  );
};

export default Page;
