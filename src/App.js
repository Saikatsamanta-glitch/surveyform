import { BrowserRouter, Route,Routes } from "react-router-dom";
import "./App.css";
import Survey from "./Pages/Survey";
import Appbar from "./Components/Appbar";
import Home from "./Pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:id" element={<Survey />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
