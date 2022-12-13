import { useState } from "react" // import state

export default function Pricing () {
 
    let [isHover, setValue] = useState(false); // initiate isNavOpen state with false
    
    let mouseEnter = () => {
    return setValue(true);
    };
    let mouseLeave = () => {
    return setValue(false);
    };

    const divStyle = {
    scale: isHover ? '' : 0
    };

  return (
    <li onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="mx-1 lg0:mx-3 lg:mx-5">
        <a href="" className="hover:font-[700] hover:text-red-400">Pricing</a>
        <ul style={divStyle} className="absolute w-[186px] bg-[#3333336f] rounded-[5px] origin-top transition-all">
            <li className="p-2 hover:text-white"><a href="">pricing 1</a></li>
            <li className="p-2 hover:text-white"><a href="">pricing 2</a></li>
            <li className="p-2 hover:text-white"><a href="">pricing 3</a></li>
        </ul>
    </li>
  )
}
