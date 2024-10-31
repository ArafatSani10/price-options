import { useState } from "react";
import Link from "./Link";
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const NavBar = () => {

    const [open, setOpen] = useState()
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/blog', name: 'Blog' },
    ];



    return (

        <nav className="bg-yellow-300 p-6">
            <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
            
                {
                    open === true ?     <MdOutlineMenuOpen></MdOutlineMenuOpen> : <IoClose></IoClose>
                }
            </div>

            <ul className={`md:flex duration-1000 md:static absolute px-6 bg-yellow-300
            ${open ? 'top-12' : '-top-52'}
                
                `}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>

        </nav>
    );
};

export default NavBar;