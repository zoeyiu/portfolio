//藍色out
document.addEventListener("DOMContentLoaded", function () {
    // GSAP animation for fading out the loading transition
    gsap.to(".loading-transition", {
      opacity: 0, // Fade out the element
      duration: 2.0, // Duration of the fade-out effect
      ease: "power2.inOut", // Easing function for smooth transition
      onComplete: function () {
        document.querySelector(".loading-transition").style.display = "none"; // Hide the element
      }
    });
});


//放大圖片遮罩
// 取得圖片和遮罩
const images = document.querySelectorAll('.Com img');
const images2 = document.querySelectorAll('.meetcontainer img');
const images3 = document.querySelectorAll('.feature img');

const overlay = document.getElementById('overlay');
const zoomedImage = document.getElementById('zoomedImage');
const closeBtn = document.getElementById('closeBtn');

// 當圖片被點擊時顯示放大效果
[...images, ...images2, ...images3].forEach(image => {
  image.addEventListener('click', () => {
      const src = image.src; // 取得被點擊圖片的 src
      zoomedImage.src = src; // 設定放大圖片的 src
      overlay.style.display = 'flex'; // 顯示遮罩
  });
});


// 點擊 "X" 按鈕或遮罩時關閉放大圖片
closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none'; // 隱藏遮罩
});

// 點擊遮罩本身也能關閉
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) { // 確保不是點擊圖片
        overlay.style.display = 'none'; // 隱藏遮罩
    }
});


//卡片翻頁
const cards = document.querySelectorAll('.card');
let isDragging = false;
let startX, startY, offsetX, offsetY, currentCard;

cards.forEach(card => {
  card.addEventListener('mousedown', startDrag);
  card.addEventListener('mousemove', dragCard);
  card.addEventListener('mouseup', endDrag);
  card.addEventListener('mouseleave', endDrag);
});

function startDrag(e) {
  isDragging = true;
  currentCard = e.target;
  startX = e.clientX;
  startY = e.clientY;
  currentCard.style.transition = 'none'; // Remove transition during drag
}

function dragCard(e) {
  if (!isDragging) return;

  offsetX = e.clientX - startX;
  offsetY = e.clientY - startY;

  // Apply the drag effect as rotation
  currentCard.style.transform = `rotateX(${offsetY / 2}deg)`;
}

function endDrag() {
  if (!isDragging) return;

  isDragging = false;
  currentCard.style.transition = 'transform 0.6s ease'; // Re-enable transition

  currentCard.style.transform = 'rotateX(0deg)'; // Reset to original position
}


//小方塊滾動
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");

  // 创建 IntersectionObserver
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      // 当元素进入视窗的一部分时触发动画
      if (entry.isIntersecting) {
        const box = entry.target;
        const container = box.closest('.container'); // 获取父容器
        
        // 触发旋转动画
        box.classList.add("active");

        // 延迟 2 秒后放大并显示文字
        setTimeout(() => {
          box.classList.add("expand");
          container.style.backgroundColor = "#ffff"; // 放大后改变容器背景色
        }, 2000); // 旋转动画时长 2 秒后开始放大并停留
      }
    });
  }, {
    threshold: 0.5 // 视窗中 50% 区域
  });

  // 观察所有 box 元素
  boxes.forEach((box) => {
    observer.observe(box);
  });
});
