import React from "react";
import "../../css/style.css";

type Props = { params: { id: string }; searchParams: { name: string } };

const Page = async ({ params: { id }, searchParams }: Props) => {
  const chapters = await fetch(
    "https://the-one-api.dev/v2/book/" + id + "/chapter"
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));
  return (
    <>
      <header className={"text-center bg-[#000000B2] p-6"}>
        <h1>{searchParams.name}</h1>
        <h2>Liste des chapitres</h2>
      </header>
      <section>
        <ol className={"list-decimal bg-[#000000B2] p-8"}>
          {chapters.docs?.map(
            (chapter: { _id: string; chapterName: string }) => (
              <li key={chapter._id}>{chapter.chapterName}</li>
            )
          )}
        </ol>
      </section>
    </>
  );
};

export default Page;
