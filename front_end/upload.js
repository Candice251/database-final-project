document.getElementById('uploadForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // 阻止表單的預設提交行為
    
    const formData = new FormData();  // 使用 FormData 來處理包含文件的表單資料
    
    // 取出表單中的商品名稱、價格、描述與圖片
    formData.append('product_name', document.getElementById('product_name').value);
    formData.append('price', document.getElementById('price').value);
    formData.append('description', document.getElementById('description').value);
    formData.append('image', document.getElementById('image').files[0]); // 這裡假設選擇了圖片
    
    try {
      // 發送 POST 請求到後端的 /upload 路徑
      const res = await fetch('/upload', {
        method: 'POST',
        body: formData  // 將 FormData 當作請求的 body
      });
      
      const result = await res.json();
      
      // 檢查是否上架成功
      if (res.ok) {
        alert('商品上架成功');
        window.location.href = 'index.html'; // 上架成功後跳轉到首頁或商品列表頁面
      } else {
        alert('上架失敗：' + result.message); // 顯示失敗訊息
      }
    } catch (err) {
      alert('上架時發生錯誤');
      console.error(err); // 顯示錯誤訊息
    }
  });
  