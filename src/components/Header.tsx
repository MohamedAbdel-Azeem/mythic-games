import logo from '../assets/media/Mythic Games logo.png';
import { Link } from 'react-router-dom';

type HeaderProps = {
    isTransparent?: boolean;
}

export default function Header({isTransparent = true} : HeaderProps) {
    const background_color = isTransparent ? 'bg-transparent' : 'bg-secondary';
    return (
        <div className={`w-screen ${background_color} z-50`}>
            <div className='w-full px-6 py-1 flex justify-between items-center'>
                <Link to='/'>
                    <img src={logo} alt='Mythic Games logo' className='md:w-20 w-16 h-auto hover:scale-110 transition-transform duration-500 ease-linear' />
                </Link>
                <p className='text-textColor'>Text Here</p>
            </div>
        </div>
    )
}