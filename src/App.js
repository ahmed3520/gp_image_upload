import logo from './logo.svg';
import './App.css';
import ImageUpload from './components/ImageUpload';
import NewImage from './components/NewImageUp';
import Parkinson from './components/Parkinson';
import Causes from './components/Causes';
import Stat from './components/Stat';
import { Routes, Route, Link, BrowserRouter} from "react-router-dom";
import Nav from './components/Navbar/Nav';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<NewImage/>} />
      <Route path="/parkinson" element={<Parkinson/>} />
      <Route path="/causes" element={<Causes/>} />
      <Route path="/statistic" element={<Stat/>} />

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
