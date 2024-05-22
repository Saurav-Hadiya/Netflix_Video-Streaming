import logo from './logo.svg';
import Home from './pages/home';
import About from './pages/about';
import Video from './pages/video'
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Landing from './pages/landing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/video' element={<Video />}/>
          <Route path='/landing' element={<Landing />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
