import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "../components/navbar/Index";
import Poem from "../pages/poem/Poem";
import About from "../pages/about/About";
import Home from "../pages/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}>
            <Route path="/" element={<Home />} />
            <Route path="/poems" element={<Poem />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
