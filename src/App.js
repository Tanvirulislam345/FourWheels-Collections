import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Collections from './Pages/FourWheelCollection/Collections/Collections';
import Navigation from './Pages/Shared/Navigation/Navigation';
import SignUp from './Pages/Registration/SignUp/SignUp';
import SignIn from './Pages/Registration/SignIn/SignIn';
import AuthProvider from './Context/AuthProvider';
import PurchaseCar from './Pages/FourWheelCollection/PurchaseCar/PurchaseCar';
import PrivateRoute from './Pages/Registration/PrivateRoute/PrivateRoute';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import SingleProduct from './Pages/FourWheelCollection/SingleProduct/SingleProduct';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/collections">
            <Collections></Collections>
          </Route>
          <PrivateRoute path="/purchase/:carId">
            <PurchaseCar></PurchaseCar>
          </PrivateRoute>
          <Route path="/product/:carId">
            <SingleProduct></SingleProduct>
          </Route>
          <PrivateRoute path='/dashboard'>
            <DashBoard></DashBoard>
          </PrivateRoute>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="/signin">
            <SignIn></SignIn>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
