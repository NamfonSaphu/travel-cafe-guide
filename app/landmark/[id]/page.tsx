import { fetchLandmarkDetail } from "@/actions/actions"
import FavoriteToggleButton from "@/components/card/FavoriteToggleButton"
import Breadcrumbs from "@/components/landmark/Breadcrumb"
import Description from "@/components/landmark/Description"
import ImageContainer from "@/components/landmark/ImageContainer"
import MapLandmark from "@/components/map/MapLandmark"
import { FaMapMarkerAlt } from 'react-icons/fa';

import { redirect } from "next/navigation"

const LandmarkDetail = async ({ params }: { params: { id: string } }) => {
    const { id } = await params
    const landmark = await fetchLandmarkDetail({ id })
    if (!landmark) redirect('/')
    return (
        <section>
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <Breadcrumbs name={landmark.name} />

                <ImageContainer mainImage={landmark.image} name={landmark.name} />
                <header className="flex justify-between mt-4 items-center">
                    <h1 className="text-xl capitalize font-bold">{landmark.name}</h1>
                    <div className="flex items-center gap-x-4">
                        <FavoriteToggleButton landmarkId={landmark.id} />
                    </div>
                </header>
                <div className="flex items-center gap-2 mt-2">

                </div>
                <div className="flex items-center gap-1 mt-1">
                    <FaMapMarkerAlt className="text-xs text-gray-500" />
                    <p className="text-xs text-gray-500">{landmark.province}</p>
                </div>
                <section>
                    <div>
                        <Description description={landmark.description} />
                    </div>
                </section>
            </div>
            <div className="my-6">
                <h1 className="text-xl capitalize font-bold">Location</h1>
                <div className="mt-4">
                    <MapLandmark location={{ lat: landmark.lat, lng: landmark.lng }} />
                </div>
            </div>
        </section>


    )
}

export default LandmarkDetail