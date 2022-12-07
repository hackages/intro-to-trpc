import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState, type ChangeEvent } from "react";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const [term, updateTerm] = useState("");
  const { data: events, mutate: searchEvents } =
    trpc.events.search.useMutation();

  useEffect(() => {
    searchEvents({ term });
  }, [term, searchEvents]);

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
            {events?.map((event) => (
              <>
                <li
                  className="my-2 rounded border p-5 font-medium text-white"
                  key={event.id}
                >
                  {event.title}
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
