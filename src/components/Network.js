import Worldmap from "./Worldmap";

export default function Network() {
  return (
    <>
        <div className="mb-[50px] mt-[150px]">
            <div className="text-[#0B132A] font-medium text-[35px] leading-[50px] text-center mb-[20px]">Huge Global Network <p>of Fast VPN</p></div>
            <div className="font-normal text-[16px] leading-[30px] text-[#4f5665] text-center mb-[155px]">See <b>LaslesVPN</b> everywhere to make it easier for you when you move <p>locations.</p></div>
            {/* <img className="mb-[8px]" src="/icons/map.png" alt="" /> */}
            <Worldmap />
        </div>
    </>
  )
}
