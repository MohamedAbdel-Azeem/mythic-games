import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import GameRating from "../components/GameRating";
import ImageSlider from "../components/ImageSlider";

export default function GamePage(){
    const location = useLocation();
    const game = location.state;
    return (
        <div className="flex flex-col bg-primary h-screen text-textColor overflow-x-hidden">
            <Header isTransparent={false}/>
            <div className="flex flex-col py-4 justify-center items-center gap-4">
                <h1 className="text-4xl font-bold">{game.name}</h1>
                <GameRating value={game.rating}/>
                <div className="px-16 flex flex-col items-center">
                    <h2 className="text-2xl font-bold my-3">Overview</h2>
                    <div className="md:size-96 flex justify-center items-center">
                        <ImageSlider images={game['short_screenshots']}/>
                    </div>
                </div>
            </div>
        </div>
    );
}