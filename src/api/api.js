import { mockData } from "./mockData";
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

export const addProduct = () => {
  return callApi("post");
};

export const searchProduct = (query) => {
  return new Promise((resolve, reject) => {
    if (!query) {
      resolve({ data: [] });
    } else {
      const filteredData = mockData.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      resolve({ data: filteredData });
    }
    reject({ error: false });
  });
};
