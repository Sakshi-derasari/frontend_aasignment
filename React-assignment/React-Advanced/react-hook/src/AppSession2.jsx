import './App.css'
import LiveClock from './components/session2/LiveClock'
import MoviesList from './components/session2/MoviesList'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-green-400 to-blue-900 flex items-center justify-center">
      <LiveClock />
      <MoviesList />
    </div>
  )
}

export default App
