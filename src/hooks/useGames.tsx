import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import {setGamesList} from "../redux/gamesSlice.js";
import getAPIUrl from "../utils/get-api-url.js";

type GameProps = {
    QueryType: "Games" | "Trending" ;
    pageNumber: number;
};


export const useGames = (
    { QueryType , pageNumber }: GameProps = { QueryType: "Games" , pageNumber: 1}
) => {
    const url = getAPIUrl(QueryType, pageNumber);
    const gamesList = useSelector((state) => state.games);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (gamesList.games[QueryType + pageNumber]) {
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
                        const discount = Math.floor(Math.random() * (60 - 10 + 1) + 10); // Number between 10 and 60
                        game.hasDiscount = true;
                        game.discountPrice = discount;
                        game.finalPrice = game.price - game.price * (discount / 100);
                    } else {
                        game.hasDiscount = false;
                        game.discountPrice = 0;
                        game.finalPrice = game.price;
                    }
                    return game;
                });
                dispatch(
                    setGamesList({
                        queryInfo: QueryType + pageNumber,
                        data: responseResultsWithPrices
                    })
                );
                setLoading(false);
            }).catch((error) => {
                setError(error);
                setLoading(false);
            });
        }
    }, [url,dispatch]);
    return { loading, error };
}



