import Header from "./components/Header"
import { Outlet } from "react-router-dom"



function App() {
  return (
    <div className="flex flex-col h-screen bg-primary">
      <div className="relative top-0">
        <Header />
      </div>
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  )
}

export default App
