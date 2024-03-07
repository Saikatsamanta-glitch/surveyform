import { BrowserRouter, Route,Routes } from "react-router-dom";
import "./App.css";
import Survey from "./Pages/Survey";
import Appbar from "./Components/Appbar";
import Home from "./Pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Appbar name="AI survey's" data="something" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:id" element={<Survey />} />
        <Route path="*" element={<h1>404 page not found error</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
