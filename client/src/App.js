import "./App.css";
import { useEffect, useState } from "react";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Product";
import Search from "./component/Product/Search";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import axios from "axios";
import Payment from "./component/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
import OrderList from "./component/Admin/OrderList";
import ProcessOrder from "./component/Admin/ProcessOrder";
import UsersList from "./component/Admin/UsersList";
import UpdateUser from "./component/Admin/UpdateUser";
import ProductReviews from "./component/Admin/ProductReview";
import Contact from "./component/layout/Contact/Contact";
import About from "./component/layout/About/About";
import NotFound from "./component/layout/NotFound/NotFound";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Header />

      {isAuthenticated && <UserOptions user={user} />}

      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <Route
            exact
            path="/process/payment"
            component={Payment}
            element={<ProtectedRoute />}
          />
        </Elements>
      )}

      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:keyword" component={Products} />

        <Route exact path="/search" component={Search} />

        <Route exact path="/contact" component={Contact} />

        <Route exact path="/about" component={About} />

        <Route
          exact
          path="/account"
          component={Profile}
          element={<ProtectedRoute />}
        />

        <Route
          exact
          path="/me/update"
          component={UpdateProfile}
          element={<ProtectedRoute />}
        />

        <Route
          exact
          path="/password/update"
          component={UpdatePassword}
          element={<ProtectedRoute />}
        />

        <Route exact path="/password/forgot" component={ForgotPassword} />

        <Route exact path="/password/reset/:token" component={ResetPassword} />

        <Route exact path="/login" component={LoginSignUp} />

        <Route exact path="/cart" component={Cart} />

        <Route exact path="/shipping" component={Shipping} />

        <Route
          exact
          path="/success"
          component={OrderSuccess}
          element={<ProtectedRoute />}
        />

        <Route
          exact
          path="/orders"
          component={MyOrders}
          element={<ProtectedRoute />}
        />

        <Route
          exact
          path="/order/confirm"
          component={ConfirmOrder}
          element={<ProtectedRoute />}
        />

        <Route
          exact
          path="/order/:id"
          component={OrderDetails}
          element={<ProtectedRoute />}
        />

        <Route
          isAdmin={true}
          exact
          path="/admin/dashboard"
          component={Dashboard}
          element={<ProtectedRoute />}
        />

        <Route
          exact
          path="/admin/products"
          isAdmin={true}
          component={ProductList}
          element={<ProtectedRoute />}
        />

        <Route
          exact
          path="/admin/product"
          isAdmin={true}
          component={NewProduct}
          element={<ProtectedRoute />}
        />

        <Route
          exact
          path="/admin/product/:id"
          isAdmin={true}
          component={UpdateProduct}
          element={<ProtectedRoute />}
        />

        <Route
          exact
          path="/admin/orders"
          isAdmin={true}
          component={OrderList}
          element={<ProtectedRoute />}
        />

        <Route
          exact
          path="/admin/order/:id"
          isAdmin={true}
          component={ProcessOrder}
          element={<ProtectedRoute />}
        />

        <Route
          exact
          path="/admin/users"
          isAdmin={true}
          component={UsersList}
          element={<ProtectedRoute />}
        />

        <Route
          exact
          path="/admin/user/:id"
          isAdmin={true}
          component={UpdateUser}
          element={<ProtectedRoute />}
        />

        <Route
          exact
          path="/admin/reviews"
          isAdmin={true}
          component={ProductReviews}
          element={<ProtectedRoute />}
        />

        <Route
          component={
            window.location.pathname === "/process/payment" ? null : NotFound
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
