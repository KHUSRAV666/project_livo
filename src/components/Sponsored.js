import Amazon from "../sponsored/Amazon";
import Discord from "../sponsored/Discord";
import Netflix from "../sponsored/Netflix";
import Reddit from "../sponsored/Reddit";
import Spotify from "../sponsored/Spotify";
import { useState } from "react" // import state
export default function Sponsored() {

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
    fill: isHover ? 'red' : '#dde0e4'
  };

  return (
    <>
        <div className="flex justify-between items-center h-[190px] mb-[60px]">
          <Netflix />
          <Reddit />
          <Amazon />
          <Discord />
          <Spotify />
        </div>      
    </>
  )
}
