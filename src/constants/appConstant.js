export const colorVarient = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  SUCCESS: "success",
  DANGER: "danger",
  WARNING: "warning",
  INFO: "Info",
  LIGHT: "light",
  DARK: "dark",
};

export const toastPosition = {
  topStart: "top-start",
  topCenter: "top-center",
  topEnd: "top-end",
  middleStart: "middle-start",
  middleCenter: "middle-center",
  middleEnd: "middle-end",
  bottomStart: "bottom-start",
  bottomCenter: "bottom-center",
  bottomEnd: "bottom-end",
};

export const productView = {
  card: "cardView",
  list: "listView",
};

export const filterType = {
  CATEGORY: "category",
  BRAND: "brand",
  AVAILABILITY: "availability",
};

export const sortType = {
  lowToHigh: "asc",
  highToLow: "desc",
  default: "default",
};

export const productStatus = {
  upComing: "Up Coming",
  inStock: "In Stock",
  preOrder: "Pre Order",
};

export const groupType = {
  radio: "radio",
  checkBox: "checkbox",
};

export const numberFormat = (number) => {
  return Intl.NumberFormat().format(number);
};
