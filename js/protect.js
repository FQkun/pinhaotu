// 禁止文本选择
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

// 禁止鼠标右键菜单
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// 禁止拖动
document.addEventListener('dragstart', function(e) {
    e.preventDefault();
});