import logo from './logo.svg';
// import './App.css';
import Header from './Components/Shared/Header';
import {Grid} from '@material-ui/core';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Gallery from './Components/Gallery/Gallery';
import Armada from './Components/About Us/Armada';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import AboutUs from './Components/About Us/AboutUs';
import Structure from './Components/About Us/Structure';
import Services1 from './Components/Services/Services1';
import Jaskudo from './Components/Services/Jaskudo';
import Jakadalu from './Components/Services/Jakadalu';
import Household from './Components/Services/Household';
import Warehouse from './Components/Services/Warehouse';
import Land from './Components/Home/Land';
import Sea from './Components/Home/Sea';
import Air from './Components/Home/Air';
import Navbar from './Components/Shared/Navbar';
import Network from './Components/Network/Network';
import FootBar from './Components/Shared/FootBar';
import Navbar1 from './Components/Shared/Navbar1';
import HomeSample from './Components/Home/HomeSample';
import HomeRelay from './Components/Home/HomeRelay';
import Coretan from './Components/Home/Coretan';
import AboutUs1 from './Components/About Us/AboutUs1';
import Structure1 from './Components/About Us/Structure1';
import Contact1 from './Components/Contact/Contact1';
import Land1 from './Components/Home/Land1';
import Sea1 from './Components/Home/Sea1';
import Air1 from './Components/Home/Air1';
import Household1 from './Components/Services/Household1';
import JakadaluX from './Components/Services/JakadaluX';
import JaskudoX from './Components/Services/JaskudoX';
import Armada1 from './Components/About Us/Armada1';


function App() {
  return (
    <div className="App"> 
      {/* <Grid style={{ border: '1px solid grey' }}> */}
        {/* <Header/> */}
        <BrowserRouter>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={HomeRelay}/>
            <Route exact path="/gallery" component={Gallery}/>
            <Route exact path="/armada" component={Armada1}/>
            <Route exact path="/jaskudo" component={JaskudoX}/>
            <Route exact path="/jakadalu" component={JakadaluX}/>
            <Route exact path="/contact" component={Contact1}/>
            <Route exact path="/household" component={Household1}/>
            <Route exact path="/warehouse" component={Warehouse}/>
            <Route exact path="/land" component={Land1}/>
            <Route exact path="/sea" component={Sea1}/>
            <Route exact path="/air" component={Air1}/>
            <Route exact path="/services" component={Services1}/>
            <Route exact path="/network" component={Network}/>
            <Route exact path="/aboutus" component={AboutUs1}/>
            <Route exact path="/structure" component={Structure1}/>
          </Switch>
        </BrowserRouter>
        {/* <Home/> */}
        <Footer/>
        {/* <FootBar/> */}
      {/* </Grid> */}
    </div>
  );
}

export default App;
