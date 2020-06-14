import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Product from "./views/Product/Product";
import DetailProduct from "./views/Product/Detail";
import Todo from "./views/Todo/Todo";
import CreateTodo from "./views/Todo/Create";
import About from "./views/About";
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
