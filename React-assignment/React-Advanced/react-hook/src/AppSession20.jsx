import './App.css'
import RecipeApp from './session20/recipeApp/RecipeApp'
import MovieWishlist from './session20/movieApp/MovieWishlist'
import MobileFixes from './session20/movieApp/MobileFixes'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-green-400 to-blue-900 p-8">
      <div className="flex flex-col items-center gap-8">
        <RecipeApp />
        <MovieWishlist />
        <MobileFixes />
      </div>
    </div>
  )
}

export default App
