import { Oval } from "react-loader-spinner";

export default function LoadingSpinner() {
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-primary">
            <Oval color="#4338ca" height={100} width={100} />
        </div>
    );
}