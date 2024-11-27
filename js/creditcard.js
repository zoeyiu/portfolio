const correctPassword = "123456"; // 设定密码
const titleContainer = document.getElementById("titleContainer");
const passwordContainer = document.getElementById("passwordContainer");
const passwordInput = document.getElementById("passwordInput");
const submitBtn = document.getElementById("submitBtn");
const errorMessage = document.getElementById("errorMessage");
const protectedContent = document.getElementById("protectedContent");
const backBtn = document.getElementById("backBtn");

// 页面加载时显示标题和密码输入框
function resetPage() {
  titleContainer.style.display = "block"; // 显示标题
  passwordContainer.style.display = "block"; // 显示密码输入框
  protectedContent.style.display = "none"; // 隐藏受保护内容
  errorMessage.style.display = "none"; // 隐藏错误信息
}

// 点击提交按钮
submitBtn.addEventListener("click", () => {
  const userPassword = passwordInput.value;
  if (userPassword === correctPassword) {
    showProtectedContent();
  } else {
    errorMessage.style.display = "block"; // 显示错误信息
  }
});

// 返回按钮点击事件
backBtn.addEventListener("click", resetPage);

// 显示受保护的内容
function showProtectedContent() {
  titleContainer.style.display = "none"; // 隐藏标题
  passwordContainer.style.display = "none"; // 隐藏输入框和按钮
  protectedContent.style.display = "block"; // 显示受保护内容
  errorMessage.style.display = "none"; // 隐藏错误信息（如果之前显示过）
}

// 初始化页面
resetPage();
