import { Home } from "./Views/Home"
import { Header } from "./components/Header"

function App() {
  return (
    <>
      <Header/>
      <main className="rolling">
        <Home/>
      </main>
    </>
  )
}

export default App
