import {Route,} from 'react-router-dom';
import Login from './Pages/login/login';
import Register from './Pages/register/register';
import Welcome from './Pages/present/presentation';
import styled from 'styled-components';
import Nav from './Pages/styled_components/navStyled';
import {Home} from './Pages/Home/home.js'
import MainCont from './components/Home/contentMain';
import {useDispatch} from 'react-redux';
import { useEffect} from 'react';
import { getAllPokemon,getAlltypes,getById} from './actions/actions';
import Details from './Pages/Home/subpages/pokeDetails';
import CreatePage from './Pages/Home/subpages/create';


const Ap= styled.div`
   padding: 0;
   margin: 0;
   box-sizing:border-box ;
   width: 100%;   
`;



export default function App() {
   const dispatch= useDispatch()
   useEffect(()=>{
     dispatch(getAllPokemon())
     dispatch(getAlltypes())
     
   },[dispatch])
   
  
  return (
    <Ap className="App">
       <Route exact strict  path="/">
              <Welcome/>
       </Route>
       <Route exact  path="/register">
              <Register/>
       </Route>
       <Route exact path="/login">
              <Login/>
       </Route>
       <Route path='/home'>
             <Home>
                <Nav/>
                <Route exact strict path='/home'>
                   <MainCont/>
                </Route>
                <Route exact path="/home/about">
                    <div style={{"padding":"200px","backgroundColor":"blue"}}>
                       sobre que ? no se
                    </div>
                </Route>
                <Route exact path="/home/pokemons/:id" render={({match})=>dispatch(getById(match.params.id))&&<Details />}/>
                <Route exact path="/home/create">
                     <CreatePage/>
                </Route>
             </Home>
             
       </Route>
    </Ap>
    
    
  );
}




