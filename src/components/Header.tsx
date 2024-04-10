import logo from '../assets/media/Mythic Games logo.png';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import { useState } from 'react';
import { Drawer } from '@mui/material';
import { useSelector } from 'react-redux';
import CartDrawerElements from './CartDrawerElements';

type HeaderProps = {
    isTransparent?: boolean;
}

export default function Header({isTransparent = true} : HeaderProps) {
    const background_color = isTransparent ? 'bg-transparent' : 'bg-secondary';
    const [isOpenedDrawer, setIsOpenedDrawer] = useState(false);
    const cartSlice = useSelector((state) => state.cart);
    return (
        <div className={`w-screen ${background_color} z-50`}>
            <div className='w-full px-10 py-1 flex justify-between items-center'>
                <Link to='/'>
                    <img src={logo} alt='Mythic Games logo' className='md:w-20 w-16 h-auto hover:scale-110 transition-transform duration-500 ease-linear' />
                </Link>
                <div onClick={()=>{setIsOpenedDrawer(true)}}>
                    <CartIcon size={cartSlice.cart.length}/>
                </div>
                <Drawer anchor='right' open={isOpenedDrawer} onClose={() => {setIsOpenedDrawer(false)}} >
                    <CartDrawerElements />
                </Drawer>
            </div>
        </div>
    )
}