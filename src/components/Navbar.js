import { Divide as Hamburger } from 'hamburger-react';
import { useState } from "react" // import state
import About from "../navlist/About";
import Features from '../navlist/Features';
import Pricing from '../navlist/Pricing';
import Testimonials from '../navlist/Testimonials';
import Help from '../navlist/Help';

export default function Navbar() {
  let [isHover, setValue] = useState(false); // initiate isNavOpen state with false
  
  let mouseEnter = () => {
    console.log(123456);
    return setValue(true);
  };
  let mouseLeave = () => {
    console.log(123);
    return setValue(false);
  };
 
  const divStyle = {
    scale: isHover ? '' : 0
  };

  return (
    <div>
      <nav className="relative flex justify-between items-center lg0:mb-24 md:mb-14 max-sm:mb-4">
        <a href="" className="flex items-center font-medium text-xl leading-6">
          <img className="mr-2" src="/icons/logo.png" alt="" />
          <p>Lasles<span className="font-bold">VPN</span></p>
        </a>
        <div>
          <ul className="hidden md:flex relative z-99 text-[#4F5665] font-normal text-base leading-5">
            <About/>
            <Features />
            <Pricing />
            <Testimonials />
            <Help />
          </ul>
        </div>
        <div className="hidden md:flex">
          <a href="" className="font-bold block md:flex md:hover:text-[#f53838] lg:px-11 lg0:px-7 md:px-4 lg0:py-3 md:py-2 md:border-2 md:border-[transparent] md:hover:border-2 md:hover:border-[#f53838] md:hover:rounded-full">Sign In</a>
          <a href="" className="font-bold block md:flex md:hover:text-[#f53838] lg:px-11 lg0:px-7 md:px-4 lg0:py-3 md:py-2 md:border-2 md:border-[transparent] md:hover:border-2 md:hover:border-[#f53838] md:hover:rounded-full">Sign Up</a>
        </div>
        <div className='relative z-30'>
          <div className="block md:hidden">
            <Hamburger onToggle={toggled => {
            if (toggled) {
              // open a menu
              let navMenuOpen = document.getElementById('nav_menu');
                  navMenuOpen.classList.remove('translate-x-[120%]');
                  navMenuOpen.classList.remove('opacity-0');
            } else {
              // close a menu
              let navMenuClose = document.getElementById('nav_menu');
                  navMenuClose.classList.add('translate-x-[120%]');
                  navMenuClose.classList.add('opacity-0');
            }
            }} />
          </div>
        </div>
        <div id="nav_menu" className="md:hidden items-center absolute z-20 -top-[50px] pt-24 -right-4 translate-x-[120%] opacity-0 bg-slate-300 w-[60%] h-[800px] duration-500 md:flex opacity-90">
          <ul className="block text-[#4F5665] font-normal text-base leading-5 md:hidden">
            <li>
              <a href="" className="mx-5">About</a>
            </li>
            <li>
              <a href="" className="mx-5">Features</a>
            </li>
            <li>
              <a href="" className="mx-5">Pricing</a>
            </li>
            <li>
              <a href="" className="mx-5">Testimonials</a>
            </li>
            <li>
              <a href="" className="mx-5">Help</a>
            </li>
          </ul>
          <a href="" className="font-bold block mx-5 md:flex md:mx-0 md:hover:text-[#f53838] md:px-11 md:py-3 md:border-2 md:border-[transparent] md:hover:border-2 md:hover:border-[#f53838] md:hover:rounded-full">Sign In</a>
          <a href="" className="font-bold block mx-5 md:flex md:mx-0 md:hover:text-[#f53838] md:px-11 md:py-3 md:border-2 md:border-[transparent] md:hover:border-2 md:hover:border-[#f53838] md:hover:rounded-full">Sign Up</a>
        </div>
      </nav>
    </div>
  );
}
