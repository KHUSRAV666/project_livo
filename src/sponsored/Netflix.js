import { useState } from "react" // import state
export default function Sponsored() {

  let [isHover, setValue] = useState(false); // initiate isNavOpen state with false
  
  let mouseEnter = () => {
    return setValue(true);
  };
  let mouseLeave = () => {
    return setValue(false);
  };
 
  const divStyle = {
    fill: isHover ? 'red' : '#dde0e4'
  };

  return (
    <>
        <span onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[190px] h-[60px] max-md:w-[117px]" viewBox="0 0 1333.33 360.34" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path style={divStyle} d="M183.34 337.11c-20.06 3.52-40.47 4.57-61.58 7.39l-64.4-188.61V352.6c-20.06 2.11-38.35 4.93-57.36 7.74V0h53.49l73.19 204.45V0h56.66v337.11zm110.85-205.15c21.82 0 55.25-1.06 75.31-1.06v56.3c-24.99 0-54.19 0-75.31 1.06v83.76c33.08-2.11 66.16-4.93 99.59-5.98v54.19l-155.89 12.32V.01h155.89v56.3h-99.59v75.66zM603.15 56.3h-58.41v259c-19 0-38 0-56.3.7V56.3h-58.41V0h173.13v56.3zm91.49 71.79h77.07v56.3h-77.07v127.74h-55.25V0h157.3v56.3H694.64v71.79zm193.54 134.78c32.02.7 64.39 3.17 95.72 4.93v55.6c-50.32-3.17-100.64-6.33-152.02-7.39V.01h56.3v262.86zm143.22 64.39c17.95 1.06 36.95 2.11 55.25 4.22V0h-55.25v327.26zM1333.33 0l-71.44 171.37 71.44 188.96c-21.12-2.81-42.23-6.69-63.35-10.2l-40.46-104.16-41.17 95.71c-20.42-3.52-40.12-4.58-60.53-7.39l72.49-165.04L1134.86-.01h60.52l36.95 94.66 39.41-94.66h61.58z" fill="#dde0e4" fill-rule="nonzero"/></svg>
        </span>
    </>
  )
}
