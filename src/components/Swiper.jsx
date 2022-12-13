// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
    return (
        <div className="mb-[250px] relative">
            <div className="flex -mr-[150px] mb-[60px]">

                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    //   scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >

                    <SwiperSlide><div className="relative cursor-pointer bg-[#fff] border-[#ddd] hover:border-[#f53838] border-2 rounded-lg p-[30px] mr-[50px] w-[400px] h-[230px] before:block before:z-[-9] before:absolute before:w-[80%] before:h-[120%] before:top-0 before:left-[10%] hover:before:bg-[#0D1025] before:opacity-[0.06] before:blur-[57px] before:rounded-[10px]">
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
                    </SwiperSlide>
                    <SwiperSlide><div className="relative cursor-pointer bg-[#fff] border-[#ddd] hover:border-[#f53838] border-2 rounded-lg p-[30px] mr-[50px] w-[400px] h-[230px] before:block before:z-[-9] before:absolute before:w-[80%] before:h-[120%] before:top-0 before:left-[10%] hover:before:bg-[#0D1025] before:opacity-[0.06] before:blur-[57px] before:rounded-[10px]">
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
                    </SwiperSlide>
                    <SwiperSlide><div className="relative cursor-pointer bg-[#fff] border-[#ddd] hover:border-[#f53838] border-2 rounded-lg p-[30px] mr-[50px] w-[400px] h-[230px] before:block before:z-[-9] before:absolute before:w-[80%] before:h-[120%] before:top-0 before:left-[10%] hover:before:bg-[#0D1025] before:opacity-[0.06] before:blur-[57px] before:rounded-[10px]">
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
                    </SwiperSlide>
                    <SwiperSlide><div className="relative cursor-pointer bg-[#fff] border-[#ddd] hover:border-[#f53838] border-2 rounded-lg p-[30px] mr-[50px] w-[400px] h-[230px] before:block before:z-[-9] before:absolute before:w-[80%] before:h-[120%] before:top-0 before:left-[10%] hover:before:bg-[#0D1025] before:opacity-[0.06] before:blur-[57px] before:rounded-[10px]">
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
                    </SwiperSlide>
                    <SwiperSlide><div className="relative cursor-pointer bg-[#fff] border-[#ddd] hover:border-[#f53838] border-2 rounded-lg p-[30px] mr-[50px] w-[400px] h-[230px] before:block before:z-[-9] before:absolute before:w-[80%] before:h-[120%] before:top-0 before:left-[10%] hover:before:bg-[#0D1025] before:opacity-[0.06] before:blur-[57px] before:rounded-[10px]">
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
                    </SwiperSlide>
                    <SwiperSlide><div className="relative cursor-pointer bg-[#fff] border-[#ddd] hover:border-[#f53838] border-2 rounded-lg p-[30px] mr-[50px] w-[400px] h-[230px] before:block before:z-[-9] before:absolute before:w-[80%] before:h-[120%] before:top-0 before:left-[10%] hover:before:bg-[#0D1025] before:opacity-[0.06] before:blur-[57px] before:rounded-[10px]">
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
                    </SwiperSlide>
                    <SwiperSlide><div className="relative cursor-pointer bg-[#fff] border-[#ddd] hover:border-[#f53838] border-2 rounded-lg p-[30px] mr-[50px] w-[400px] h-[230px] before:block before:z-[-9] before:absolute before:w-[80%] before:h-[120%] before:top-0 before:left-[10%] hover:before:bg-[#0D1025] before:opacity-[0.06] before:blur-[57px] before:rounded-[10px]">
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
                    </SwiperSlide>
                    <SwiperSlide><div className="relative cursor-pointer bg-[#fff] border-[#ddd] hover:border-[#f53838] border-2 rounded-lg p-[30px] mr-[50px] w-[400px] h-[230px] before:block before:z-[-9] before:absolute before:w-[80%] before:h-[120%] before:top-0 before:left-[10%] hover:before:bg-[#0D1025] before:opacity-[0.06] before:blur-[57px] before:rounded-[10px]">
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
                    </SwiperSlide>

                </Swiper>

            </div>
        </div>

    );
};