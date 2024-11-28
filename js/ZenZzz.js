//藍色out
// document.addEventListener("DOMContentLoaded", function () {
//     // GSAP animation for fading out the loading transition
//     gsap.to(".loading-transition", {
//       opacity: 0, // Fade out the element
//       duration: 2.0, // Duration of the fade-out effect
//       ease: "power2.inOut", // Easing function for smooth transition
//       onComplete: function () {
//         document.querySelector(".loading-transition").style.display = "none"; // Hide the element
//       }
//     });
// });




//60% Percentage Numbers
function animatePercentage(element, target, duration) {
  let start = 0;
  let increment = target / (duration / 50);
  let interval = setInterval(() => {
      start += increment;
      if (start >= target) {
          start = target;
          clearInterval(interval);
      }
      element.innerText = Math.floor(start) + "%";
  }, 50);
}

// percentage1: 使用 IntersectionObserver 監控 #percentage 元素是否進入視窗
const percentageElement = document.getElementById("percentage1");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          // 當元素進入視窗範圍時，觸發動畫
          animatePercentage(percentageElement, 61, 3000);
          observer.unobserve(entry.target); // 觸發一次後停止觀察
      }
  });
}, { threshold: 0.5 }); // 設定當元素進入視窗 50% 時觸發

observer.observe(percentageElement); // 開始觀察

// percentage2: 使用 IntersectionObserver 監控 #percentage 元素是否進入視窗
const percentageElement2 = document.getElementById("percentage2");

const observer2 = new IntersectionObserver((entries, observer2) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          // 當元素進入視窗範圍時，觸發動畫
          animatePercentage(percentageElement2, 63, 3000);
          observer2.unobserve(entry.target); // 觸發一次後停止觀察
      }
  });
}, { threshold: 0.5 }); // 設定當元素進入視窗 50% 時觸發

observer2.observe(percentageElement2); // 開始觀察

// percentage3: 使用 IntersectionObserver 監控 #percentage 元素是否進入視窗
const percentageElement3 = document.getElementById("percentage3");

const observer3 = new IntersectionObserver((entries, observer3) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          // 當元素進入視窗範圍時，觸發動畫
          animatePercentage(percentageElement3, 95, 3000);
          observer3.unobserve(entry.target); // 觸發一次後停止觀察
      }
  });
}, { threshold: 0.5 }); // 設定當元素進入視窗 50% 時觸發

observer3.observe(percentageElement3); // 開始觀察

// percentage4: 使用 IntersectionObserver 監控 #percentage 元素是否進入視窗
const percentageElement4 = document.getElementById("percentage4");

const observer4 = new IntersectionObserver((entries, observer4) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          // 當元素進入視窗範圍時，觸發動畫
          animatePercentage(percentageElement4, 76, 3000);
          observer4.unobserve(entry.target); // 觸發一次後停止觀察
      }
  });
}, { threshold: 0.5 }); // 設定當元素進入視窗 50% 時觸發

observer4.observe(percentageElement4); // 開始觀察

//放大圖片遮罩
// 取得圖片和遮罩
const images = document.querySelectorAll('.interview-img img');
const images2 = document.querySelectorAll('.persona-img img');
const images3 = document.querySelectorAll('.UI-img img');
const overlay = document.getElementById('overlay');
const zoomedImage = document.getElementById('zoomedImage');
const closeBtn = document.getElementById('closeBtn');

// 當圖片被點擊時顯示放大效果
images.forEach(image => {
    image.addEventListener('click', () => {
        const src = image.src; // 取得被點擊圖片的 src
        zoomedImage.src = src; // 設定放大圖片的 src
        overlay.style.display = 'flex'; // 顯示遮罩
    });
});
images2.forEach(image2 => {
  image2.addEventListener('click', () => {
      const src = image2.src; // 取得被點擊圖片的 src
      zoomedImage.src = src; // 設定放大圖片的 src
      overlay.style.display = 'flex'; // 顯示遮罩
  });
});
images3.forEach(image3 => {
  image3.addEventListener('click', () => {
      const src = image3.src; // 取得被點擊圖片的 src
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


//section6圓圈
document.addEventListener("DOMContentLoaded", () => {
  const section6 = document.querySelector(".section6");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        triggerAnimations();
        observer.unobserve(section6); // 動畫觸發一次後取消監聽
      }
    });
  });

  observer.observe(section6);

  function triggerAnimations() {
    // 淡入 Insight 圓圈和矩形框
    setTimeout(() => {
      document.getElementById("insight").style.opacity = 1;
      document.getElementById("insight-rect").style.opacity = 1;

      // 延長 line1 並淡入 Needs 圓圈和矩形框
      setTimeout(() => {
        const line1 = document.getElementById("line1");
        line1.style.opacity = 1;
        line1.style.height = "50px";

        setTimeout(() => {
          document.getElementById("needs").style.opacity = 1;
          document.getElementById("needs-rect").style.opacity = 1;

          // 延長 line2 並淡入 Values 圓圈和矩形框
          setTimeout(() => {
            const line2 = document.getElementById("line2");
            line2.style.opacity = 1;
            line2.style.height = "50px";

            setTimeout(() => {
              document.getElementById("values").style.opacity = 1;
              document.getElementById("values-rect").style.opacity = 1;

              // 最後淡入箭頭
              setTimeout(() => {
                const arrow = document.querySelector(".long-arrow");
                arrow.style.opacity = 1;
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }
});



