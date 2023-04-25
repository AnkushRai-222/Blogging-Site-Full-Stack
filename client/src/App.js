import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from './pages/Home'
import "./App.css";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          {/* <Route path="/createBook" element={<CreateBook />} /> */}
          {/* <Route path="/readBook" element={<ReadBook />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
