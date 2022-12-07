import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState, type ChangeEvent } from "react";

const Home: NextPage = () => {
  const [term, updateTerm] = useState("");
  const [books, updateBooks] = useState([]);

  useEffect(() => {
    fetch("/api/events?search=" + term)
      .then((res) => res.json())
      .then((books) => {
        updateBooks(books);
      });
  }, [term]);

  const onSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    updateTerm(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Events by Hackages</title>
        <meta name="description" content="Bookstore by Hackages" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-center text-2xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Search Events by
            <br />
            <span className="text-[hsl(280,100%,70%)]">Hackages</span>
          </h1>

          <input
            onChange={onSearch}
            className="w-full rounded border border-[hsl(280,100%,70%)] p-2 text-[hsl(280,100%,70%)]"
            placeholder="Search for an event"
          />
          <ul className="w-full">
            {books?.map((book) => (
              <>
                <li
                  className="my-2 rounded border p-5 font-medium text-white"
                  key={book.id}
                >
                  {book.title}
                </li>
              </>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
