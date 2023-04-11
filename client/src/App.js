import './App.css';
import  LandingPage  from './components/LandingPage/LandingPage';
import  HomePage  from "./components/HomePage/HomePage"
import {  Route} from "react-router-dom";

function App() {

  return (
    <div className="App">
     
        <Route exact path='/' component={ LandingPage }/>
        <Route exact path="/home" component={ HomePage }/>
     
    </div>
  );
}

export default App;
