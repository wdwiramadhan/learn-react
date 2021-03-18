import React, { useState, useEffect } from "react";
import { getProducts } from "../../services/ProductService";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState({
    loading: false,
    data: null,
    error: false,
  });
  useEffect(() => {
    setProducts({
      loading: true,
      data: null,
      error: false,
    });
    getProducts()
      .then((res) => {
        console.log(res.data.data);
        setProducts({
          loading: false,
          data: res.data.data,
          error: false,
        });
      })
      .catch((err) =>
        setProducts({
          loading: false,
          data: null,
          error: true,
        })
      );
  }, [setProducts]);

  return (
    <div>
      <h1 className="font-bold text-xl mb-3">Best Sellers</h1>
      {products.loading ? <Loader /> : ""}
      <div className="flex flex-wrap">
        {products.error ? (
          <p>There was an error. Refresh page or try again later.</p>
        ) : products.data ? (
          products.data.map((product, key) => (
            <div
              className="w-full sm:w-1/2 md:w-1/3 lg:w-product border mb-4 rounded overflow-hidden md:m-2 lg:m-3"
              key={key}
            >
              <Link to={`/product/${product.id}`}>
                <div>
                  <img src={product.image} alt={product.name} />
                </div>
              </Link>
              <div className="p-3">
                <h3 className="font-bold mb-3">
                  <Link to={`/product/${product.id}`}>{product.name}</Link>
                </h3>
                <div className="font-bold mb-1">$ {product.price}</div>
              </div>
            </div>
          ))
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Product;
