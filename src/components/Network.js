import Worldmap from "./Worldmap";

export default function Network() {
  return (
    <>
        <div className="mb-[50px] md:mt-[150px] sm:mt-[50px] max-sm:mt-[30px]">
            <div className="text-[#0B132A] font-medium lg:text-5xl md:text-3xl sm:text-xl max-sm:text-3xl max-sm0:text-2x leading-[50px] text-center mb-[20px]">Huge Global Network <p>of Fast VPN</p></div>
            <div className="font-normal text-[16px] leading-[30px] text-[#4f5665] text-center md:mb-[155px] max-md:mb-[55px]">See <b>LaslesVPN</b> everywhere to make it easier for you when you move <p>locations.</p></div>
            <Worldmap />
        </div>
    </>
  )
}
