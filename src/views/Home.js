import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import {Link } from "react-router-dom";

const Home = () => {
  const url = "https://5ed668f6c2ca2300162c6539.mockapi.io/api/v1/product";
  const [products, setProducts] = useState({
    loading: false,
    data: null,
    error: false,
  });
  let content = null;
  useEffect(() => {
    setProducts({
      loading: true,
      data: null,
      error: false,
    });
    axios
      .get(url)
      .then((res) =>
        setProducts({
          loading: true,
          data: res.data,
          error: false,
        })
      )
      .catch((err) =>
        setProducts({
          loading: false,
          data: null,
          error: true,
        })
      );
  }, [url]);
  if (products.loading) {
    content = <Loader />;
  }
  if(products.error){
    content = <p>There was an error. Refresh page or try again later.</p>
  }
  if (products.data) {
    content = products.data.map((product,key) => 
      <div className="border mb-4 rounded overflow-hidden" key={key}>
        <Link to={`/product/${product.id}`}>
          <div>
            <img src={product.images} alt={product.name} />
          </div>
        </Link>
        <div className="p-3">
          <h3 className="font-bold mb-3">
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </h3>
          <div className="font-bold mb-1">
            $ {product.price}
          </div>
        </div>
      </div>
    )
  }
  return (
    <div>
      <h1 className="font-bold text-xl mb-3">Best Sellers</h1>
      {content}
    </div>
  );
};

export default Home;
