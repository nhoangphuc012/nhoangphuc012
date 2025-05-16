// === TOAST THÔNG BÁO ===
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.className = "show";

  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}

// === GỬI BÌNH LUẬN ===
function guiBinhLuan() {
  const comment = document.querySelector("textarea").value.trim();
  if (!comment) {
    showToast("Vui lòng nhập bình luận.");
  } else {
    showToast("Bình luận đã gửi!");
    document.querySelector("textarea").value = '';
  }
}

// === THÊM VÀO KẾ HOẠCH ===
function themVaoKeHoach(baiTap) {
  showToast(`${baiTap} đã được thêm vào kế hoạch luyện tập!`);
  const button = event.target;
  button.style.backgroundColor = "#66bb6a";
  button.innerText = "✔ Đã thêm";
  button.disabled = true;
}

// === GỢI Ý KẾ HOẠCH LUYỆN TẬP ===
function goiYKeHoach() {
  const goal = document.getElementById("muctieu").value;
  let goiY = "Chọn mục tiêu để nhận kế hoạch luyện tập.";

  if (goal === "giamcan") {
    goiY = "Gợi ý: tập Cardio như chạy, đạp xe, nhảy dây.";
  } else if (goal === "tangco") {
    goiY = "Gợi ý: tập tạ, Deadlift, Squat, Push-up.";
  } else if (goal === "deodai") {
    goiY = "Gợi ý: tập Plank, Burpees, Bodyweight circuit.";
  }

  document.getElementById("goiy").innerText = goiY;
}

// === TÍNH KHẨU PHẦN DINH DƯỠNG ===
function tinhKhauPhan() {
  const calo = parseInt(document.getElementById("calo").value);

  if (isNaN(calo) || calo <= 0) {
    showToast("Vui lòng nhập một số calo hợp lệ.");
    return;
  }

  const result = `Khẩu phần cho ${calo} calo: 50% carb, 30% protein, 20% fat.`;
  document.getElementById("ketqua").innerText = result;
}

// === ĐĂNG NHẬP GIẢ LẬP ===
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();

  if (!username) {
    showToast("Vui lòng nhập tên đăng nhập.");
  } else {
    showToast(`Xin chào, ${username} 👋`);
  }
});

// === ĐĂNG KÝ ===
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("newUsername").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!username || !email || !password || !confirmPassword) {
    showToast("Vui lòng điền đầy đủ thông tin.");
    return;
  }

  if (password !== confirmPassword) {
    showToast("Mật khẩu không khớp.");
    return;
  }

  showToast(`Đăng ký thành công! Chào mừng, ${username}!`);
  document.getElementById("registerForm").reset();
});
