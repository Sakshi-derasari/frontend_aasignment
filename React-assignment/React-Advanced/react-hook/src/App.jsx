import { useState } from 'react'
import './App.css'
import PlaylistCard from './components/session1/PlaylistCard'
import LikeCounter from './components/session1/LikeCounter'
import { UserContext } from './components/session1/UserContext'
import Parent from './components/session1/Parent'
import FlipkartProductList from './components/session1/FlipkartProductList'
import LiveClock from './components/session2/LiveClock'
import MoviesList from './components/session2/MoviesList'
import PostCard from './components/session2/PostCard'
import SpotifyPlaylists from './components/session2/SpotifyList'
import CartItem from './components/session4/CartItem'

function App() {
  const [count, setCount] = useState(0)
  const playlist = [
    {
      "song": "Levitating",
      "artist": "Dua Lipa",
      "image": "https://i1.sndcdn.com/artworks-orxd3Qu4MvUnj9Wp-zpTayQ-t500x500.jpg"
    },
    {
      "song": "Believer",
      "artist": "Imagine Dragons",
      "image": "https://c.saavncdn.com/128/Believer-English-2018-20190107213710-500x500.jpg"
    },
    {
      "song": "Kesariya",
      "artist": "Arijit Singh",
      "image": "https://c.saavncdn.com/493/Kesariya-Audio-Teaser-From-Brahmastra--Hindi-2022-20220414173718-500x500.jpg"
    }
  ]
  const user = { name: 'Sakshi Derasari' }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-green-400 to-blue-900 p-6">

      <div className="flex flex-col items-center gap-6">
        <PlaylistCard playlist={playlist} />
        <LikeCounter />

        <UserContext.Provider value={user}>
          <Parent />
        </UserContext.Provider>

        <FlipkartProductList />
        <LiveClock />

        <div style={{ maxHeight: "300px", overflowY: "auto", width: "100%" }}>
          <MoviesList />
        </div>

        <div className="text-center">
          <h1>Instagram Like Feature</h1> </div>
        <div className="flex flex-wrap justify-center gap-6 mt-4">

          <PostCard
            username="stitch_a"
            image="https://i.pinimg.com/736x/9a/7a/60/9a7a60dcfd21729ea333986e785c8042.jpg"
            initialLikes={120}
          />

          <PostCard
            username="masha_bear"
            image="https://i.pinimg.com/originals/16/d2/62/16d2620530a0450005425b7c383193fa.jpg"
            initialLikes={89}
          />

        </div>

        <SpotifyPlaylists />
        <CartItem />
        
      </div>
    </div>
  )
}

export default App