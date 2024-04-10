import { useSelector } from "react-redux";


export default function CartDrawerElements() {
    const cartSlice = useSelector((state) => state.cart);
    return (
        <div className="h-full px-16 py-4 bg-primary">
            {   cartSlice.cart.length !== 0 &&
                cartSlice.cart.map((game) => {
                    return (
                        <div key={game.id} className="flex justify-between items-center p-2 border-b border-gray-300 text-textColor">
                            <img src={game.background_image} alt={game.name} className="w-20 h-20"/>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-lg font-bold">{game.name}</h2>
                                <h3 className="text-sm">{game.price} $</h3>
                            </div>
                        </div>
                    );
                })
            }
            {
                cartSlice.cart.length === 0 &&
                <h1 className="text-xl text-textColor">Cart is Empty, Add some Games?</h1>
            }
            
        </div>
    )
}