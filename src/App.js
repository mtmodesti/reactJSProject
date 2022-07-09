import './App.css';
import Main from './components/main';
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from './pages/dashboard';


function App() {
  return (


    <div className="App">
    {/*  <Main /> */}
    <Routes>
      <Route path='/'  element={ <Main /> } > </Route>
      <Route path='/dashboard'  element={ <Dashboard /> } > </Route>

    </Routes>

    </div>
  );
}

export default App;