document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#registerForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // 防止表單預設跳頁

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const phone = document.querySelector("#phone").value.trim();
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirmPassword").value;

    // 檢查密碼與確認密碼是否一致
    if (password !== confirmPassword) {
      alert("密碼與確認密碼不一致");
      return; // 若不一致，阻止表單提交
    }

    // 模擬成功的後端回應
    const data = {
      message: "註冊成功！",
    };
    setTimeout(() => {
      alert(data.message);
      window.location.href = "home.html"; // 模擬成功後跳轉
    }, 1000); // 1秒鐘後顯示成功訊息並跳轉
  });
});