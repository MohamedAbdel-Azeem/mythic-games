import logo from '../assets/media/Mythic Games logo.png';



export default function Header() {
    return (
        <div className='w-screen bg-transparent z-50'>
            <div className='w-full px-6 py-1 flex justify-between items-center'>
                <img src={logo} alt='Mythic Games logo' className='md:w-20 w-16 h-auto' />
                <p className='text-textColor'>Text Here</p>
            </div>
        </div>
    )
}