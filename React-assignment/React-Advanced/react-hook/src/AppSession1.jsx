import { useState } from 'react'
import './App.css'
import PlaylistCard from './components/session1/PlaylistCard'
import LikeCounter from './components/session1/LikeCounter'
import { UserContext } from './components/session1/UserContext'
import Parent from './components/session1/Parent'
import FlipkartProductList from './components/session1/FlipkartProductList'

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
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-green-400 to-blue-900 flex items-center justify-center">
      <PlaylistCard playlist={playlist} />
      <LikeCounter />
      <UserContext.Provider value={user}>
        <Parent />
      </UserContext.Provider>
      <FlipkartProductList />
    </div>
  )
}

export default App
