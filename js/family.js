// 选择所有的轮播容器
const carouselContainers = document.querySelectorAll('.carousel-container');

// 遍历每个轮播容器
carouselContainers.forEach((carouselContainer) => {
  const carousel = carouselContainer.querySelector('.carousel');
  const items = carousel.querySelectorAll('.carousel-item');
  const leftBtn = carouselContainer.querySelector('.left-btn');
  const rightBtn = carouselContainer.querySelector('.right-btn');
  
  let currentIndex = 0;
  let autoPlayInterval; // 自动播放的定时器
  let isPaused = false; // 是否处于暂停状态

  // 更新轮播显示
  function updateCarousel() {
    items.forEach((item, index) => {
      item.classList.toggle('active', index === currentIndex); // 切换激活的图片
    });
  }

  // 显示下一张图片
  function showNextImage() {
    currentIndex = (currentIndex + 1) % items.length; // 循环到下一张图片
    updateCarousel();
  }

  // 显示上一张图片
  function showPreviousImage() {
    currentIndex = (currentIndex - 1 + items.length) % items.length; // 循环到上一张图片
    updateCarousel();
  }

  // 启动自动播放功能
  function startAutoPlay() {
    if (!isPaused) {  // 如果没有暂停才开始自动播放
      autoPlayInterval = setInterval(showNextImage, 3000); // 每3秒切换一次
    }
  }

  // 停止自动播放
  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  // 当按下鼠标时，暂停自动播放
  carouselContainer.addEventListener('mousedown', () => {
    isPaused = true;
    stopAutoPlay();  // 暂停自动播放
  });

  // 当松开鼠标时，恢复自动播放
  carouselContainer.addEventListener('mouseup', () => {
    isPaused = false;
    startAutoPlay(); // 从当前图片开始恢复自动播放
  });

  // 为按钮添加点击事件
  leftBtn.addEventListener('click', () => {
    showPreviousImage();
    stopAutoPlay();  // 停止自动播放
    startAutoPlay(); // 重新启动自动播放，从当前图片开始
  });

  rightBtn.addEventListener('click', () => {
    showNextImage();
    stopAutoPlay();  // 停止自动播放
    startAutoPlay(); // 重新启动自动播放，从当前图片开始
  });

  // 页面加载时初始化轮播
  updateCarousel();

  // 启动自动播放
  startAutoPlay();
});


//放大圖片與遮罩
// 取得圖片和遮罩
const images = document.querySelectorAll('.carousel img');

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

// 點擊關閉按鈕，隱藏遮罩層
closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
  });


