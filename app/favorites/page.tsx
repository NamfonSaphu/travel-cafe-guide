import { fetchFavorites } from "@/actions/actions"
import LandmarkList from "../home/LandmarkList"

const FavoritesPage = async () => {
  const favorites = await fetchFavorites()
  console.log(favorites)
  return (
    <LandmarkList landmarks={favorites} />
  )
}

export default FavoritesPage
