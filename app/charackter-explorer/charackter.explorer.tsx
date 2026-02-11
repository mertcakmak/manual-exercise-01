"use client";
import { JSX, useState, useEffect, useCallback } from "react";

const apiBaseUrl = `https://rickandmortyapi.com/api/character`;

type TCharacterStatus = "Alive" | "Dead" | "unknown";
type TCharacterGender = "Female" | "Male" | "Genderless" | "unknown";

interface ILocation {
  name: string;
  url: string;
}

interface ICharacter {
  id: number;
  name: string;
  status: TCharacterStatus;
  species: string;
  type: string;
  gender: TCharacterGender;
  origin: ILocation;
  location: ILocation;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

interface IResponseData {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: ICharacter[];
}

type TStatus = "idle" | "loading" | "success" | "error";

const CharacterExplorer = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const [status, setStatus] = useState<TStatus>("idle");
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prevPage, setPrevPage] = useState<string | null>(null);
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  const resetHandler = () => {
    setPage(1);
    setCharacters([]);
    setNextPage(null);
    setPrevPage(null);
  };

  const getData = useCallback(async () => {
    try {
      setStatus("loading");
      const res = await fetch(`${apiBaseUrl}?page=${page}`);
      const responseData: IResponseData = await res.json();
      setStatus("success");
      setCharacters(responseData.results);
      setNextPage(responseData.info.next);
      setPrevPage(responseData.info.prev);
    } catch {
      resetHandler();
    }
  }, [page]);

  useEffect(() => {
    (async () => {
      await getData();
    })();
  }, [getData]);

  return (
    <div>
      <h1>Character Explorer</h1>
      {status === "success" && (
        <>
          {characters.length === 0 ? (
            <div>No record found</div>
          ) : (
            <div>
              {characters.map((item) => {
                return <div key={item.id}>{item.name}</div>;
              })}
            </div>
          )}
        </>
      )}
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>error</div>}

      <div className="flex gap-3">
        {prevPage && (
          <button
            className="bg-gray-800 text-white p-3 text-sm"
            onClick={() => setPage((prev) => prev - 1)}
            disabled={status !== "success"}
          >
            Prev
          </button>
        )}
        {nextPage && (
          <button
            className="bg-gray-800 text-white p-3 text-sm"
            onClick={() => setPage((prev) => prev + 1)}
            disabled={status !== "success"}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default CharacterExplorer;
