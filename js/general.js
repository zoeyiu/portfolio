const mouseFollower = document.querySelector('.mouse-follower');
  document.addEventListener('mousemove', (e) => {
    gsap.to(mouseFollower, {
      x: e.clientX - 10, // Center the follower
      y: e.clientY - 10, // Center the follower
      duration: 0.1,
      ease: 'power1.out'
    });
  });


function toggleMenu() {
    var menu = document.getElementById("fullScreenMenu");
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
        setTimeout(function() {
            menu.style.display = "none";
        }, 500); // Match the duration of the transition
    } else {
        menu.style.display = "block";
        setTimeout(function() {
            menu.classList.add("show");
        }, 10); // Slight delay to allow for display change
    }
}


//淡入頁面loading
//淡入內容loading page
document.addEventListener("DOMContentLoaded", function () {
    const loadingTransition2 = document.querySelector(".loading-transition2");
    const mainContent = document.querySelector(".main");
  
    // 初始設置：背景為黃色，顯示 loading 層
    gsap.set(loadingTransition2, { backgroundColor: "white", opacity: 1 });
  
    // 淡出動畫：背景淡出，並在淡出完成後顯示主內容
    gsap.to(loadingTransition2, {
        opacity: 0,             // 將 loading 層淡出至透明
        duration: 1,            // 淡出時間為 2 秒
        ease: "power2.inOut",   // 平滑過渡
        onComplete: function () {
            loadingTransition2.style.display = "none"; // 淡出完成後隱藏 loading 層
            
            // 顯示主內容
            gsap.to(mainContent, {
                opacity: 1,         // 主內容淡入至可見
                duration: 2,      // 淡入時間為 1.5 秒
                ease: "power2.inOut" // 平滑過渡
            });
        }
    });
  });

//藍色loading out
document.addEventListener('DOMContentLoaded', function() {
    // 监听所有带有.page-link类的链接点击事件
    const pageLinks = document.querySelectorAll('.page-link');
    pageLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // 阻止默认链接行为

            const targetUrl = this.getAttribute('href'); // 获取目标链接
            // 创建GSAP动画时间轴
            const tl = gsap.timeline();

            // 添加页面切换效果动画
            tl.to('.pagetransition', {
                duration: 0.8,
                scaleX: 1,
                ease: 'power2.inOut',
            });

            // 动画结束后跳转到目标页面
            tl.to(window, { 
                duration: 0.3, 
                delay: 0.8,
                onComplete: function() {
                    window.location.href = targetUrl;
                }
            });
        });
    });


});



//滑動--
// 當前視窗滾動到特定區塊時，對應的 menu 會加上 active 類別
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.main-content section');
    const menuItems = document.querySelectorAll('.overview-menu li');
    
    const observerOptions = {
        root: null, // 監聽視窗
        rootMargin: "0px", // 視窗邊距
        threshold: 0.2 // 觸發條件：區塊顯示 50% 時觸發
    };
  
    // 創建 IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const sectionId = entry.target.id; // 獲取當前區塊的 id
            const menuItem = document.querySelector(`.overview-menu li.${sectionId}`);
            console.log(sectionId, entry.isIntersecting);
            // 當區塊進入視窗範圍時
            if (entry.isIntersecting) {
                // 移除所有 menuItem 的 active 類別
                menuItems.forEach(item => item.classList.remove('active'));
                
                // 為當前區塊對應的 menuItem 添加 active 類別
                if (menuItem) {
                    menuItem.classList.add('active');
                }
            } else {
                // 如果區塊不再顯示在視窗範圍內，移除 active 類別
                if (menuItem) {
                    menuItem.classList.remove('active');
                }
            }
        });
    }, observerOptions);
  
    // 開始監聽每個 section
    sections.forEach(section => {
        observer.observe(section);
    });
  });
  
