export const formatPrice = (price) => {
  const formatPrice = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);

  return formatPrice;
};

export const getUniqueValues = (array) => {
  return ["all", ...new Set(array)];
};
