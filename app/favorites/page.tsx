import { fetchFavorites } from "@/actions/actions"
import LandmarkList from "../home/LandmarkList"
import EmptyList from "../home/EmptyList"

const FavoritesPage = async () => {
  const favorites = await fetchFavorites()
  if(favorites.length === 0) {
    return <EmptyList heading='No items' />
  }
  console.log(favorites)
  return (
    <LandmarkList landmarks={favorites} />
  )
}

export default FavoritesPage
