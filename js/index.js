// script.js
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".title");
    const originalText = textElement.textContent.trim(); // 获取文本内容并去除首尾空白

    // 清空原始内容
    textElement.textContent = "";

    // 按空白字符（包括多个空格）分割文本
    const words = originalText.split(/\s+/);

    words.forEach((word, wordIndex) => {
        const wordSpan = document.createElement("span");
        wordSpan.className = "word";

        for (let i = 0; i < word.length; i++) {
            const span = document.createElement("span");
            span.textContent = word[i];
            span.className = "letter";
            wordSpan.appendChild(span);
        }

        textElement.appendChild(wordSpan);

        if (wordIndex < words.length - 1) {
            const space = document.createElement("span");
            space.textContent = ' '; // 使用纯文本空格而非 &nbsp;
            textElement.appendChild(space);
        }
    });

    // 显示整个标题（需要这行来显示 .title 本身）
    textElement.style.opacity = 1;

    // 添加动画效果
    const letters = document.querySelectorAll(".letter");
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.opacity = 1;
        }, index * 100); // 调整时间间隔以
    });
});






//Cando區塊
document.addEventListener("DOMContentLoaded", function() {
    const fadeTextContainer = document.querySelector('.fade-text');
    const bgSections = document.querySelectorAll('.bg-section');
    const texts = document.querySelectorAll('.text');
    let hasScrolledToBackground = false;

    window.addEventListener('scroll', function() {
        const containerTop = document.querySelector('.container').offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition > containerTop && !hasScrolledToBackground) {
            hasScrolledToBackground = true;

            // 淡入黑色滤镜和文本
            bgSections.forEach(section => {
                section.querySelector('.overlay').style.opacity = 1;
            });

            fadeTextContainer.style.opacity = 1;

            // 两秒后淡出 "What do I do"
            setTimeout(() => {
                fadeTextContainer.style.opacity = 0;
            }, 3000);

            // 两秒后淡入三个水平区块的文本
            setTimeout(() => {
                texts.forEach(text => {
                    text.style.opacity = 1;
                });
            }, 4000); // 两秒后执行淡入三个水平区块的文本
        }
    });
});




document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 1;
    const totalSlides = 4;
    let autoPlayTimeout; // 用于存储自动播放的 setTimeout

    function startAutoPlay(fromSlide) {
        slideIndex = fromSlide; // 设置从指定幻灯片开始播放
        autoPlayTimeout = setTimeout(function() {
            changeSlide(slideIndex);
            slideIndex++;
            if (slideIndex > totalSlides) {
                slideIndex = 1;
            }
            startAutoPlay(slideIndex); // 递归调用自动播放函数，从下一个幻灯片开始
        }, 6000); // 自动播放间隔时间，单位为毫秒（这里设置为6秒）
    }

    function stopAutoPlay() {
        clearTimeout(autoPlayTimeout); // 清除自动播放的 setTimeout
    }

    // 初始化自动播放从第一个幻灯片开始
    startAutoPlay(1);

    // 初始加载时播放第一个slide
    changeSlide(1);

    // 点击缩略图时切换slide
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(function(thumbnail, index) {
        thumbnail.addEventListener('click', function() {
            stopAutoPlay(); // 停止当前的自动播放

            // 更新 slideIndex，并调用 changeSlide 切换到对应的幻灯片
            slideIndex = index + 1;
            changeSlide(slideIndex);

            // 继续自动播放从点击后的下一个幻灯片开始
            slideIndex++;
            if (slideIndex > totalSlides) {
                slideIndex = 1;
            }
            startAutoPlay(slideIndex);
        });
    });
});

function changeSlide(slideIndex) {
    const leftPanel = document.querySelector('.left-panel');
    const rightPanel = document.querySelector('.right-panel');
    const leftBoxImg = leftPanel.querySelector('.left-boximg');
    const rightBoxImg = rightPanel.querySelector('.right-boximg');

    // 移除动画类，确保能够重新触发动画
    leftPanel.classList.remove('animate-bg');
    rightPanel.classList.remove('animate-bg');
    rightPanel.classList.remove('animate-text'); // 移除右侧面板的文本动画类
    void leftPanel.offsetWidth; // 强制重绘，以便重新触发动画

    // 添加动画类
    leftPanel.classList.add('animate-bg');
    rightPanel.classList.add('animate-bg');

    // Function to handle button click with page transition effect
    function handleButtonClick(event) {
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
    }

    switch (slideIndex) {
        case 1:
            leftBoxImg.innerHTML = ''; // Clear previous content
            rightBoxImg.innerHTML = ''; // Clear previous content
            leftPanel.style.backgroundImage = 'url("./media/Zenzzz_view.png")';

            
            // Adjust slider-content and right-boximg to align left
            const sliderContent1 = rightPanel.querySelector('.slider-content');
            // Remove existing button if it exists
            const existingButton1 = sliderContent1.querySelector('.learn-more-button');
            if (existingButton1) {
                existingButton1.remove();
            }
            sliderContent1.style.textAlign = 'left';
            rightBoxImg.style.textAlign = 'left';
            rightPanel.classList.add('animate-text'); // Add text animation class to the right panel
            rightPanel.querySelector('h5').innerText = 'FEATURED PROJECT';
            rightPanel.querySelector('h2').innerText = 'ZenZzz';
            rightPanel.querySelector('p').innerText = 'ZenZzz is a mobile app focused on improving sleep health for university students. It tracks, analyzes, and provides personalized feedback to promote healthy sleep habits, supporting students in balancing academic and social commitments for better well-being.';

            // Create a new button element
            const button1 = document.createElement('button');
            button1.setAttribute('href', 'projects/ZenZzz.html');
            button1.innerText = 'Learn More';
            button1.classList.add('learn-more-button', 'page-link'); // Add a class for further styling if needed
            button1.addEventListener('click', handleButtonClick);
            
            
            
            
            // Insert the button into the slider-content
            sliderContent1.appendChild(button1);

            break;

  
        case 2:
            leftBoxImg.innerHTML = ''; // Clear previous content
            rightBoxImg.innerHTML = ''; // Clear previous content
            leftBoxImg.innerHTML = ''; // Clear previous content
            rightBoxImg.innerHTML = ''; // Clear previous content
            leftPanel.style.backgroundImage = 'url("./media/Blisslife_view.png")';

            // 2. 調整 slider-content 和 right-boximg 靠左對齊
            
            const sliderContent2 = rightPanel.querySelector('.slider-content');
            const existingButton2 = sliderContent2.querySelector('.learn-more-button');
            if (existingButton2) {
                existingButton2.remove();
            }
            sliderContent2.style.textAlign = 'left';
            rightBoxImg.style.textAlign = 'left';
            rightPanel.classList.add('animate-text');
            rightPanel.querySelector('h5').innerText = 'FEATURED PROJECT';
            rightPanel.querySelector('h2').innerText = 'BlissLife';
            rightPanel.querySelector('p').innerText = 'BlissLife is a holistic wellness website designed to improve your physical and mental health. It offers free resources meet community support for your well-being journey.';

            const button2 = document.createElement('button');
            button2.setAttribute('href', 'projects/BlissLife.html');
            button2.innerText = 'Learn More';
            button2.classList.add('learn-more-button', 'page-link');
            button2.addEventListener('click', handleButtonClick);
            // Add event listener to the button
            // button2.addEventListener('click', function() {
            //     window.location.href = '../projects/Blisslife.html'
            //     // // Redirect to the desired URL
            //     // window.location.href = 'https://www.figma.com/design/pkatY8rqE45bQ5It5Glp1Z/Portfolio?node-id=156-542&t=LDaMsyLtx3aqkpqO-0'; // Replace with your desired URL
            // });
            
            sliderContent2.appendChild(button2);
            break;
            
        case 3:
            leftBoxImg.innerHTML = ''; // Clear previous content
            rightBoxImg.innerHTML = ''; // Clear previous content
            leftPanel.style.backgroundImage = 'url("./media/creditcard-projectview.png")';
            rightPanel.style.backgroundImage = 'url("image3.jpg")';

            const sliderContent3 = rightPanel.querySelector('.slider-content');
            const existingButton3 = sliderContent3.querySelector('.learn-more-button');
            if (existingButton3) {
                existingButton3.remove();
            }
            sliderContent3.style.textAlign = 'left';
            rightBoxImg.style.textAlign = 'left';
            rightPanel.classList.add('animate-text');
            rightPanel.querySelector('h5').innerText = 'FEATURED PROJECT';
            rightPanel.querySelector('h2').innerText = 'Banking - Credit Card';
            rightPanel.querySelector('p').innerText = 'As a product manager of credit card platform, my team redesigned the user experience of applying for credit cards.';

            const button3 = document.createElement('button');
            button3.setAttribute('href', 'projects/CreditCard.html');
            button3.innerText = 'Learn More';
            button3.classList.add('learn-more-button','page-link');
            button3.addEventListener('click', handleButtonClick);
            
            
            sliderContent3.appendChild(button3);
            break;

            
          
        case 4:
            leftBoxImg.innerHTML = ''; // Clear previous content
            rightBoxImg.innerHTML = ''; // Clear previous content
            leftPanel.style.backgroundImage = 'url("./media/googleslide.png")';
            

            const sliderContent4 = rightPanel.querySelector('.slider-content');
            const existingButton4 = sliderContent4.querySelector('.learn-more-button');
            if (existingButton4) {
                existingButton4.remove();
            }
            sliderContent4.style.textAlign = 'left';
            rightBoxImg.style.textAlign = 'left';
            rightPanel.classList.add('animate-text');
            rightPanel.querySelector('h5').innerText = 'FEATURED PROJECT';
            rightPanel.querySelector('h2').innerText = 'Interface Research of Google Slides';
            rightPanel.querySelector('p').innerText = 'This project aimed to comprehensively evaluate a user interface for setting slide transitions, using usability testing and theory to improve the design.';

            const button4 = document.createElement('button');
            button4.setAttribute('href', 'projects/Googleslides.html');
            button4.innerText = 'Learn More';
            button4.classList.add('learn-more-button', 'page-link');
            button4.addEventListener('click', handleButtonClick);
            
            
            sliderContent4.appendChild(button4);
            break;

        default:
            leftBoxImg.innerHTML = ''; // Clear previous content
            rightBoxImg.innerHTML = ''; // Clear previous content
            leftPanel.style.backgroundImage = 'none';
            rightPanel.style.backgroundImage = 'none';
            leftPanel.querySelector('h2').innerText = 'Left Panel';
            leftPanel.querySelector('p').innerText = 'This is the content of the left panel.';
            break;
    }

    setTimeout(() => {
        leftPanel.classList.add('animate-bg');
    }, 6000); // 延迟一点时间后再添加类，以确保动画效果能够触发
}





document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.brief, .container, .featuredproject, .otherprojects, .slogan, footer');
    let currentIndex = 0;
    let isScrolling = false;

    function handleScroll(event) {
      if (isScrolling || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;

      if (event.deltaY > 0) {
        // 向下滾動
        currentIndex = Math.min(currentIndex + 1, sections.length - 1);
      } else {
        // 向上滾動
        currentIndex = Math.max(currentIndex - 1, 0);
      }

      isScrolling = true;
      window.scrollTo({
        top: sections[currentIndex].offsetTop,
        behavior: 'smooth'
      });

      setTimeout(() => {
        isScrolling = false;
      }, 1000); // 延遲以確保滾動動畫完成
    }

    window.addEventListener('wheel', handleScroll);

});

//卡片
function clickLeft() {
    let container = document.querySelector('#cards-container');
    container.scrollTo({
        left:container.scrollLeft - 200,
        top: 0,
        behavior: "smooth"
    });
}

function clickRight() {
    let container = document.querySelector('#cards-container');
    container.scrollTo({
        left:container.scrollLeft + 200,
        top: 0,
        behavior: "smooth"
    });
}


