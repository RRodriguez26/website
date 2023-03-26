import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Illustration from './Pages/Illustration';
import Photography from './Pages/Photography';
import Projects from './Pages/Projects';
import ReadingLists from './Pages/ReadingList';
import Blogs from './Pages/Blogs'

import Topbar from './components/Topbar';
import Footer from './components/Footer';

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