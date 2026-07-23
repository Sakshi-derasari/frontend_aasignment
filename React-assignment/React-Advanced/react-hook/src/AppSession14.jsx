import { Provider } from "react-redux";
import store from "./session14/store";
import PlaylistManager from "./session14/PlaylistManager";
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gradient-to-br from-pink-500 via-green-400 to-blue-900 flex items-center justify-center">
        <PlaylistManager />
      </div>
    </Provider>
  );
}

export default App;
