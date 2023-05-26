import './App.scss';
import {useContext} from "react";
import {LanguageContext} from "./context";
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import MovieDetails from "./pages/MovieDetails";
import ActorsDetails from "./pages/ActorsDetails";
import Search from "./pages/Search";
import {BsMoon} from "react-icons/bs";
import Footer from "./components/Footer";

function App() {
  const {setDark} = useContext(LanguageContext)
  const root = document.querySelector('#root')

  const darks=()=>{
    if(!root.classList.contains('active')){
      root.classList.add('active')
      root.style.background='black'
      root.style.color='white'
    }else {
      root.classList.remove('active')
      root.style.background='white'
      root.style.color='black'
    }
  }
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path={"/"} element={ <Home/>}/>
        <Route path={"/popular"} element={ <Popular/>}/>
        <Route path={"/topRated"} element={ <TopRated/>}/>
        <Route path={"/movie/details/:movieId"} element={ <MovieDetails/>}/>
        <Route path={"/actors/details/:actorsId"} element={ <ActorsDetails/>}/>
        <Route path={"/movie/search/:searchName"} element={ <Search/>}/>
      </Routes>
      <BsMoon onClick={()=>setDark(darks)} className= 'darkTem'/>
      <Footer/>
    </div>
  );
}

export default App;
