import './App.css'
import EnvDisplay from './session18/EnvDisplay'
import GitignoreChecker from './session18/GitignoreChecker'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-green-400 to-blue-900 p-8">
      <div className="flex flex-col items-center gap-8">
        <EnvDisplay />
        <GitignoreChecker />
      </div>
    </div>
  )
}

export default App
