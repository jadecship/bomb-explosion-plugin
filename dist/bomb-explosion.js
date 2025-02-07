function createExplosion() {
 const container = document.createElement('div');
 container.classList.add('bomb-explosion-container');

 const bomb = document.createElement('div');
 bomb.classList.add('bomb');
 bomb.style.display = 'block';

 container.appendChild(bomb);
 document.body.appendChild(container);

 bomb.addEventListener('animationend', () => {
     document.body.removeChild(container);
 });
}

// 暴露函数供外部调用
window.createExplosion = createExplosion;