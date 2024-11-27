//放大圖片遮罩
// 取得圖片和遮罩
const images = document.querySelectorAll('.Wireframe img');
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


//圖片
let currentIndex = 0;
const Prototype = document.querySelectorAll('.scroll-box img');

function showImage(index) {
    Prototype.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % Prototype.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + Prototype.length) % Prototype.length;
    showImage(currentIndex);
}

// 初始化顯示第一張圖片
showImage(currentIndex);
