import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home.js';
import Illustration from './Pages/Illustration.js';
import Photography from './Pages/Photography.js';
import Projects from './Pages/Projects.js';
import ReadingLists from './Pages/ReadingList.js';
import Blogs from './Pages/Blogs.js'

import Topbar from './components/Topbar.js';
import Footer from './components/Footer.js';



function App() {
  return (
    <Router>
      <Topbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/illustration' element={<Illustration/>}/>
        <Route path='/photography' element={<Photography/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/readinglist' element={<ReadingLists/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;