import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import HomePage from './pages/Home/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/register' element={<RegisterPage />}></Route>
          <Route path='/' element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
