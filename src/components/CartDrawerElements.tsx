import { useSelector, useDispatch } from "react-redux";
import Icon from '@mdi/react';
import { mdiCash, mdiDelete } from '@mdi/js';
import { removeFromCart } from "../redux/cartSlice.js";
import { useState, useEffect } from "react";

export default function CartDrawerElements() {
    const cartSlice = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const newTotalPrice = cartSlice.cart.reduce((total, game) => total + game.finalPrice, 0);
        setTotalPrice(newTotalPrice);
    }, [cartSlice.cart]);

    const removeElement = (game) => {
        dispatch(removeFromCart(game));
        const newPrice = totalPrice - game.finalPrice;
        setTotalPrice(newPrice);
    }

    return (
        <div className="h-full px-16 py-4 bg-primary">
            {cartSlice.cart.length !== 0 ?
                <div className="flex flex-col justify-between h-full pb-10">
                    <div className="overflow-y-auto">
                        {cartSlice.cart.map((game) => (
                            <div key={game.id} className="flex justify-start gap-5 items-center p-2 border-b border-gray-300 text-textColor">
                                <img src={game.background_image} alt={game.name} className="w-20 h-20"/>
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-lg font-bold">{game.name}</h2>
                                    <h3 className="text-sm">$ {game.finalPrice}</h3>
                                </div>
                                <button onClick={()=>removeElement(game)}>
                                    <Icon path={mdiDelete} size={1} className="text-red-400 hover:scale-110 transition-transform duration-500" />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h2 className="text-lg  text-textColor border-b border-slate-100">Total Price: $ {Number(totalPrice).toFixed(2)}</h2>
                        <button className="text-textColor p-2 rounded-md bg-emerald-800 flex justify-center items-center">
                            <Icon path={mdiCash} size={1}/>
                            <span className="text-textColor">Proceed to Checkout</span>
                        </button>
                    </div>
                </div>
            :
                <h1 className="text-xl text-textColor">Cart is Empty, Add some Games?</h1>
            }
        </div>
    );
}