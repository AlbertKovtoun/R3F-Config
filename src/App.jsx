import "./style.css"
import { Experience } from "./three/Experience"

function App() {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen z-0 outline-none border-none overflow-scroll">
        <Experience />
      </div>
    </>
  )
}

export default App
