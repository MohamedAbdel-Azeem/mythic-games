import Header from "../components/Header"

export default function Page1() {
    return (
        <div className='w-dvw h-dvh flex flex-col justify-start items-center bg-primary'>
        <Header />
        <h1 className='text-3xl font-bold underline text-center text-textColor'>Page 1</h1>
        </div>
    )
}