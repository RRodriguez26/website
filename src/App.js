import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './components/navbar';
import Illustration from './Pages/Illustration';
import Photography from './Pages/Photography';
import Projects from './Pages/Projects';
import ReadingLists from './Pages/ReadingList';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/illustration' element={<Illustration/>}/>
        <Route path='/photography' element={<Photography/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/readinglists' element={<ReadingLists/>}/>
      </Routes>
    </Router>
  );
}

export default App;
