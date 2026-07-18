import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import PlaylistCard from './components/session1/PlaylistCard'
import Feed from "./components/session1/Feed";
import { UserContext } from "./context/UserContext";
import FlipkartProductList from "./components/session1/FlipkartProductList";

function App() {
  //const [count, setCount] = useState(0)
  const user = {name: "Sakshi" };
  const playlist = [
    {
      s_name: "Kesariya",
      artist: "Arijit Singh",
      image: "https://c.saavncdn.com/493/Kesariya-Audio-Teaser-From-Brahmastra--Hindi-2022-20220414173718-500x500.jpg"
    },
    {
      s_name: "Pehli Baar",
      artist: "Sukriti Kakkar",
      image: "https://i.ytimg.com/vi/4wKnfhUfEng/maxresdefault.jpg"
    },
    {
      s_name: "Suzume",
      artist: "REDWIMPS",
      image: "https://upload.wikimedia.org/wikipedia/en/b/b3/Radwimps_%26_Kazuma_Jinnouchi_-_Suzume.jpg"
    }
  ]
  return (
    <>
      <PlaylistCard playlist={playlist} />
      
      <UserContext.Provider value={user}>
        <Feed />
      </UserContext.Provider>
      
      <FlipkartProductList />
    </>
  )
}

export default App