var ul = document.querySelector('.container .col2 ul')
var pointers = document.querySelectorAll('.container .col2 ol li');
var lis = document.querySelectorAll('.container .col2 ul li')
var box = document.querySelector('.container .col2')
var arr_r = document.querySelector('.container .col2 .arr-r')
var arr_l = document.querySelector('.container .col2 .arr-l')
var imgs = document.querySelectorAll('.container .col2 img')

var oldCount = 0;
var count = 0;
// 注册小圆点
for (var i = 0; i < pointers.length; i++) {
  pointers[i].index = i;
  pointers[i].onclick = function () {
    pointers[oldCount].className = '';
    this.className = 'current';
    oldCount = this.index;
    var target = this.index * box.offsetWidth;
    animate(ul, -target, 40);
    count = this.index;
  }
}
// 注册右箭头
// console.log(imgs.length);

arr_r.onclick = function () {
  if (count == imgs.length) {
    count = 0;    
    ul.style.left = 0;
  }

  count++;     
  if (count < imgs.length) {
    pointers[count].click(); 
  } else {
    animate(ul,-count * box.offsetWidth, 40);
    pointers[oldCount].className = '';
    pointers[0].className = 'current';
    oldCount = 0;   
  }

}
// 注册左箭头
arr_l.onclick = function () {
  if (count == 0) {
    count = imgs.length;    
    ul.style.left = -count * box.offsetWidth + 'px';
  }
  count--;
  pointers[count].click();  
}

var lastli = lis[0].cloneNode(true);
ul.appendChild(lastli);
ul.style.width = ul.childElementCount + '00%';

var timeId = setInterval(function () {
  arr_r.click();
}, 1000)
// 克隆

box.onmouseenter = function () {
  clearInterval(timeId);
}
box.onmouseleave = function () {
  timeId = setInterval(function () {
    arr_r.click();
  }, 1000)
}




