document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // 防止表單送出
  
    const userId = document.getElementById('user_id').value.trim();
    const password = document.getElementById('password').value.trim();
  
    // 預設測試帳號：123，密碼：test
    if (userId === '123' && password === 'test') {
      alert('登入成功');
      window.location.href = 'home.html'; // 導向下一頁（需自行建立）
    } else {
      alert('登入失敗：帳號或密碼錯誤');
    }
  });
  