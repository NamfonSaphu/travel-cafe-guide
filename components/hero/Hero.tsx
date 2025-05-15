"use client"
import { LandmarkCardProps } from "@/utils/types"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import OtherInfo from "./OtherInfo";


const Hero = ({ landmarks }: { landmarks: LandmarkCardProps[] }) => {
    return (
        <div>
            <Swiper autoplay={{
                delay: 4000
            }} pagination={true} modules={[Pagination, Autoplay]} className="mySwiper">
                {
                    landmarks.map((landmarks) => {
                        return (
                            <SwiperSlide>
                                <div className="relative rounded-md overflow-hidden">
                                    <img className="w-full h-[600px] object-cover" src={landmarks.image} />
                                </div>
                                <div className="absolute bottom-0 left-0 z-50">
                                    <div className="col-span-4 mb-4 flex h-full flex-1 justify-end px-5 md:mb-4 md:justify-end md:px-10">
                                        <OtherInfo landmark={landmarks} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default Hero
