import './App.css'
import ControlledLoginForm from './session17/ControlledLoginForm'
import FormikLoginForm from './session17/FormikLoginForm'
import ValidatedLoginForm from './session17/ValidatedLoginForm'
import PlaylistForm from './session17/PlaylistForm'
import Comparison from './session17/Comparison'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-green-400 to-blue-900 p-8">
      <div className="flex flex-col items-center gap-8">
        <ControlledLoginForm />
        <FormikLoginForm />
        <ValidatedLoginForm />
        <PlaylistForm />
        <Comparison />
      </div>
    </div>
  )
}

export default App
