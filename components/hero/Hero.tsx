"use client"
import { LandmarkCardProps } from "@/utils/types"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import OtherInfo from "./OtherInfo";
import Image from "next/image";

const Hero = ({ landmarks }: { landmarks: LandmarkCardProps[] }) => {
    return (
        <div>
            <Swiper
                autoplay={{ delay: 4000 }}
                pagination={true}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {landmarks.map((landmark) => (
                    <SwiperSlide key={landmark.id}>
                        <div className="relative rounded-md overflow-hidden">
                            <Image
                                src={landmark.image}
                                alt={landmark.name}
                                width={1920}
                                height={600}
                                className="w-full h-[600px] object-cover"
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 z-50">
                            <div className="col-span-4 mb-4 flex h-full flex-1 justify-end px-5 md:mb-4 md:justify-end md:px-10">
                                <OtherInfo landmark={landmark} />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Hero;
