export function addToCart() {
  const counter = document.querySelector("#cart_count");
  counter.innerHTML = Number(counter.innerHTML) + 1;
}
