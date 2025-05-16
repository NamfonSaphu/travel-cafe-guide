import { fetchLandmarkDetail } from "@/actions/actions"
import FavoriteToggleButton from "@/components/card/FavoriteToggleButton"
import Breadcrumbs from "@/components/landmark/Breadcrumb"
import Description from "@/components/landmark/Description"
import ImageContainer from "@/components/landmark/ImageContainer"
import MapLandmark from "@/components/map/MapLandmark"

import { redirect } from "next/navigation"

const LandmarkDetail = async ({ params }: { params: { id: string } }) => {
    const { id } = await params
    const landmark = await fetchLandmarkDetail({ id })
    if (!landmark) redirect('/')
    return (
        <section>
            <div className="mb-4">
                <Breadcrumbs name={landmark.name} />
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <ImageContainer mainImage={landmark.image} name={landmark.name} />
                <header className="flex justify-between mt-4 items-center">
                    <h1 className="text-2xl capitalize font-bold">{landmark.name}</h1>
                    <div className="flex items-center gap-x-4">
                        <FavoriteToggleButton landmarkId={landmark.id} />
                    </div>
                </header>
                <div>
                    <p className="text-sm text-gray-500 mt-1">{landmark.province}</p>
                </div>
                <section>
                    <div>
                        <Description description={landmark.description} />
                    </div>
                </section>
            </div>
            <div className="mt-6">
                <MapLandmark location={{ lat: landmark.lat, lng: landmark.lng }} />
            </div>
        </section>


    )
}

export default LandmarkDetail
