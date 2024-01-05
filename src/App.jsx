import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Skills from './pages/Skills';
import Header from './assets/components/Header';
function App() {

  return (
    <>
<Router>
  <Routes>
    <Route path='/' element={<Header></Header>}>
      <Route index element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Project' element={<Project/>}/>
      <Route path='Skills' element={<Skills/>}/>
      {/* <Route path='*' /> */}
    </Route>
  </Routes>
  
  </Router>    
    </>
  )
}

export default App
