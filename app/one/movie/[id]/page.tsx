import React from "react";
import "../../css/style.css";

type Props = { params: { id: string }; searchParams: { name: string } };

const Page = async ({ params: { id }, searchParams }: Props) => {
  const quotes = await fetch(`https://the-one-api.dev/v2/movie/${id}/quote`, {
    headers: {
      Authorization: "Bearer pVMmFVyTQmwApukmrkDl",
    },
  })
    .then((response) => response.json())
    .then((data) => data.docs);
  return (
    <>
      <header className={"text-center bg-[#000000B2] p-6"}>
        <h1>{searchParams.name}</h1>
        <h2>Liste des citations</h2>
      </header>
      <section>
        {quotes.length > 0 ? (
          <ul
            className={
              "max-h-[50vh] overflow-auto p-5 m-5 divide-y-2 backdrop-filter backdrop-blur-xl backdrop-brightness-75 border-2 border-gray-300 rounded-md"
            }
          >
            {quotes.map((quote: { _id: string; dialog: string }) => (
              <li key={quote._id}>{quote.dialog}</li>
            ))}
          </ul>
        ) : (
          <p className={"text-center text-2xl font-bold text-red-500"}>
            Aucune citation trouvée
          </p>
        )}
      </section>
    </>
  );
};

export default Page;
