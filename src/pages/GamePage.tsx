import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import GameRating from "../components/GameRating";
import ImageSlider from "../components/ImageSlider";
import Chip from "@mui/material/Chip";
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';

export default function GamePage(){
    const location = useLocation();
    const game = location.state;
    return (
        <div className="flex flex-col bg-primary h-screen text-textColor overflow-x-hidden">
            <Header isTransparent={false}/>
            <div className="flex flex-col py-10 justify-center items-center gap-4">
                <h1 className="text-4xl font-bold">{game.name}</h1>
                <GameRating value={game.rating}/>
                <div className="px-16 flex flex-col items-center">
                    <h2 className="text-2xl font-bold my-3">Overview</h2>
                    <div className="md:size-96 flex justify-center items-center">
                        <ImageSlider images={game['short_screenshots']}/>
                    </div>
                </div>
                <div className="mt-10 mb-0">
                    {
                        game.genres.map((genre: any) => {
                            return <Chip label={genre.name} className="m-1 text-textColor" size="medium" color="secondary" variant="filled" key={genre.id}/>;
                        })
                    }
                </div>
                <button className="bg-emerald-600 hover:bg-emerald-700 text-textColor p-2 rounded-md flex items-center justify-center">
                    <Icon path={mdiPlus} size={1}/>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}