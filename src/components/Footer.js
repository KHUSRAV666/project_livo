export default function Footer() {
  return (
    <div>
      <div className="md:flex md:justify-between max-md:grid max-md:grid-cols-2 max-sm0:grid max-sm0:grid-cols-1 pt-[180px] pb-[142px] max-w-[1140px] m-[0_auto] before:block before:absolute before:-inset-1 before:w-[250%] before:z-[-99] before:bg-[#f8f8f8] before:ml-[-50%] relative inline-block">
        <div className="max-md:mb-5 max-md:border-b-2">
            <a href="/index.html" className="flex items-center font-medium text-xl leading-6 mb-[20px]">
              <img className="mr-2" src="/icons/logo.png" alt="" />
              <p>Lasles<span className="font-bold">VPN</span></p>
            </a>
            <div className="font-medium text-[#4F5665] mb-[30px]">LaslesVPN is a private virtual network <p>that has unique features and has high security.</p></div>
            <div className="flex justify-start mb-[30px]">
                <img className="relative w-[33.6px] h-[33.6px] bg-[#f53838] shadow-[0_13px_18px_rgba(17,19,35,0.08)] rounded-full mr-[20px]" src="/icons/footer/facebook.png" alt="" />
                <img className="relative w-[33.6px] h-[33.6px] bg-[#f53838] shadow-[0_13px_18px_rgba(17,19,35,0.08)] rounded-full mr-[20px]" src="/icons/footer/twitter.png" alt="" />
                <img className="relative w-[33.6px] h-[33.6px] bg-[#f53838] shadow-[0_13px_18px_rgba(17,19,35,0.08)] rounded-full" src="/icons/footer/instagram.png" alt="" />
            </div>
            <p className="text-[#afb5c0]">©2020LaslesVPN</p>
        </div>
        <div className="max-md:mb-5 max-md:border-b-2">
            <div>
                <p className="font-medium text-[18px] leading-[30px] tetx-[#0b132a] mb-[20px]">Product</p>
                <p className="font-normal text-[16px] leading-[30px] tetx-[#4f5665] mb-[10px]">Download </p>
                <p className="font-normal text-[16px] leading-[30px] tetx-[#4f5665] mb-[10px]">Pricing</p>
                <p className="font-normal text-[16px] leading-[30px] tetx-[#4f5665] mb-[10px]">Locations</p>
                <p className="font-normal text-[16px] leading-[30px] tetx-[#4f5665] mb-[10px]">Server</p>
                <p className="font-normal text-[16px] leading-[30px] tetx-[#4f5665] mb-[10px]">Countries</p>
                <p className="font-normal text-[16px] leading-[30px] tetx-[#4f5665]">Blog</p>
            </div>
        </div>
        <div className="max-sm0:mb-5 max-sm0:border-b-2">
            <div>
                <p className="font-medium text-[18px] leading-[30px] tetx-[#0b132a] mb-[20px]">Engage</p>
                <p className="font-normal text-[16px] leading-[30px] tetx-[#4f5665] mb-[10px]">LaslesVPN </p>
                <p className="font-normal text-[16px] leading-[30px] tetx-[#4f5665] mb-[10px]">FAQ</p>
                <p className="font-normal text-[16px] leading-[30px] tetx-[#4f5665] mb-[10px]">Tutorials</p>
                <p className="font-normal text-[16px] leading-[30px] tetx-[#4f5665] mb-[10px]">About Us</p>
                <p className="font-normal text-[16px] leading-[30px] tetx-[#4f5665] mb-[10px]">Privacy Policy</p>
                <p className="font-normal text-[16px] leading-[30px] tetx-[#4f5665]">Terms of Service</p>
            </div>
        </div>
        <div>
            <div>
                <p className="font-medium text-[18px] leading-[30px] tetx-[#0b132a] mb-[20px]">Earn Money</p>
                <p className="font-normal text-[16px] leading-[30px] tetx-[#4f5665] mb-[10px]">Affilite </p>
                <p className="font-normal text-[16px] leading-[30px] tetx-[#4f5665] mb-[10px]">Become Partner</p>
            </div>
        </div>
      </div>
    </div>
  )
}
