import { Navbar, Alignment } from '@blueprintjs/core';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function Index() {
  return <h2>Home</h2>;
}

function Files() {
  return <h2>About</h2>;
}

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar className='bp4-dark'>
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>Blueprint</Navbar.Heading>
            <Navbar.Divider />
            <Link className='bp4-button bp4-minimal bp4-icon-home' to='/'>
              Home
            </Link>
            <Link
              className='bp4-button bp4-minimal bp4-icon-document'
              to='/files/'
            >
              Files
            </Link>
          </Navbar.Group>
        </Navbar>

        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1>React Electron</h1>

          <Routes>
            <Route path='/' component={Index} />
            <Route path='/files/' component={Files} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
