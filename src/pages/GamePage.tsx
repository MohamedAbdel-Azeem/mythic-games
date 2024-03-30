import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import GameRating from "../components/GameRating";

export default function GamePage(){
    const location = useLocation();
    const game = location.state;
    return (
        <div className="flex flex-col bg-primary h-screen text-textColor">
            <Header isTransparent={false}/>
            <div className="flex flex-col py-4 justify-center items-center gap-4">
                <h1 className="text-4xl font-bold">{game.name}</h1>
                <GameRating value={game.rating}/>
                <div>
                    <h2 className="text-2xl font-bold">Overview</h2>
                    
                </div>
            </div>
        </div>
    );
}