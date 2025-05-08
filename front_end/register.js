document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#registerForm");
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault(); // 防止表單預設跳頁
      const name = document.querySelector("#name").value.trim();
      const email = document.querySelector("#email").value.trim();
      const password = document.querySelector("#password").value;
  
      try {
        const res = await fetch("http://localhost:3000/api/user/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        });
  
        const data = await res.json();
        if (res.ok) {
          alert("註冊成功！");
          window.location.href = "login.html"; // 成功後跳轉登入頁
        } else {
          alert(data.message || "註冊失敗");
        }
      } catch (err) {
        alert("連線錯誤");
        console.error(err);
      }
    });
  });
  