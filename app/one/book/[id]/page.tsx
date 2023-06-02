import React from "react";
import "../../css/style.css";

type Props = { params: { id: string }; searchParams: { name: string } };

const Page = async ({ params: { id }, searchParams }: Props) => {
  const chapters = await fetch(
    "https://the-one-api.dev/v2/book/" + id + "/chapter"
  ).then((response) => response.json());
  return (
    <>
      <header>
        <h1>{searchParams.name}</h1>
        <h2>Liste des chapitres</h2>
      </header>
      <section>
        <ol>
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
