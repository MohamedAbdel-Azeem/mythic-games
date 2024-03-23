import backgroundVideo from '../assets/media/Elden-Ring-wallpaper.mp4';
import Header from '../components/Header';

export default function HomePage() {
    return (
        <div className='relative w-screen h-screen overflow-hidden'>
            <video autoPlay loop muted className='absolute w-full h-full object-cover'>
                <source src={backgroundVideo} type='video/mp4' />
            </video>
            <div className='absolute top-0 left-0 w-full h-full bg-transparent flex flex-col'>
                <Header />
            </div>
        </div>
        )
}