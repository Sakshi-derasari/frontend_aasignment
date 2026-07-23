import './App.css'
import ProductList from './components/session5/ProductList'
import PlaylistManager from './components/session5/PlaylistManager'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-green-400 to-blue-900 p-8">
      <div className="flex flex-col items-center gap-8">
        <ProductList />
        <PlaylistManager />
      </div>
    </div>
  )
}

export default App
