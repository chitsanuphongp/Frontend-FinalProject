import './App.css';
import React from "react";

//logged in?
import { currentUser } from './functions/checkUser.js';

import { useDispatch } from "react-redux";

//routes
import UserRoute from './routes/UserRoute.js'

//components
import Header from './components/header.js';
import Footer from './components/footer.js'

//pages
import Landingpage from './pages/landingpage.js';
import Login from './pages/login.js';
import Register from './pages/register.js';
import Checkprize from './pages/checkprize.js';
import Lotterylist from './pages/lotterylist.js';
import History from './pages/history.js'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const Dispatch = useDispatch();
  const token = localStorage.getItem('token');
  if(token){
    currentUser(token)
    .then((res) => {
      console.log(res.data)
      Dispatch({
        type: 'LOGIN',
        payload: {
          id: res.data._id,
          user: res.data.user_username,
        }
      });
    })
    .catch((err) => {
      console.error(err)
    })
  }

  return (
      <div className="App">
        <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Landingpage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={ <Register/> }/>
          <Route path='/checkprize' element={ <Checkprize/> }/>
          <Route path='/lottery' element={
            <UserRoute>
              <Lotterylist/>
            </UserRoute>
             }
          />
          <Route path='/history' element={ 
            <UserRoute>
              <History/>
            </UserRoute>
          }/>
        </Routes>
      <Footer style={{ bottom:0, display: 'flex', position: 'absolute' }}/>
      </BrowserRouter>
      </div>
  );
}

export default App;
