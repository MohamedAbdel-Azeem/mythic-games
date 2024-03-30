import { useState,useEffect } from "react";

type GameProps = {
    QueryType?: "Games" | "Trending" ;
    pageNumber: number;
};

type GamesListState = {
  [pageNumber: string]: any;
};

export const useGamesList = (
    { QueryType , pageNumber }: GameProps = { QueryType: "Games" , pageNumber: 1}
) => {
    const url = getAPIUrl(QueryType, pageNumber);
    const [gamesList, setGamesList] = useState<GamesListState>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (gamesList[url]) {
            setLoading(false);
        } else {
            setLoading(true);
            fetch(url, { mode: "cors" })
            .then((response) => {
                if (response.status >= 400) {
                throw new Error("server error");
                }
                return response.json();
            })
            .then((response) => {
                const responseResultsWithPrices = response.results.map((game : any) => {
                    const randomPrice = Math.floor(Math.random() * (70 - 5 + 1) + 5);
                    game.price = randomPrice;
                    const hasDiscount = Math.random() < 0.5; // 50% chance of having a discount
                    if (hasDiscount) {
                        const discount = Math.floor(Math.random() * (60 - 10 + 1) + 10);
                        game.hasDiscount = true;
                        game.discountPrice = discount;
                    } else {
                        game.hasDiscount = false;
                        game.discountPrice = 0;
                    }
                    return game;
                });
                setGamesList((prevGamesList) => ({
                ...prevGamesList,
                [url]: responseResultsWithPrices,
                }));
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
        }
    }, [QueryType, pageNumber, gamesList]);

    return { gamesList: gamesList[url], loading, error };
};

function getAPIUrl(QueryType: GameProps["QueryType"] , pageNumber : number) : string{
    if (QueryType === "Trending") {
        return "https://api.rawg.io/api/games?key=ca19ff26425d42c2b47b413aa4a2de2a&ordering=-added&dates=2022-01-01,2023-12-31";
    }
    return `https://api.rawg.io/api/games?key=ca19ff26425d42c2b47b413aa4a2de2a&page=${pageNumber}`;
}