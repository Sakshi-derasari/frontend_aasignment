import './App.css'
import { ThemeProvider } from './components/session7/ThemeContext'
import ThemeHeader from './components/session7/ThemeHeader'
import { UserProvider } from './components/session7/UserContext'
import { FavoritesProvider } from './components/session7/FavoritesContext'
import { RestaurantList } from './components/session7/RestaurantCard'
import { PlaylistProvider } from './components/session7/PlaylistContext'
import Playlist from './components/session7/Playlist'
import VolumeControl from './components/session7/VolumeControl'
import { AuthProvider } from './components/session7/AuthContext'
import InstagramAuth from './components/session7/InstagramAuth'

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <FavoritesProvider>
          <PlaylistProvider>
            <AuthProvider>
              <div className="min-h-screen bg-gradient-to-br from-pink-500 via-green-400 to-blue-900 p-8">
                <div className="flex flex-col items-center gap-8">
                  <ThemeHeader />
                  <RestaurantList />
                  <Playlist />
                  <VolumeControl />
                  <InstagramAuth />
                </div>
              </div>
            </AuthProvider>
          </PlaylistProvider>
        </FavoritesProvider>
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
