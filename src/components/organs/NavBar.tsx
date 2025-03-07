import { useState, useEffect } from "react"
import { NavLinks } from "../particles/Data"
import { List } from "../atoms/List";
import { NavLink } from "react-router-dom";
import { ArrowCircleRight, CirclesFour } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Dropdown from "../molecules/Dropdown";


const NavBar = () => {

    const [open, setOpen] = useState(false);
    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
    const [navBarColor, setNavBarColor] = useState(false)

    const handleToggle = () => {
        setOpen(!open)
    }
    const handleTogleDropdown = () => {
        setDropdownIsOpen(!dropdownIsOpen)
    }

    const listenScrollEvent = () => {
        window.scrollY > 10 ? setNavBarColor(true) : setNavBarColor(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    return (
        <header className="w-full h-auto bg-transparent overflow-x-hidden fixed z-50 top-0 left-0">
            <nav className={`w-full lg:h-28 md:h-24 h-20 ${navBarColor ? "bg-zinc-900" : " bg-transparent"} lg:px-16 md:px-9 px-8 flex justify-between items-center`}>
                <Link to={`/`} className="font-extrabold flex items-center relative md:text-2xl text-lg">
                    <img src={Logo} alt="logo" className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]" />
                </Link>
                <div className="lg:flex hidden items-center h-full gap-20">
                    <ul className="flex items-center justify-center h-full gap-4 relative before:w-full before:h-0.5 before:absolute before:bottom-0 before:left-0 before:bg-zinc-400">
                        <List className="w-full text-base">
                            <NavLink to='/' className={`relative inline-block  px-2 whitespace-nowrap text-white uppercase text-xs font-bold transition-all duration-200 hover:text-amber-500 before:w-0 before:h-0.5 before:bg-gradient-to-r from-red-500 to-amber-500 before:absolute before:-bottom-[2.93rem] before:left-0 before:transition-all before:duration-200 before:ease-in hover:before:left-0.5`}>Inicio</NavLink>
                        </List>
                        <div className="cursor-pointer w-full text-base" onClick={handleTogleDropdown}>
                            <span className={`relative inline-block  px-2 whitespace-nowrap text-white uppercase text-xs font-bold transition-all duration-200 hover:text-amber-500 before:w-0 before:h-0.5 before:bg-gradient-to-r from-red-500 to-amber-500 before:absolute before:-bottom-[2.93rem] before:left-0 before:transition-all before:duration-200 before:ease-in hover:before:left-0.5`}>Empreendimentos</span>
                        </div>
                        <List className="w-full text-base">
                            <NavLink to='/about' className={`relative inline-block  px-2 whitespace-nowrap text-white uppercase text-xs font-bold transition-all duration-200 hover:text-amber-500 before:w-0 before:h-0.5 before:bg-gradient-to-r from-red-500 to-amber-500 before:absolute before:-bottom-[2.93rem] before:left-0 before:transition-all before:duration-200 before:ease-in hover:before:left-0.5`}>Sobre</NavLink>
                        </List>
                        <List className="w-full text-base">
                            <NavLink to='/contact' className={`relative inline-block  px-2 whitespace-nowrap text-white uppercase text-xs font-bold transition-all duration-200 hover:text-amber-500 before:w-0 before:h-0.5 before:bg-gradient-to-r from-red-500 to-amber-500 before:absolute before:-bottom-[2.93rem] before:left-0 before:transition-all before:duration-200 before:ease-in hover:before:left-0.5`}>Contato</NavLink>
                        </List>

                    </ul>
                </div>
                <div className="hamburger lg:hidden flex text-white cursor-pointer" onClick={handleToggle}>
                    <CirclesFour size={30} color="currentColor" weight="light" />
                </div>
            </nav>
            <Dropdown menuItems={NavLinks} isOpen={dropdownIsOpen} onClose={() => setDropdownIsOpen(false)} />
            {/* Mobile Nav  */}
            <nav className={`flex justify-end lg:hidden h-screen w-full bg-gray-950/90 fixed top-0  ${open ? "right-0" : "-right-[120vw]"} transition-all duration-500 ease-out`}>
                <div className={`w-full md:w-[50%] h-screen bg-zinc-900 flex flex-col justify-between items-center relative ${open ? "right-0" : "-right-[120vw]"} transition-all duration-500 ease-out delay-300`}>
                    <section className="w-full px-4 py-6 flex flex-col gap-16">
                        <div className="w-full flex pt-5 px-4 justify-between items-center">
                            <Link to={`/`} className="font-extrabold text-2xl">
                                <span className=" text-white ">Rocha de Lima</span>
                            </Link>
                            <div className="hamburger text-white cursor-pointer" onClick={handleToggle}>
                                <ArrowCircleRight size={25} color="currentColor" weight="light" />
                            </div>
                        </div>
                        <ul className="flex flex-col gap-3 pl-5">
                            <List className="w-full text-base" >
                                <NavLink to='/' onClick={handleToggle} className={`relative overflow-hidden inline-block text-white before:w-full before:h-0.5 before:bg-color2 before:absolute before:bottom-0 before:-left-full before:rounded-full before:transition-all before:duration-200 before:ease-in hover:before:left-0 `}>Inicio</NavLink>
                            </List>
                            {
                                NavLinks.map((navlink, index) => (
                                    <List className="w-full text-base" key={index}>
                                        <NavLink to={navlink.url} onClick={handleToggle} className={`relative overflow-hidden inline-block text-white before:w-full before:h-0.5 before:bg-color2 before:absolute before:bottom-0 before:-left-full before:rounded-full before:transition-all before:duration-200 before:ease-in hover:before:left-0 `}>{navlink.name}</NavLink>
                                    </List>
                                ))
                            }
                        </ul>
                    </section>
                </div>
            </nav>
        </header >
    )
}

export default NavBar