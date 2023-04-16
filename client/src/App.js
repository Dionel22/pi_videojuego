import './App.css';
import  LandingPage  from './components/LandingPage/LandingPage';
import  HomePage  from "./components/HomePage/HomePage";
import DetailPage from './components/DetailPage/DetailPage';
import FormPage from './components/FormPage/FormPage';
import { Switch ,Route} from "react-router-dom";

function App() {

  return (
    <div className="App">
     <Switch>
        <Route exact path='/' component={ LandingPage }/>
        <Route exact path="/home" component={ HomePage }/>
        <Route path="/home/create" component={FormPage} />
        <Route path="/detail/:id" component={DetailPage} />
     </Switch>
    </div>
  );
}

export default App;
