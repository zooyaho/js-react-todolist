import Home from "./routes/Home";
import Write from "./routes/Write";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
