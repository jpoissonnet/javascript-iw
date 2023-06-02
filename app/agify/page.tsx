"use client";
import React from "react";

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
      <form className={"flex flex-col justify-center items-center gap-10"}>
        <h1>Quel est l&apos;âge de ton prénom ?</h1>
        <div className={"flex justify-between gap-5"}>
          <input
            type="text"
            placeholder="Elisabeth"
            id="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className={"text-black outline-none rounded-md p-2"}
          />
          <button
            type="button"
            value="Valider"
            className={
              "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            }
            onClick={() => {
              fetchAge();
            }}
          >
            Valider
          </button>
        </div>
        <i className={"m-[20px]"}>
          Ces données sont générées avec l&apos;API{" "}
          <a href="https://agify.io/" target="_blank">
            Agify
          </a>
          .
        </i>
      </form>

      <article
        className={
          "bg-gray-100 rounded-md shadow-xl text-black p-5 " +
          (data.age === null ? "hidden" : undefined)
        }
      >
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
