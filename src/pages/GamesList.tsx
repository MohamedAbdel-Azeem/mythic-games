import Header from "../components/Header";
import LoadingSpinner from "../components/LoadingSpinner";
import { useGamesList } from "../hooks/useGamesList";
import { useParams } from "react-router-dom";

export default function GamesList() {
    const { queryType = 'Games' } = useParams<{ queryType: 'Games' | 'Trending' }>();
    const { gamesList: games, loading: isLoading, error: isError } = useGamesList({ QueryType: queryType });

    if (isLoading) {
        return <LoadingSpinner />;
    }
    if (isError) {
        return <div>Error: {isError}</div>;
    }
    return (
        <div className="w-full h-full flex flex-col justify-start items-center bg-primary overflow-x-hidden">
            <Header isTransparent={false}/>
            <main className="flex flex-col items-center px-10 pt-4">
                <h1 className="text-3xl font-bold text-textColor">{queryType}</h1>
                <div className="w-full h-full flex flex-wrap justify-center items-start gap-5 p-5">
                    {games?.map((game : any) => {
                        return (
                            <div key={game.id} className="w-72 h-96 bg-gray-50 bg-opacity-25 backdrop-blur-sm rounded-md shadow-sm shadow-slate-600">
                                <img
                                    src={game.background_image}
                                    alt={game.name}
                                    className="w-full h-3/5 object-cover rounded-t-md"
                                />
                                <div className="p-2">
                                    <h2 className="text-lg font-bold">{game.name}</h2>
                                    <p className="text-sm">{game.released}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
            
        </div>
    );
}