document.addEventListener('DOMContentLoaded', function () {
  const userId = localStorage.getItem('loggedInUser');
  /*if (!userId) {
    alert('請先登入');
    window.location.href = 'login.html';
    return;
  }*/

  const cartKey = `cart_${userId}`;
  let cart = JSON.parse(localStorage.getItem(cartKey)) || [];

  const cartList = document.getElementById('cartList');
  const totalPriceElem = document.getElementById('totalPrice');

  if (cart.length === 0) {
    cartList.innerHTML = '<p>購物車是空的</p>';
    totalPriceElem.textContent = '';
    return;
  }

  let total = 0;
  cart.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    itemDiv.innerHTML = `
      <p><strong>${item.product_name}</strong></p>
      <p>價格：$${item.price}</p>
      <button onclick="removeItem(${index})">刪除</button>
    `;
    cartList.appendChild(itemDiv);
    total += item.price;
  });

  totalPriceElem.textContent = `總金額：$${total}`;
});

function removeItem(index) {
  const userId = localStorage.getItem('loggedInUser');
  const cartKey = `cart_${userId}`;
  let cart = JSON.parse(localStorage.getItem(cartKey)) || [];

  cart.splice(index, 1);
  localStorage.setItem(cartKey, JSON.stringify(cart));
  location.reload();
}

function clearCart() {
  const userId = localStorage.getItem('loggedInUser');
  const cartKey = `cart_${userId}`;
  localStorage.removeItem(cartKey);
  location.reload();
}