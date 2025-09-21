import Search from "./components/Search";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Search />
      </div>
    </>
  )
}

export default App
