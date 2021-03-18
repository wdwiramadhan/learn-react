import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product/Product";
import DetailProduct from "./pages/Product/Detail";
import Todo from "./pages/Todo/Todo";
import CreateTodo from "./pages/Todo/Create";
import About from "./pages/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Header />
        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/product">
              <Product />
            </Route>
            <Route path="/product/:id">
              <DetailProduct />
            </Route>
            <Route exact path="/todo">
              <Todo />
            </Route>
            <Route path="/todo/create">
              <CreateTodo />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
