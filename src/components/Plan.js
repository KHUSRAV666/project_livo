import Button from "./Button";
import Network from "./Network";

export default function Plan() {
  return (
    <>
        <div className="bg-gradient-to-b from-[#F8F8F8_-45.04%] to-[rgba(248, 248, 248, 0)_88.56%] pt-[80px]">
            {/* plan satart */}
            <div className="flex flex-col items-center mb-[60px]">
                <h1 className="font-medium text-[35px] leading-[50px] text-[#0B132A] mb-[20px]">Choose Your Plan</h1>
                <p className="text-base leading-7 text-center">Let's choose the package that is best for you and explore it happily and <p>cheerfully.</p></p>
            </div>
            <div className="flex justify-around">
                <div className="w-80 h-[47.5rem] pt-20 pb-[3.125rem] border-2 border-myBorder rounded-lg flex flex-col flex-wrap justify-between">
                    <div className="flex flex-col items-center">
                        <img className="mb-9" src="/icons/box.png" alt="" />
                        <p className="font-medium text-lg leading-7 mb-9">Free Plan</p>
                        <ul>
                            <li className="flex items-center mb-2.5">
                                <img className="h-2.5 mr-6" src="/icons/choosed.png" alt="" />
                                <div className="font-normal text-sm leading-7">Unlimited Bandwitch</div>
                            </li>
                            <li className="flex items-center mb-2.5">
                                <img className="h-2.5 mr-6" src="/icons/choosed.png" alt="" />
                                <div className="font-normal text-sm leading-7">Encrypted Connection</div>
                            </li>
                            <li className="flex items-center mb-2.5">
                                <img className="h-2.5 mr-6" src="/icons/choosed.png" alt="" />
                                <div className="font-normal text-sm leading-7">No Traffic Logs</div>
                            </li>
                            <li className="flex items-center mb-2.5">
                                <img className="h-2.5 mr-6" src="/icons/choosed.png" alt="" />
                                <div className="font-normal text-sm leading-7">Works on All Devices</div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="font-medium text-2xl leading-7 mb-5">Free</p>
                        <span className="cursor-pointer w-[178px] h-[45px] leading-[19px] text-center text-[#f53838] border-2 border-[#f53838] rounded-full block px-11 py-3 font-bold hover:text-white hover:bg-[#f53838] hover:shadow-2xl hover:shadow-[#fbafaf] shadow:blur-[27px]">
                            Select
                        </span>
                    </div>
                </div>
                <div className="w-80 h-[47.5rem] pt-20 pb-[3.125rem] border-2 border-myBorder rounded-lg flex flex-col flex-wrap justify-between">
                    <div className="flex flex-col items-center">
                        <img className="mb-9" src="/icons/box.png" alt="" />
                        <p className="font-medium text-lg leading-7 mb-9">Standard Plan</p>
                        <ul>
                            <li className="flex items-center mb-2.5">
                                <img className="h-2.5 mr-6" src="/icons/choosed.png" alt="" />
                                <div className="font-normal text-sm leading-7">Unlimited Bandwitch</div>
                            </li>
                            <li className="flex items-center mb-2.5">
                                <img className="h-2.5 mr-6" src="/icons/choosed.png" alt="" />
                                <div className="font-normal text-sm leading-7">Encrypted Connection</div>
                            </li>
                            <li className="flex items-center mb-2.5">
                                <img className="h-2.5 mr-6" src="/icons/choosed.png" alt="" />
                                <div className="font-normal text-sm leading-7">No Traffic Logs</div>
                            </li>
                            <li className="flex items-center mb-2.5">
                                <img className="h-2.5 mr-6" src="/icons/choosed.png" alt="" />
                                <div className="font-normal text-sm leading-7">Works on All Devices</div>
                            </li>
                            <li className="flex items-center mb-2.5">
                                <img className="h-2.5 mr-6" src="/icons/choosed.png" alt="" />
                                <div className="font-normal text-sm leading-7">Connect Anyware</div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="font-medium text-2xl leading-7 mb-5">$9 <span className="font-normal text-[25px] leading[30px] text-[#4f5665]">/ mo</span></p>
                        <span className="cursor-pointer w-[178px] h-[45px] leading-[19px] text-center text-[#f53838] border-2 border-[#f53838] rounded-full block px-11 py-3 font-bold hover:text-white hover:bg-[#f53838] hover:shadow-2xl hover:shadow-[#fbafaf] shadow:blur-[27px]">
                            Select
                        </span>
                    </div>
                </div>
                <div className="w-80 h-[47.5rem] pt-20 pb-[3.125rem] border-2 border-myBorder rounded-lg flex flex-col flex-wrap justify-between">
                    <div className="flex flex-col items-center">
                        <img className="mb-9" src="/icons/box.png" alt="" />
                        <p className="font-medium text-lg leading-7 mb-9">Standard Plan</p>
                        <ul>
                            <li className="flex items-center mb-2.5">
                                <img className="h-2.5 mr-6" src="/icons/choosed.png" alt="" />
                                <div className="font-normal text-sm leading-7">Unlimited Bandwitch</div>
                            </li>
                            <li className="flex items-center mb-2.5">
                                <img className="h-2.5 mr-6" src="/icons/choosed.png" alt="" />
                                <div className="font-normal text-sm leading-7">Encrypted Connection</div>
                            </li>
                            <li className="flex items-center mb-2.5">
                                <img className="h-2.5 mr-6" src="/icons/choosed.png" alt="" />
                                <div className="font-normal text-sm leading-7">No Traffic Logs</div>
                            </li>
                            <li className="flex items-center mb-2.5">
                                <img className="h-2.5 mr-6" src="/icons/choosed.png" alt="" />
                                <div className="font-normal text-sm leading-7">Works on All Devices</div>
                            </li>
                            <li className="flex items-center mb-2.5">
                                <img className="h-2.5 mr-6" src="/icons/choosed.png" alt="" />
                                <div className="font-normal text-sm leading-7">Connect Anyware</div>
                            </li>
                            <li className="flex items-center mb-2.5">
                                <img className="h-2.5 mr-6" src="/icons/choosed.png" alt="" />
                                <div className="font-normal text-sm leading-7">Get New Features</div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="font-medium text-2xl leading-7 mb-5">$12 <span className="font-normal text-[25px] leading[30px] text-[#4f5665]">/ mo</span></p>
                        <span className="cursor-pointer w-[178px] h-[45px] leading-[19px] text-center text-[#f53838] border-2 border-[#f53838] rounded-full block px-11 py-3 font-bold hover:text-white hover:bg-[#f53838] hover:shadow-2xl hover:shadow-[#fbafaf] shadow:blur-[27px]">
                            Select
                        </span>
                    </div>
                </div>
            </div>
            {/* plan satart */}
            <Network />
        </div>
    </>
  )
}
