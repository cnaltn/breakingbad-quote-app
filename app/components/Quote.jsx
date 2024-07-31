import React from "react";
import { Suspense } from "react";
import { Button } from "./Button";

const fetchQuotes = async () => {
  const res = await fetch("http://localhost:3000/api/breakingbad", {
    cache: "no-cache",
  });
  return res.json();
};

export const Quote = async () => {
  const myQuotes = await fetchQuotes();
  return (
    <div className="flex text-center h-full w-1/2 items-center justify-center flex-col gap-y-10">
      <Suspense fallback={"Loading"}>
        {myQuotes.map((quote) => (
          <div key={quote.quote} className=" flex flex-col gap-y-4">
            <p className="text-4xl font-bold text-white">{quote.quote}</p>
            <p className="font-medium text-amber-300">- {quote.author} -</p>
          </div>
        ))}
      </Suspense>
      <Button title="Refresh"></Button>
    </div>
  );
};
