// 给按钮加点击事件
const btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    // 弹出提示框
    alert('恭喜！你的第一个交互功能生效了 🎊');
    // 改变按钮文字
    btn.textContent = '我被点击啦！';
    // 改变hero区背景色
    const hero = document.querySelector('.hero');
    hero.style.backgroundColor = '#9b59b6';
});

// 导航栏链接点击：平滑滚动
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // 阻止默认跳转
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        // 平滑滚动到对应区域
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});