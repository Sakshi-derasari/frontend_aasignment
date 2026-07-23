import './App.css'
import { ThemeProvider } from './components/session6/ThemeContext'
import Navbar from './components/session6/Navbar'
import PostCard from './components/session6/PostCard'

function App() {
  const posts = [
    {
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
      caption: "Beautiful mountain landscape at sunset",
    },
    {
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600",
      caption: "Peaceful lake view with mountains in the background",
    },
  ]

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-pink-500 via-green-400 to-blue-900 p-8">
        <div className="flex flex-col items-center gap-6">
          <Navbar />
          {posts.map((post, i) => (
            <PostCard key={i} image={post.image} caption={post.caption} />
          ))}
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
