import axios from "axios";

export const setLoading = loading => ({
  type: "SET_LOADING",
  loading
});

export const setProducts = products => ({
  type: "GET_API_PRODUCTS",
  products
});

export const setProduct = product => ({
  type: "GET_API_PRODUCT",
  product
});

export const setDescription = description => ({
  type: "GET_DETAILS_PRODUCT",
  description
});

export const getProductsList = product => dispatch => {
  dispatch(setLoading(true));
  dispatch(setProducts(null));
  axios
    .get(`https://api.mercadolibre.com/sites/MLA/search?q=${product}`)
    .then(res => {
      dispatch(setProducts(res.data));
      dispatch(setLoading(false));
    })
    .catch(error => {
      dispatch(setLoading(false));
    });
};

export const getDataProduct = product => {
  return dispatch => {
    dispatch(setLoading(true));
    dispatch(setProduct(null));
    axios
      .get(`https://api.mercadolibre.com/items/${product}`)
      .then(res => {
        dispatch(setProduct(res.data));
      })
      .catch(error => {
        dispatch(setLoading(false));
      });
  };
};

export const getDetailProduct = description => {
  return dispatch => {
    dispatch(setLoading(true));
    dispatch(setDescription(null));
    axios
      .get(`https://api.mercadolibre.com/items/${description}/description`)
      .then(res => {
        dispatch(setDescription(res.data));
      })
      .catch(error => {
        dispatch(setLoading(false));
      });
  };
};
