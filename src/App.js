import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {WebshopProvider} from './contexts/WebshopContext';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Clothes from './components/Main/Clothes';
import Shoes from './components/Main/Shoes';
import ProductsListView from './components/Main/ProductsListView';
import ProductDetailView from './components/Main/ProductDetailView';
import CreateUser from './components/Main/CreateUser';
import Login from './components/Main/Login';
import Account from './components/Main/Account';
import SearchView from './components/Main/SearchView';
import ShoppingCart from './components/Main/ShoppingCart';
import OrderDetails from './components/Main/OrderDetails';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <WebshopProvider>
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <ProductsListView />
            </Route>
            <Route path="/clothes">
              <Clothes />
            </Route>
            <Route path="/shoes">
              <Shoes />
            </Route>
            <Route path="/product/:productId">
              <ProductDetailView />
            </Route>
            <Route path="/create-user">
              <CreateUser />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/search-result">
              <SearchView />
            </Route>
            <Route path="/shopping-cart">
              <ShoppingCart />
            </Route>
            <Route path="/order-details">
              <OrderDetails />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
          </Switch>
        </div>       
        <Footer />
      </WebshopProvider>
    </Router>
  );
}

export default App;
