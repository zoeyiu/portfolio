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

//Title Typing Animation
document.addEventListener("DOMContentLoaded", function() {
    const titleElement = document.getElementById("videoTitle");
    const titleText = titleElement.textContent;
    titleElement.textContent = ""; // 清空文本，准备逐字显示

    let index = 0;

    function typeWriter() {
        if (index < titleText.length) {
            titleElement.textContent += titleText.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // 控制打字速度
        } else {
            setTimeout(() => {
                titleElement.textContent = ""; // 清空文本
                index = 0;
                setTimeout(typeWriter, 500); // 等待一段时间后重新开始
            }, 1500); // 完成后等待的时间，可以调整以控制循环间隔
        }
    }

    typeWriter(); // 开始打字效果
});
