import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import ProgramDetails from "./pages/ProgramDetails";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/programs" element={<Programs/>}/>
        <Route path="/programs/:id" element={<ProgramDetails/>}/>
      </Routes>
    </>
  );
}

export default App;
