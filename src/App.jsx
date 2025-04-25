import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/programs" element={<Programs/>}/>
      </Routes>
    </>
  );
}

export default App;
