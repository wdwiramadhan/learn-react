import axios from "axios";

const url = "https://5ed668f6c2ca2300162c6539.mockapi.io/api/v1/product/";

const getProducts = async () => {
  const products = await axios.get(url);
  return products;
};

const getProductById = async (id) => {
  const product = await axios.get(url + id);
  return product;
};

export { getProducts, getProductById };
