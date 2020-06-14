import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import {detailProduct} from "../../actions/productAction"

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    setProduct({
      loading: true,
      data: null,
      error: false,
    });
    detailProduct(id)
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
  },[setProduct,id]);

  return(
    <div>
      {product.loading ? <Loader/> : ''}
      <div className="flex flex-wrap">
        {product.error ?  <p>There was an error. Refresh page or try again later.</p> :
          product.data ? 
          <div>
            <h1 className="text-xl font-bold mb-3">{product.data.name}</h1>
            <div>
              <img src={product.data.images} alt={product.data.name} />
            </div>
            <div className="font-bold text-xl mb-3">$ {product.data.price}</div>
            <div>Remember, a Jedi can feel the Force flowing through him. I suggest you try it again, Luke. This time, let go your conscious self and act on instinct. Kid, I've flown from one side of this galaxy to the other. I've seen a lot of strange stuff, but I've never seen anything to make me believe there's one all-powerful Force controlling everything. There's no mystical energy field that controls my destiny. It's all a lot of simple tricks and nonsense.</div>
          </div> : ''
        }
      </div>
    </div>
  )
};

export default Detail;
