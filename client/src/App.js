import {Route} from 'react-router-dom';
import Login from './Pages/login/login';
import Register from './Pages/register/register';
import Welcome from './Pages/present/presentation';
import styled from 'styled-components';
import Nav from './Pages/styled_components/navStyled';
import {Main} from './Pages/styled_components/mainStyled';
import {MainCont} from './components/contentMain';
import {connect} from 'react-redux';
import { useEffect} from 'react';
import { getAllPokemon } from './actions/actions';


const Ap= styled.div`
   padding: 0;
   margin: 0;
   box-sizing:border-box ;
   width: 100%;   
`;



export function App(props) {
   const dispatch= props.dispatch
   useEffect(()=>{
     dispatch(getAllPokemon())
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
             <Nav/>
             <Main>
                 <Route exact strict path='/home'>
                     <MainCont/>    
                </Route>
                <Route exact path="/home/about">
                    <div style={{"padding":"200px","backgroundColor":"blue"}}>
                       sobre que ? no se
                    </div>
                </Route>
                <Route exact path="/home/:id" render={({match})=> <div>{match.params.id}</div>}/>
                <Route exact path="/home/create" render={()=><div>Aqui iria el formulario de creacion</div>}/>
             </Main>
             
       </Route>
    </Ap>
    
    
  );
}



function mapStateToProps(state) {
   return {
     pokemons: state.pokemons,
   };
 }

export default connect(mapStateToProps)(App);
