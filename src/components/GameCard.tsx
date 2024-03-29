

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
            <img src={imageUrl} alt={title} className="w-full h-3/5 object-cover rounded-t-md"/>
            <div className="p-2 text-textColor">
                <h2 className="text-lg font-bold">{title}</h2>
                <p className="text-sm">${price}</p>
                {hasDiscount && <p className="text-sm text-red-500">-{discountPercentage}%</p>}
            </div>
        </div>
    );
}