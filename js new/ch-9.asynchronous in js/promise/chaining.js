function addToCart() {
  return new Promise(resolve => resolve("Item added to cart"));
}

function makePayment() {
  return new Promise(resolve => resolve("Payment success"));
}

function orderConfirm() {
  return new Promise(resolve => resolve("Order confirmed"));
}

addToCart()
  .then(msg => {
    console.log(msg);
    return makePayment();
  })
  .then(payMsg => {
    console.log(payMsg);
    return orderConfirm();
  })
  .then(confirmMsg => {
    console.log(confirmMsg);
  })
  .catch(err => console.log(err));
