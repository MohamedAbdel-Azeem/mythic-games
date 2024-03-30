import { useLocation } from "react-router-dom";
import Header from "../components/Header";

export default function GamePage(){
    const location = useLocation();
    const game = location.state;
    console.log(game);
    return (
        <div className="flex flex-col bg-primary h-screen text-textColor">
            <Header isTransparent={false}/>
            <h1>Game Page</h1>
            <p>Game Title: {game.name}</p>
        </div>
    );
}