import Header from "../components/Header";


interface GamesListProps {
    title: string;
    games: object[] | null;
    isLoading: boolean;
    isError: any;
}

export default function GamesList(props : GamesListProps) {
    return (
        <div className="w-dvw h-dvh flex flex-col justify-start items-center bg-primary">
            <Header />
            <main className="flex flex-col items-center">
                <h1 className="text-3xl font-bold underline text-center text-textColor">{props.title}</h1>
            </main>
        </div>
    );
}