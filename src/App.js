import data from './component/data'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import "./app.css";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Moviefilms from './component/moviefilms';
import Details from './component/details';

function App() {
  const [movies,setMovies] = useState(data)
  
  
  return (
    <Router>
      <Routes>
        <Route index element ={<Moviefilms movies ={movies} setMovies={setMovies}/>}></Route>
        <Route path ='/details/:idmovie' element={<Details movies ={movies}  />}></Route>


      </Routes>
    </Router>
     
    
  );
}

export default App;
