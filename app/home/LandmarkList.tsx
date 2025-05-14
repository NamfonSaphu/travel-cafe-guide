import LandmarkCard from "@/components/card/LandmarkCard"
import { LandmarkCardProps } from "@/utils/types"

const LandmarkList = ({ landmarks }: { landmarks: LandmarkCardProps[] }) => {
    return (
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4">
            {
                landmarks.map((landmark) => {
                    return <LandmarkCard landmark={landmark} key={landmark.id} />
                })
            }
        </section>
    )
}

export default LandmarkList
