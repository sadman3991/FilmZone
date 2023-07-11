
import { Container } from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from "./components/Header/Header";
import SimpleBottomNavigation from './components/MainNav';


import Trending from './pages/Trending/Trending';
import Movies from './pages/Movies/Movies';
import Search from './pages/Search/Search';
import Series from './pages/Series/Series'
import Details from './pages/Details/Details';
function App() {
  return (
    <>
      <Header/>
    <div className="app">
      <Container> 
        <Routes>
          <Route exact path='/'  element={<Trending/>}/>
          <Route path='/movies'  element={<Movies/>}/>
          <Route path='/series'  element={<Series/>}/>
          <Route path='/search'  element={<Search/>}/>
          <Route path='/:media/:id'  element={<Details/>}/>
           
        </Routes>
      </Container>
      
      <SimpleBottomNavigation/>
      
    </div>
    </>
  );
}

export default App;
