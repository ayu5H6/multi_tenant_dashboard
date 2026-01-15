import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom"
import { Leads,Calls} from "./routes"
import { Suspense } from "react"
import Layout from "../components/Layout"
import Loader from "../components/Loader"
function App() {
 

  return (
    <BrowserRouter>
    <Suspense fallback={<Loader/>}>
    <Routes>
      <Route element={<Layout/>}>
      <Route path="/" element={<Navigate to="/leads" />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/calls" element={<Calls />} />
      </Route>
    </Routes>
    </Suspense>
    </BrowserRouter>
  )
}

export default App
