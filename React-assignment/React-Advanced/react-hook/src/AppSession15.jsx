import { Provider } from "react-redux";
import store from "./session15/store";
import Playlist from "./session15/Playlist";
import ShoppingCart from "./session15/ShoppingCart";
import Comparison from "./session15/Comparison";
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gradient-to-br from-pink-500 via-green-400 to-blue-900 p-8">
        <div className="flex flex-col items-center gap-8">
          <Playlist />
          <ShoppingCart />
          <Comparison />
        </div>
      </div>
    </Provider>
  );
}

export default App;
