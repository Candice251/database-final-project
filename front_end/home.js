document.addEventListener('DOMContentLoaded', async function () {
    try {
      const res = await fetch('/products'); // 向後端請求所有商品資料
  
      if (res.ok) {
        const products = await res.json(); // 假設後端返回的是 JSON 格式的商品資料
  
        const productsList = document.getElementById('productsList');
        
        // 如果有商品資料，顯示在頁面上
        if (products.length > 0) {
          products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.innerHTML = `
              <h3>${product.product_name}</h3>
              <p>價格：$${product.price}</p>
              <p>${product.description}</p>
              <img src="${product.image_path}" alt="${product.product_name}" width="100">
              <hr>
            `;
            productsList.appendChild(productItem);
          });
        } else {
          productsList.innerHTML = '<p>目前沒有商品上架。</p>';
        }
      } else {
        alert('無法獲取商品資料');
      }
    } catch (err) {
      console.error('錯誤:', err);
      alert('載入商品資料時發生錯誤');
    }
  });

  function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`已將「${product.product_name}」加入購物車！`);
}