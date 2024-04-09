import { Link } from "react-router-dom";

export default function NotFoundErrorPage(){
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-primary">
            <div className="bg-red-500 text-textColor p-20 rounded-sm flex flex-col justify-center items-center shadow-sm">
                <h1 className="text-4xl font-bold text-textColor">Error 404</h1>
                <p className="text-lg text-textColor">Page not found</p>
                <Link to="/" className="mt-5 p-3 rounded-lg text-textColor bg-linkBase hover:bg-linkHover">Go back to home page</Link>
            </div>
        </div>
    );
}