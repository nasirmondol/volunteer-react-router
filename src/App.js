import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Volunteer from './components/Volunteer/Volunteer';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/volunteers'  element={<Volunteer></Volunteer>}/>
      </Routes>
    </div>
  );
}

export default App;
