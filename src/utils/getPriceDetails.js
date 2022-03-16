function getPriceDetails(myCart) {
  return myCart.reduce(
    ({ price, discount }, item) => {
      price += item.originalPrice * item.qty;
      discount += (item.originalPrice - item.price) * item.qty;
      return { price, discount };
    },
    {
      price: 0,
      discount: 0,
      coupon: 0,
      total: 0,
    }
  );
}

export { getPriceDetails };
