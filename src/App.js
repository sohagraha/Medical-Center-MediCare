// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import AuthProvider from './contexts/AuthProvider';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import PrivateRoute from './components/Login/PrivateRoute.js/PrivateRoute';
import Specialist from './components/Specialist/Specialist';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbar></Navbar>
          <Switch>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute exact path='/services'>
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute exact path='/specialist'>
              <Specialist></Specialist>
            </PrivateRoute>
            <Route exact path='/contact'>
              <Contact></Contact>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute path='/details/:serviceId'>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
