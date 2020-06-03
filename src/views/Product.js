import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

const Product = () => {
  const { id } = useParams();
  const url = "https://5ed668f6c2ca2300162c6539.mockapi.io/api/v1/product/" + id;
  const [product, setProduct] = useState({
    loading: false,
    data: null,
    error: false,
  });
  let content = null;
  useEffect(() => {
    setProduct({
      loading: true,
      data: null,
      error: false,
    });
    axios
      .get(url)
      .then((res) =>
        setProduct({
          loading: false,
          data: res.data,
          error: false,
        })
      )
      .catch((err) =>
        setProduct({
          loading: false,
          data: null,
          error: true,
        })
      );
  }, [url]);
  if (product.loading) {
    content = <Loader />;
  }
  if(product.error){
    content = <p>There was an error. Refresh page or try again later.</p>
  }
  if (product.data) {
    content = (
      <div>
        <h1 className="text-xl font-bold mb-3">{product.data.name}</h1>
        <div>
          <img src={product.data.images} alt={product.data.name} />
        </div>
        <div className="font-bold text-xl mb-3">$ {product.data.price}</div>
        <div>Remember, a Jedi can feel the Force flowing through him. I suggest you try it again, Luke. This time, let go your conscious self and act on instinct. Kid, I've flown from one side of this galaxy to the other. I've seen a lot of strange stuff, but I've never seen anything to make me believe there's one all-powerful Force controlling everything. There's no mystical energy field that controls my destiny. It's all a lot of simple tricks and nonsense.</div>
      </div>
    );
  }
  return <div>{content}</div>;
};

export default Product;
