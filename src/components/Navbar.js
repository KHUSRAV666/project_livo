import { useState } from "react"; // import state
import { Divide as Hamburger } from 'hamburger-react'

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  
  return (
    <div>
      <nav className='relative flex justify-between items-center mb-24'>
        <a href="" className="flex items-center font-medium text-xl leading-6">
          <img className="mr-2" src="/icons/logo.png" alt="" />
          <p>Lasles<span className="font-bold">VPN</span></p>
        </a>
        <div>
          <ul className="hidden md:flex text-[#4F5665] font-normal text-base leading-5">
            <li>
              <a href="" className="mx-5 hover:font-[700]">About</a>
            </li>
            <li>
              <a href="" className="mx-5 hover:font-[700]">Features</a>
            </li>
            <li>
              <a href="" className="mx-5 hover:font-[700]">Pricing</a>
            </li>
            <li>
              <a href="" className="mx-5 hover:font-[700]">Testimonials</a>
            </li>
            <li>
              <a href="" className="mx-5 hover:font-[700]">Help</a>
            </li>
          </ul>
        </div>
        <div className="flex">
          <a href="" className="font-bold block mx-5 md:flex md:mx-0 md:hover:text-[#f53838] md:px-11 md:py-3 md:border-2 md:border-[transparent] md:hover:border-2 md:hover:border-[#f53838] md:hover:rounded-full">Sign In</a>
          <a href="" className="font-bold block mx-5 md:flex md:mx-0 md:hover:text-[#f53838] md:px-11 md:py-3 md:border-2 md:border-[transparent] md:hover:border-2 md:hover:border-[#f53838] md:hover:rounded-full">Sign Up</a>
        </div>
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
        <div id="nav_menu" className="items-center absolute top-[50px] right-0 translate-x-[120%] opacity-0 bg-slate-300 w-[60%] h-[800px] duration-500 md:flex">
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
