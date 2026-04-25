function orderNow(product) {
  let phone = "916291387141"; // replace with your number
  let message = `Hi, I want to order ${product}`;
  let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
