const getInclusivePrice = function (exclusivePrice, taxRate) {
  const tax = (taxRate / 100) * exclusivePrice;
  return tax + exclusivePrice;
};

console.log(getInclusivePrice(20, 14));
