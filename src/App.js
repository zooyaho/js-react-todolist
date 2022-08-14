import Home from "./routes/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/write" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
