import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import { Login } from './components/Login';
import SignUp from './components/SignUp';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;