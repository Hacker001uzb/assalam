
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home'
import About from './components/About/About'
import  Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/About' element={<About></About>}/>
        <Route path='/Contact' element={<Contact></Contact>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;