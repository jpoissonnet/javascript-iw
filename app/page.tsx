import React from "react";
import Link from "next/link";

const Home = () => {
  const exercices = ["agify", "ajax", "one"];
  return (
    <div
      className={
        "flex flex-col items-center justify-around h-[100vh] after:-z-10 after:absolute after:w-full after:min-h-[100vh] after:bg-cover after:bg-center after:bg-no-repeat after:bg-fixed after:bg-gradient-to-r after:from-blue-400 after:to-purple-500"
      }
    >
      <header>
        <h1 className={"text-4xl font-bold"}>List of JS exercices</h1>
      </header>
      <section>
        <ul className={"flex flex-col flex-wrap justify-around h-[50vh]"}>
          {exercices.map((exercice) => (
            <li key={exercice} className={"m-2"}>
              <Link href={"/" + exercice} className={"text-3xl"}>
                {exercice}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
