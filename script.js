function openForm(product) {
  document.getElementById("orderForm").style.display = "block";
  document.getElementById("product").value = product;
}

function closeForm() {
  document.getElementById("orderForm").style.display = "none";
}

function submitOrder() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let product = document.getElementById("product").value;

  alert("Order Placed!\n\nProduct: " + product + "\nName: " + name);

  closeForm();
}
