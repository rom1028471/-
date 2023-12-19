let catalogItem = [
  { image: "./Media/images/comp/5950x.jpg", name: "AMD Ryzen 9 5950X", category:"AMD", date:"2020", architect:"Zen 3", techprocess:"7 нм", core:"16", threads:"32", clock:"3.4 ГГц", IGP:"Нет", TDP:"105 W",  price: 51000 },
  { image: "./Media/images/comp/5900x.jpg", name: "AMD Ryzen 9 5900X", category:"AMD", date:"2020", architect:"Zen 3", techprocess:"7 нм", core:"12", threads:"24", clock:"3.7 ГГц", IGP:"Нет", TDP:"105 W",  price: 45000 },
  { image: "./Media/images/comp/xe1650.jpg", name: "Intel Xeon E5-1650", category:"INTEL", date:"2012", architect:"Sandy Bridge", techprocess:"32 нм", core:"6", threads:"12", clock:"3.2 ГГц", IGP:"Нет", TDP:"130 W",  price: 2100 },
  { image: "./Media/images/comp/13900k.jpg", name: "Intel Core i9 13900K", category:"INTEL", date:"2022", architect:"Raptor Lake", techprocess:"10 нм", core:"8", threads:"16", clock:"3.0 ГГц", IGP:"UHD Graphics 770", TDP:"125 W",  price: 60000 },
  { image: "./Media/images/comp/cel4930.jpg", name: "Intel Celeron G4930", category:"INTEL", date:"2019", architect:"Coffee Lake", techprocess:"14 нм", core:"2", threads:"2", clock:"3.2 ГГц", IGP:"UHD Graphics 610", TDP:"54 W",  price: 4900 },
  { image: "./Media/images/comp/3600.jpg", name: "AMD Ryzen 5 3600", category:"AMD", date:"2019", architect:"Zen 2", techprocess:"7 нм", core:"6", threads:"12", clock:"3.6 ГГц", IGP:"Нет", TDP:"65 W",  price: 8200 },
  { image: "./Media/images/comp/9900kf.jpg", name: "Intel Core i9 9900KF", category:"INTEL", date:"2019", architect:"Coffee Lake", techprocess:"14 нм", core:"8", threads:"16", clock:"3.6 ГГц", IGP:"Нет", TDP:"95 W",  price: 23000 },
  { image: "./Media/images/comp/7600.jpg", name: "AMD Ryzen 5 7600", category:"AMD", date:"2023", architect:"Zen 4", techprocess:"5 нм", core:"6", threads:"12", clock:"3.8 ГГц", IGP:"Radeon Graphics", TDP:"65 W",  price: 28000 }, 
  { image: "./Media/images/comp/5700.jpg", name: "AMD Ryzen 7 5700G", category:"AMD", date:"2021", architect:"Zen 3", techprocess:"7 нм", core:"8", threads:"16", clock:"3.8 ГГц", IGP:"Radeon RX Vega 8", TDP:"45-65 W",  price: 19600 },
  { image: "./Media/images/comp/10900k.jpg", name: "Intel Core i9 10900K", category:"INTEL", date:"2020", architect:"Comet Lake", techprocess:"14 нм", core:"10", threads:"20", clock:"3.7 ГГц", IGP:"UHD Graphics 630", TDP:"125 W",  price: 47900 },
  { image: "./Media/images/comp/1200.jpg", name: "AMD Ryzen 3 1200", category:"AMD", date:"2017", architect:"Zen", techprocess:"14 нм", core:"4", threads:"4", clock:"3.1 ГГц", IGP:"Нет", TDP:"65 W",  price: 6000 },
  { image: "./Media/images/comp/13700kf.jpg", name: "Intel Core i7 13700KF", category:"INTEL", date:"2022", architect:"Raptor Lake", techprocess:"10 нм", core:"8", threads:"16", clock:"3.4 ГГц", IGP:"Нет", TDP:"125 W",  price: 33200 },
  { image: "./Media/images/comp/13100f.jpg", name: "Intel Core i3 13100F", category:"INTEL", date:"2023", architect:"Raptor Lake", techprocess:"10 нм", core:"4", threads:"8", clock:"3.4 ГГц", IGP:"Нет", TDP:"58 W",  price: 12300 },
  { image: "./Media/images/comp/7900x.jpg", name: "AMD Ryzen 9 7900X", category:"AMD", date:"2022", architect:"Zen 4", techprocess:"5 нм", core:"12", threads:"24", clock:"4.7 ГГц", IGP:"Radeon Graphics", TDP:"270 W",  price: 51800 },
  { image: "./Media/images/comp/3990x.jpg", name: "AMD Threadripper 3990X", category:"AMD", date:"2020", architect:"Castle Peak", techprocess:"7 нм", core:"64", threads:"128", clock:"2.9 ГГц", IGP:"Нет", TDP:"280 W",  price: 351000 },
];

let addedItems = [];

let catalogItemNow = [];

let currentMinPrice = null;
let currentMaxPrice = null;
let currentSortOrder = null;
let currentCategory = null;
let itemDiv; 


document.querySelector("button").addEventListener("click", function () {
  currentMinPrice = parseInt(document.querySelector("#min_price").value);
  currentMaxPrice = parseInt(document.querySelector("#max_price").value);
 });

 document.querySelector("#min_price").addEventListener("change", function () {
  currentMinPrice = parseInt(this.value);
 });
 
 document.querySelector("#max_price").addEventListener("change", function () {
  currentMaxPrice = parseInt(this.value);
 });

// Обработчик события на кнопку "По убыванию"
document.getElementById("incr_button").addEventListener("click", function () {
  currentSortOrder = "desc";
 });

// Обработчик события на кнопку "По возрастанию"
document.getElementById("decr_button").addEventListener("click", function () {
  currentSortOrder = "asc";
 });

function displayCatalogItems(items) {
  let catalogContainer = document.querySelector(".container1");
  catalogContainer.innerHTML = "";
  items.forEach((item) => {
    let productContainer = document.createElement("div");
    productContainer.classList.add("product-container");

    let itemName = document.createElement("div");
    itemName.textContent = item.name;
    itemName.classList.add("caption");

    let itemPrice = document.createElement("div");
    itemPrice.textContent = item.price + "р";
    itemPrice.classList.add("caption-price");

    let itemImg = document.createElement("img");
    itemImg.src = item.image;
    itemImg.classList.add("product-img");

    let addToCompareButton = document.createElement("button");
    addToCompareButton.classList.add("button-add");
    addToCompareButton.textContent = "Add to comparison";

   addToCompareButton.addEventListener("click", function() {
    showNotification();
   });
   addToCompareButton.addEventListener("click", function() {
       addToComparisonList(item);
   });

   

    productContainer.appendChild(addToCompareButton);
    productContainer.appendChild(itemImg);
    productContainer.appendChild(itemName);
    productContainer.appendChild(itemPrice);
    catalogContainer.appendChild(productContainer);
  });
  catalogItemNow = items;
}
displayCatalogItems(catalogItem);

document.getElementById("category_filter").addEventListener("change", function () {
  currentCategory = this.value;
 });




document.getElementById('filter_button').addEventListener('click', function() {
 document.querySelector('.filter_items').classList.toggle('show');
 document.querySelector('.overlay').classList.toggle('show');
});

document.getElementById('ok_button').addEventListener('click', function() {
  document.querySelector('.filter_items').classList.toggle('show');
  document.querySelector('.overlay').classList.toggle('show');
 
  // Применяем фильтры
  if (currentCategory !== null) {
    catalogItemNow = catalogItem.filter(item => item.category === currentCategory);
  } else {
    catalogItemNow = [...catalogItem];
  }
 
  // Применяем сортировку
  if (currentSortOrder === "desc") {
    catalogItemNow.sort((a, b) => b.price - a.price);
  } else if (currentSortOrder === "asc") {
    catalogItemNow.sort((a, b) => a.price - b.price);
  }

  if (!isNaN(currentMinPrice) && !isNaN(currentMaxPrice)) {
    catalogItemNow = catalogItemNow.filter(
      (item) => item.price >= currentMinPrice && item.price <= currentMaxPrice
    );
  }
 
  displayCatalogItems(catalogItemNow);
 });
 
 


function addToComparisonList(item) {
  
  let rows = addedItems.length;
  if (addedItems.includes(item)) {
    showNotification({content: "This item has already been added.", type: "info"});
    return;
  } 
  if (rows >= 5) {
    showNotification({content: "You can only compare up to 5 items.", type: "info"});
    return;
  }


  addedItems.push(item);
  localStorage.setItem('addedItems', JSON.stringify(addedItems));
 }


 
 const notifications = document.createElement('div');
 notifications.classList.add('notifications')
 document.body.appendChild(notifications)
 
 const svgIcon = `<svg class="notification__close" width="16px" height="16px" viewBox="0 0 0.32 0.32" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" fill-rule="evenodd" d="M0.226 0.066a0.02 0.02 0 1 1 0.028 0.028L0.188 0.16l0.066 0.066a0.02 0.02 0 0 1 -0.028 0.028L0.16 0.188l-0.066 0.066a0.02 0.02 0 0 1 -0.028 -0.028L0.132 0.16 0.066 0.094a0.02 0.02 0 0 1 0.028 -0.028L0.16 0.132l0.066 -0.066Z"/></svg>`;
 
 notifications.addEventListener('click', function(event) {
  if (event.target.classList.contains('notification__close')) {
    const item = event.target.closest('.toast-notification');
    item.remove();
  }
 });
 
 function showNotification(options) {
  var notification = document.createElement('div');
  notification.classList.add(options.type);
  notification.classList.add('toast-notification');
  setTimeout(() => {
    notification.classList.add('show');
  }, 100);
  notification.innerHTML = `
    <p>${options.content}</p>
    <a class="notification__close">
      ${svgIcon}
    </a>
  `
 
  notifications.appendChild(notification);
 
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      notification.remove();
    }, 600);
  }, 4000);
 }




 document.querySelectorAll('.product-container').forEach((product, index) => {
  product.addEventListener('click', function() {
    let modal = document.getElementById("myModal");
    let productDetails = document.getElementById("productDetails");
    let close = document.querySelector('.close');
 
    // Заполнение информацией о товаре
    productDetails.innerHTML = `
    <img src="${catalogItem[index].image}" alt="${catalogItem[index].name}">
     <h2>${catalogItem[index].name}</h2>
     <p>Category: ${catalogItem[index].category}</p>
     <p>Date: ${catalogItem[index].date}</p>
     <p>Architect: ${catalogItem[index].architect}</p>
     <p>Tech Process: ${catalogItem[index].techprocess}</p>
     <p>Core: ${catalogItem[index].core}</p>
     <p>Threads: ${catalogItem[index].threads}</p>
     <p>Clock: ${catalogItem[index].clock}</p>
     <p>IGP: ${catalogItem[index].IGP}</p>
     <p>TDP: ${catalogItem[index].TDP}</p>
     <p>Price: ${catalogItem[index].price}</p>
   `;
 
    // Отображение модального окна
    modal.style.display = "block";
 
    // Закрытие модального окна при клике на крестик
    close.onclick = function() {
      modal.style.display = "none";
    }
 
    // Закрытие модального окна при клике вне его области
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });
 });
