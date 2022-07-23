import fishes from "./products/fishes.mjs";
import fruits from "./products/fruits.mjs";
import meat from "./products/meat.mjs";
import vegetables from "./products/vegetables.mjs";
import { addToCart } from "./utils.mjs";

const fish_block = document.querySelector("#fish_cards");
const vegetable_block = document.querySelector("#vegetable_cards");
const meat_block = document.querySelector("#meat_cards");
const fruit_block = document.querySelector("#fruit_cards");

function showProducts(parent, products) {
  parent.innerHTML = products
    .map(
      (product) => `
        <div class="col-lg-3 col-md-4">
            <div class="single_product d-flex flex-column shadow">
                <img src=${product.image} alt=${product.title} height="200px"  />
                <div class="product_body px-3">
                    <h5>${product.title}</h5>
                    <p>tk.${product.price}.00/kg</p>
                </div>
                <button class="btn btn-primary add_cart"><span>Add to cart</span><i class="fas fa-cart-plus ms-2"></i></button>
            </div>
        </div>`
    )
    .join("");
}

showProducts(fish_block, fishes);
showProducts(vegetable_block, vegetables);
showProducts(meat_block, meat);
showProducts(fruit_block, fruits);

document.querySelectorAll(".add_cart").forEach((btn) => {
  btn.addEventListener("click", addToCart);
});
