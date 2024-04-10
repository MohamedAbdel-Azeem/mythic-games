import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import GameRating from "../components/GameRating";
import ImageSlider from "../components/ImageSlider";
import Chip from "@mui/material/Chip";
import Icon from '@mdi/react';
import { mdiPlus,mdiDelete, mdiArrowLeft } from '@mdi/js';
import { useDispatch,useSelector } from "react-redux";
import {addToCart,removeFromCart} from "../redux/cartSlice.js"

export default function GamePage(){

    let dispatch = useDispatch();
    let cartSlice = useSelector((state) => state.cart);

    const location = useLocation();
    const game = location.state;

    const isAdded = cartSlice.cart.some((g) => g.id === game.id);
    
    return (
        <div className="flex flex-col bg-primary h-screen text-textColor overflow-x-hidden">
            <Header isTransparent={false}/>
            <div className="flex flex-col py-10 justify-center items-center gap-4">
                <div className="w-full flex justify-start items-center px-10">
                    <Icon path={mdiArrowLeft} size={1} className="hover:text-linkHover transition-colors duration-300 cursor-pointer" onClick={()=> window.history.back()}/>
                </div>
                <h1 className="text-4xl font-bold">{game.name}</h1>
                <GameRating value={game.rating}/>
                <div className="px-16 flex flex-col items-center">
                    <h2 className="text-2xl font-bold my-3">Overview</h2>
                    <div className="md:size-96 flex justify-center items-center">
                        <ImageSlider images={game['short_screenshots']}/>
                    </div>
                </div>
                <div className="mt-10 mb-3 flex flex-wrap justify-center items-center">
                    {
                        game.genres.map((genre: any) => {
                            return <Chip label={genre.name} className="m-1 text-textColor" size="medium" color="secondary" variant="filled" key={genre.id}/>;
                        })
                    }
                </div>
                {
                    ! isAdded && 
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-textColor p-2 rounded-md flex items-center justify-center" onClick={()=> dispatch(addToCart(game))}>
                        <Icon path={mdiPlus} size={1}/>
                        Add to Cart
                    </button>
                }
                {
                    isAdded && 
                    <button className="bg-red-600 hover:bg-red-700 text-textColor p-2 rounded-md flex items-center justify-center" onClick={()=> dispatch(removeFromCart(game))}>
                        <Icon path={mdiDelete} size={1}/>
                        Remove from Cart
                    </button>
                }
                
            </div>
        </div>
    );
}

