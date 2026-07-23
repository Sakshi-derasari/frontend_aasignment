import { Provider } from "react-redux";
import store from "./session16/store";
import RestaurantList from "./session16/RestaurantList";
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gradient-to-br from-pink-500 via-green-400 to-blue-900 flex items-center justify-center">
        <RestaurantList />
      </div>
    </Provider>
  );
}

export default App;
