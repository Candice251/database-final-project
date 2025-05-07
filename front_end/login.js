document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const data = {
      user_id: parseInt(document.getElementById('user_id').value),
      password: document.getElementById('password').value
    };
  
    try {
      const res = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
  
      const result = await res.json();
      if (res.ok) {
        alert('登入成功');
        window.location.href = 'upload.html';
      } else {
        alert('登入失敗：' + result.message);
      }
    } catch (err) {
      alert('登入時發生錯誤');
      console.error(err);
    }
  });
  