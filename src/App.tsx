import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import '@/index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
            </Routes>
    </BrowserRouter>
  )
}

export default App
