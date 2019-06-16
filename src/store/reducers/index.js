import { combineReducers } from "redux";
import getProductsList from "./getProductsReducer";
import loadingReducer from "./loadingReducer";
import getDataProduct from "./getDataProductReducer";

const rootReducer = combineReducers({
  getProductsList,
  getDataProduct,
  loadingReducer
});

export default rootReducer;
