import Header from "../components/Header";
import LoadingSpinner from "../components/LoadingSpinner";
import { useGamesList } from "../hooks/useGamesList";
import { useParams } from "react-router-dom";
import CustomPagination from "../components/CustomPagination";
import GameCard from "../components/GameCard";


export default function GamesList() {
    const { queryType , pageNumber = '1' } = useParams<{ queryType: 'Games' | 'Trending'; pageNumber: string }>();
    const { gamesList: games, loading: isLoading, error: isError } = useGamesList({ QueryType: queryType , pageNumber: parseInt(pageNumber) });

    if (isLoading) {
        return <LoadingSpinner />;
    }
    if (isError) {
        return <div>Error: {isError.toString()}</div>;
    }
    return (
        <div className="w-full h-full flex flex-col justify-start items-center bg-primary overflow-x-hidden">
            <Header isTransparent={false}/>
            <main className="flex flex-col items-center justify-center px-10 py-4">
                <h1 className="text-3xl font-bold text-textColor">{queryType}</h1>
                <div className="w-full h-full flex flex-wrap justify-center items-start gap-8 p-5">
                    {games?.map((game : any) => {
                        return (
                            <GameCard
                                key={game.id}
                                title={game.name}
                                price={game.price}
                                imageUrl={game.background_image}
                                hasDiscount={game.hasDiscount}
                                discountPercentage={game.discountPrice}
                            />
                        );
                    })}
                </div>
                {queryType === 'Games' && <CustomPagination />}
            </main>
        </div>
    );
}