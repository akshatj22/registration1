import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import Cropper from "./Pages/Cropper/Cropper"
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cropper" element={<Cropper />}></Route>
      </Routes>
    </Router>
    // <div className="App">
    //  <Home/>
    // </div>
  );
}

export default App;
