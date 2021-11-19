import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import AddProduct from "./pages/dashboard/addProduct/AddProduct";
import AddReview from "./pages/dashboard/addReview/AddReview";
import AllProducts from "./pages/allPorducts/AllProducts";
import Login from "./pages/login/login/Login";
import Register from "./pages/login/register/Register";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./pages/login/privateRoute/PrivateRoute";
import Booking from "./pages/booking/Booking";
import Dashboard from "./pages/dashboard/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/addproduct">
              <AddProduct></AddProduct>
            </PrivateRoute>
            <Route path="/addReview">
              <AddReview></AddReview>
            </Route>
            <Route path="/allProducts">
              <AllProducts></AllProducts>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
