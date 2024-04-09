import { useGamesList } from "./useGamesList";

export default function useGetRandomGame() {
    const games = useGamesList();
    return games[Math.floor(Math.random() * games.length)];
}