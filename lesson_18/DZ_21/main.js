// DZ 21.

// Отримуємо посилання на елементи DOM
const categoryList = document.getElementById('category-list');
const productList = document.getElementById('product-list');
const productInfo = document.getElementById('info');
const categoryTitle = document.querySelector('#categories h2');
const productTitle = document.querySelector('#products h2');
const productInfoTitle = document.querySelector('#product-info h2');

// Масив категорій та товарів (приклад данних)
const categories = [{
        id: 1,
        name: 'Категорія 1'
    },
    {
        id: 2,
        name: 'Категорія 2'
    },
    {
        id: 3,
        name: 'Категорія 3'
    }
];

const products = [{
        id: 1,
        categoryId: 1,
        name: 'Товар 1',
        description: 'Опис товару 1'
    },
    {
        id: 2,
        categoryId: 1,
        name: 'Товар 2',
        description: 'Опис товару 2'
    },
    {
        id: 3,
        categoryId: 2,
        name: 'Товар 3',
        description: 'Опис товару 3'
    },
    {
        id: 4,
        categoryId: 2,
        name: 'Товар 4',
        description: 'Опис товару 4'
    },
    {
        id: 5,
        categoryId: 3,
        name: 'Товар 5',
        description: 'Опис товару 5'
    }
];

// Функція для створення елемента списку категорій
function createCategoryItem(category) {
    const item = document.createElement('li');
    item.classList.add('category-item');
    item.innerText = category.name;
    item.addEventListener('click', () => {
        showProductsByCategory(category.id);
    });
    return item;
}

// Функція для відображення списку категорій
function showCategories() {
    categoryList.innerHTML = '';
    for (const category of categories) {
        const item = createCategoryItem(category);
        categoryList.appendChild(item);
    }
    categoryTitle.innerText = 'Категорії';
    productList.innerHTML = '';
    productInfo.innerHTML = '';
    productTitle.innerText = '';
    productInfoTitle.innerText = '';
}

// Функція для створення елемента списку товарів
function createProductItem(product) {
    const item = document.createElement('li');
    item.classList.add('product-item');
    item.innerText = product.name;
    item.addEventListener('click', () => {
        showProductInfo(product);
    });
    return item;
}

// Функція для відображення списку товарів за категорією
function showProductsByCategory(categoryId) {
    productList.innerHTML = '';
    const filteredProducts = products.filter(product => product.categoryId === categoryId);
    for (const product of filteredProducts) {
        const item = createProductItem(product);
        productList.appendChild(item);
    }
    productTitle.innerText = `Товари`;
    productInfo.innerHTML = '';
    productInfoTitle.innerText = '';
}

// Функція для відображення інформації про товар
function showProductInfo(product) {
    productInfo.innerHTML = '';
    const infoContainer = document.createElement('div');
    const name = document.createElement('h3');
    name.innerText = product.name;
    const description = document.createElement('p');
    description.innerText = product.description;
    const buyButton = document.createElement('button');
    buyButton.innerText = 'Купити';
    buyButton.addEventListener('click', () => {
        alert('Товар куплений');
        showCategories();
    });
    infoContainer.appendChild(name);
    infoContainer.appendChild(description);
    infoContainer.appendChild(buyButton);
    productInfo.appendChild(infoContainer);
    productInfoTitle.innerText = `Інформація про товар`;
}

// Виклик функції для відображення початкових категорій
showCategories();