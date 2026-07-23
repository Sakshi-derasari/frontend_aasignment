import './App.css'
import PlaylistCounter from './components/session4/PlaylistCounter'
import CartItem from './components/session4/CartItem'

function App() {
  const cartItems = [
    { name: "iPhone 15 Pro", price: 134900, image: "https://rukminim2.flatsatic.com/image/416/416/xif0q/mobile/3/s/9/-original-imagtc6fzgnnuhgg.jpeg" },
    { name: "Samsung Galaxy S24", price: 74999, image: "https://rukminim2.flatsatic.com/image/416/416/xif0q/mobile/j/l/p/-original-imagtc5fz7hjxkgz.jpeg" },
    { name: "OnePlus 12", price: 64999, image: "https://rukminim2.flatsatic.com/image/416/416/xif0q/mobile/h/q/f/-original-imagtct5kqzyrhgp.jpeg" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-green-400 to-blue-900 p-8">
      <div className="flex flex-col items-center gap-6">
        <PlaylistCounter />

        <h2 className="text-2xl font-bold text-white">Flipkart Cart</h2>

        {cartItems.map((item, index) => (
          <CartItem
            key={index}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  )
}

export default App
