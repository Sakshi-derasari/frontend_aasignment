import { useState } from "react";
import { Provider } from "react-redux";
import store from "./session19/store";
import LoginForm from "./session19/LoginForm";
import PlaylistList from "./session19/PlaylistList";
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  const handleLogin = (email) => {
    setUser(email);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser("");
  };

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gradient-to-br from-pink-500 via-green-400 to-blue-900 flex items-center justify-center">
        {isLoggedIn ? (
          <div className="flex flex-col items-center gap-4">
            <p className="text-white text-2xl font-bold">
              Welcome back, <span className="text-yellow-300">{user}</span>!
            </p>
            <PlaylistList user={user} onLogout={handleLogout} />
          </div>
        ) : (
          <LoginForm onLogin={handleLogin} />
        )}
      </div>
    </Provider>
  );
}

export default App;
