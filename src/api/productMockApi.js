import { mockData } from "./mockData";

export const getMockProduct = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: mockData });
      reject({ error: false });
    }, 2 * 1000);
  });
};

export const updateProduct = () => {
  return new Promise((resolve, reject) => {
    resolve({ success: true });
    reject({ error: false });
  });
};

export const deleteProduct = () => {
  return new Promise((resolve, reject) => {
    resolve({ success: true });
    reject({ error: false });
  });
};

export const addProduct = () => {
  return new Promise((resolve, reject) => {
    resolve({ success: true });
    reject({ error: false });
  });
};

export const mockApi = (method) => {
  switch (method) {
    case "get":
      return getMockProduct();
    case "put":
      return updateProduct();
    case "delete":
      return deleteProduct();
      case "post":
      return addProduct();
  }
};
