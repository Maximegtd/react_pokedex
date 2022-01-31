import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import {Container} from 'react-bootstrap'

//pages
import Homepage from './pages/Homepage';
import PokemonPage from './pages/PokemonPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header/>
      {/* <Container> */}
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/pokemon/:id' element={<PokemonPage/>}></Route>
        </Routes>
      {/* </Container> */}
    </Router>
  );
}

export default App;
