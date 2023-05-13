// DZ 21.

const categories = [
  { id: 1, name: "Категорія 1" },
  { id: 2, name: "Категорія 2" },
  { id: 3, name: "Категорія 3" },
];

const products = [
  { id: 1, categoryId: 1, name: "Товар 1" },
  { id: 2, categoryId: 1, name: "Товар 2" },
  { id: 3, categoryId: 2, name: "Товар 3" },
  { id: 4, categoryId: 2, name: "Товар 4" },
  { id: 5, categoryId: 3, name: "Товар 5" },
  { id: 6, categoryId: 3, name: "Товар 6" },
];

const productInfo = {
  1: "Інформація про товар 1",
  2: "Інформація про товар 2",
  3: "Інформація про товар 3",
  4: "Інформація про товар 4",
  5: "Інформація про товар 5",
  6: "Інформація про товар 6",
};

// Отримати елементи DOM
const categoryList = document.getElementById("category-list");
const productList = document.getElementById("product-list");
const productInfoDiv = document.getElementById("info");

// Функція для повернення до початкового стану
function resetState() {
  productList.innerHTML = "";
  productInfoDiv.innerHTML = "";
}

// Функція для відображення списку категорій
function displayCategories() {
  resetState();
  categoryList.innerHTML = "";
  for (const category of categories) {
    const li = document.createElement("li");
    li.classList.add("category-item");
    li.textContent = category.name;
    li.addEventListener("click", () => displayProducts(category.id));
    categoryList.appendChild(li);
    categoryList.style.display = "block";
    productList.style.display = "none";
    productInfoDiv.style.display = "none";
  }
}

// Функція для відображення списку товарів певної категорії
function displayProducts(categoryId) {
  productList.innerHTML = "";
  const filteredProducts = products.filter(
    (product) => product.categoryId === categoryId
  );
  for (const product of filteredProducts) {
    const li = document.createElement("li");
    li.classList.add("product-item");
    li.textContent = product.name;
    li.addEventListener("click", () => displayProductInfo(product.id));
    productList.appendChild(li);
  }
  categoryList.style.display = "block";
  productList.style.display = "block";
  productInfoDiv.style.display = "none";
}

// Функція для відображення інформації про товар
function displayProductInfo(productId) {
  productInfoDiv.innerHTML = "";
  const info = document.createElement("p");
  info.textContent = productInfo[productId];
  const buyButton = document.createElement("button");
  buyButton.textContent = "Купити";
  buyButton.addEventListener("click", () => {
    alert("Товар куплений!");
    resetState();
    displayCategories();
  });
  productInfoDiv.appendChild(info);
  productInfoDiv.appendChild(buyButton);
  categoryList.style.display = "block";
  productList.style.display = "block";
  productInfoDiv.style.display = "none";
}

// Ініціалізація відображення категорій
displayCategories();
