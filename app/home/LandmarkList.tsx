import LandmarkCard from "@/components/card/LandmarkCard"

const LandmarkList = ({landmarks}) => {
  return (
    <div>
      {
        landmarks.map((landmark) =>{
            return <LandmarkCard landmark={landmark} key={landmark.id} />
        })
      }
    </div>
  )
}

export default LandmarkList
