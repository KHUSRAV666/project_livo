// core swiper version + navigation, pagination modules:
// import Swiper, { Navigation, Pagination } from 'swiper';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// init Swiper:
// const swiper = new Swiper('.swiper', {
//   // configure Swiper to use modules
//   modules: [Navigation, Pagination],
//   ...
// });

export default function Swiper() {
  return (
    <>
        <div className="mb-[182px] overflow-hidden">
            <div className="flex -mr-[150px] mb-[60px]">
                <div className="border-[#f53838] border-2 rounded-lg p-[30px] mr-[50px] w-[400px] h-[230px]">
                    <div className="flex justify-between mb-[20px]">
                        <div className="flex items-center">
                            <div className="mr-[20px]"><img src="./icons/swiper/viezh.png" alt="" /></div>
                            <div>
                                <div className="font-medium text-[18px] color-[#4f5665]">Viezh Robert<p className="text-[14px] color-[#0b132a]">Warsaw, Poland</p></div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="color-[#0b132a] mr-[11px]">4.5</div>
                            <div><img src="/icons/swiper/star.png" alt="" /></div>
                        </div>
                    </div>
                    <div>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</div>
                </div>
                <div className="border-[#ddd] border-2 rounded-lg p-[30px] mr-[50px] w-[400px] h-[230px]">
                    <div className="flex justify-between mb-[20px]">
                        <div className="flex items-center">
                            <div className="mr-[20px]"><img src="./icons/swiper/shanxi.png" alt="" /></div>
                            <div>
                                <div className="font-medium text-[18px] color-[#4f5665]">Yessica Christy<p className="text-[14px] color-[#0b132a]">Shanxi, China</p></div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="color-[#0b132a] mr-[11px]">4.5</div>
                            <div><img src="/icons/swiper/star.png" alt="" /></div>
                        </div>
                    </div>
                    <div>“I like it because I like to travel far and still can connect with high speed.”.</div>
                </div>
                <div className="border-[#ddd] border-2 rounded-lg p-[30px] mr-[50px] w-[400px] h-[230px]">
                    <div className="flex justify-between mb-[20px]">
                        <div className="flex items-center">
                            <div className="mr-[20px]"><img src="./icons/swiper/kim.png" alt="" /></div>
                            <div>
                                <div className="font-medium text-[18px] color-[#4f5665]">Kim Young Jou<p className="text-[14px] color-[#0b132a]">Seoul, South Korea</p></div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="color-[#0b132a] mr-[11px]">4.5</div>
                            <div><img src="/icons/swiper/star.png" alt="" /></div>
                        </div>
                    </div>
                    <div>“This is very unusual for my business that currently requires a virtual private network that has high security.”.</div>
                </div>
                {/* <div className="border-[#f53838] border-2 rounded-lg p-[30px] mr-[50px] w-[400px] h-[230px]">
                    <div className="flex justify-between mb-[20px]">
                        <div className="flex items-center">
                            <div className="mr-[20px]"><img src="./icons/swiper/viezh.png" alt="" /></div>
                            <div>
                                <div className="font-medium text-[18px] color-[#4f5665]">Viezh Robert<p className="text-[14px] color-[#0b132a]">Warsaw, Poland</p></div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="color-[#0b132a] mr-[11px]">4.5</div>
                            <div><img src="/icons/swiper/star.png" alt="" /></div>
                        </div>
                    </div>
                    <div>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</div>
                </div>
                <div className="border-[#ddd] border-2 rounded-lg p-[30px] mr-[50px] w-[400px] h-[230px]">
                    <div className="flex justify-between mb-[20px]">
                        <div className="flex items-center">
                            <div className="mr-[20px]"><img src="./icons/swiper/kim.png" alt="" /></div>
                            <div>
                                <div className="font-medium text-[18px] color-[#4f5665]">Kim Young Jou<p className="text-[14px] color-[#0b132a]">Seoul, South Korea</p></div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="color-[#0b132a] mr-[11px]">4.5</div>
                            <div><img src="/icons/swiper/star.png" alt="" /></div>
                        </div>
                    </div>
                    <div>“This is very unusual for my business that currently requires a virtual private network that has high security.”.</div>
                </div> */}
            </div>
            <div className="flex justify-between items-center">
                <ul className="inline-flex">
                    <li className="_active w-[40px] h-[15px] bg-[#F53838] rounded-full mr-[15px]"></li>
                    <li className="w-[15px] h-[15px] bg-[#c4c4c4] rounded-full mr-[15px]"></li>
                    <li className="w-[15px] h-[15px] bg-[#c4c4c4] rounded-full mr-[15px]"></li>
                    <li className="w-[15px] h-[15px] bg-[#c4c4c4] rounded-full"></li>
                </ul>
                <div className="flex">
                    <span className="relative w-[60px] h-[60px] border-2 border-[#f53838] rounded-full mr-[20px]">
                        <img className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src="/icons/swiper/back.png" alt="" />
                    </span>
                    <span className="relative w-[60px] border-2 border-[#f53838] bg-[#f53838] rounded-full">
                        <img className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src="/icons/swiper/next.png" alt="" />
                    </span>
                </div>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    </>
  )
}