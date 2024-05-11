import { apiRoutes } from "./productApiRoutes";
import { mockApi } from "./productMockApi";

const IS_MOCK = true;
export const callApi = (method) => {
  return IS_MOCK ? mockApi(method) : apiRoutes.getProduct;
};

export const getProducts = () => {
  return callApi("get");
};

export const updateProduct = () => {
  return callApi("put");
};

export const deleteProduct = () => {
  return callApi("delete");
};
