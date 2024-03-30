

type GameCardProps = {
    title: string;
    price: number;
    imageUrl: string;
    hasDiscount: boolean;
    discountPercentage?: number;
}

export default function GameCard(
    { title, price, imageUrl, hasDiscount, discountPercentage }: GameCardProps
){
    return (
        <div className="w-64 h-80 flex flex-col gap-5 rounded-t-md">
            <div className="w-full h-3/5 relative">
                <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-md"/>
                <div className="absolute inset-0 bg-slate-100 opacity-0 hover:opacity-15 transition-opacity duration-200 rounded-md"></div>
            </div>
            <div className="p-2 text-textColor">
                <h2 className="text-lg font-bold">{title}</h2>
                <div className="flex flex-row gap-2 mt-2">
                    {hasDiscount && <p className="text-xs bg-red-500 p-1 rounded-md text-center">-{discountPercentage}%</p>}
                    <p className={`text-sm ${hasDiscount? 'line-through text-gray-500' : ''}`}>${price.toFixed(2)}</p>
                    {hasDiscount && <p className="text-sm">${(price - price*discountPercentage!/100).toFixed(2)}</p>}
                </div>
            </div>
        </div>
    );
}