
import { routerLinks } from './router/router';
import { Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Home } from './pages/home';
import { Xndir1 } from './pages/xndir1';
import { Xndir2 } from './pages/xndir2';

function App() {
  return (
    <div className="App">
      <header>
        <ul>
          <li>
            <NavLink to={routerLinks.HOME} >Home</NavLink>
          </li>
          <li>
            <NavLink to={routerLinks.XNDIR1} >Xndir1</NavLink>
          </li>
          <li>
            <NavLink to={routerLinks.XNDIR2} >Xndir2</NavLink>
          </li>
        </ul>
      </header>
      
      <Routes>
        <Route path={routerLinks.HOME} element={<Home/>} ></Route>
        <Route path={routerLinks.XNDIR1} element={<Xndir1/>} ></Route>
        <Route path={routerLinks.XNDIR2} element={<Xndir2/>} ></Route>
      </Routes>

    </div>
  );
}

export default App;
