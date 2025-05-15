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
            <Breadcrumbs name={landmark.name} />
            <header className="flex justify-between mt-4 items-center">
                <h1 className="text-2xl capitalize font-bold">{landmark.name}</h1>
                <div className="flex items-center gap-x-4">
                    <FavoriteToggleButton landmarkId={landmark.id} />
                </div>
            </header>
            <ImageContainer mainImage={landmark.image} name={landmark.name} />
            <section>
                <div>
                    <Description description={landmark.description} />
                    <MapLandmark location={{ lat: landmark.lat, lng: landmark.lng }} />
                </div>
            </section>
        </section>
    )
}

export default LandmarkDetail
