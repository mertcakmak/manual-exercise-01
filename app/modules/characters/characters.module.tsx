/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { JSX, useEffect, useState, useCallback, useRef } from "react";

const CharactersModule = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);
  const [query, setQuery] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const getData = useCallback(async () => {
    await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}${
        searchTerm ? `&name=${searchTerm}` : ""
      }`,
    ).then(async (res) => {
      const resData: any = await res.json();
      setData((prev: any) => [...prev, ...resData.results]);
      setHasNextPage(!!resData.info.next);
    });
  }, [page, searchTerm]);

  //   const getData = async () => {
  //     await fetch(
  //       `https://rickandmortyapi.com/api/character?page=${page}${
  //         searchTerm ? `&name=${searchTerm}` : ""
  //       }`,
  //     ).then(async (res) => {
  //       const resData: any = await res.json();
  //       setData((prev: any) => [...prev, ...resData.results]);
  //       setHasNextPage(!!resData.info.next);
  //     });
  //   };

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    const to = setTimeout(() => {
      if (searchTerm !== query.trim()) {
        setSearchTerm(query.trim());
        setData([]);
        setPage(1);
      }
    }, 500);

    return () => clearTimeout(to);
  }, [query, searchTerm]);

  return (
    <div className="p-3">
      <h1>Characters</h1>

      <div className="m-3 p-3 bg-gray-50">
        <input
          type="text"
          value={query}
          className="border"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div>
        {data.map((item: any) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
      {hasNextPage && (
        <button
          className="p-2 bg-gray-900 text-white cursor-pointer"
          onClick={() => {
            setPage((prev) => prev + 1);
          }}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default CharactersModule;
