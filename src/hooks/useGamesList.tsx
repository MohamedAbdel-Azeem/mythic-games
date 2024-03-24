import { useState,useEffect } from "react";

type GameProps = {
    QueryType: "Normal" | "Trending" ;
};

export const useGamesList = (
    { QueryType }: GameProps = { QueryType: "Normal" }
) => {

    const url = getUrl(QueryType);

    const [gamesList, setGamesList] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url, { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setGamesList(response.results))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
    },[]);

    return { gamesList, loading, error };
}

function getUrl(QueryType: GameProps["QueryType"]) : string{
    if (QueryType === "Trending") {
        return "https://api.rawg.io/api/games?key=ca19ff26425d42c2b47b413aa4a2de2a&ordering=-added&dates=2022-01-01,2023-12-31";
    }
    return "https://api.rawg.io/api/games?key=ca19ff26425d42c2b47b413aa4a2de2a";
}