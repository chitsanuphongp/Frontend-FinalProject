import './App.css';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Landingpage from './pages/landingpage.js';
import Login from './pages/login.js';
import Register from './pages/register.js';
import Checkprize from './pages/checkprize.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
      <div className="App">
        <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Landingpage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={ <Register/> }/>
          <Route path='/checkprize' element={ <Checkprize/> }/>
        </Routes>
      <Footer style={{ bottom:0, display: 'flex', position: 'absolute' }}/>
      </BrowserRouter>
      </div>
  );
}

export default App;
