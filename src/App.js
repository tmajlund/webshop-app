import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {WebshopProvider} from './contexts/WebshopContext';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Clothes from './components/Main/Clothes';
import Shoes from './components/Main/Shoes';
import ProductsListView from './components/Main/ProductsListView';
import ProductDetailView from './components/Main/ProductDetailView';
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
          </Switch>
        </div>       
        <Footer />
      </WebshopProvider>
    </Router>
  );
}

export default App;
