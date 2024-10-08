import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/Login/LoginPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import RegisterPage from './pages/Register/RegisterPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/' element={<RegisterPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
