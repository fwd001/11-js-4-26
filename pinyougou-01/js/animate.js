function animate(element, target, num) {
  num = num || 20;
  clearInterval(element.timerId);
  element.timerId = setInterval(function () {
    var current = element.offsetLeft;

    var step = target - current > 0 ? num : -num;
    if (Math.abs(target - current) > Math.abs(step)) {
      current += step;
      element.style.left = current + 'px';
    } else {
      clearInterval(element.timerId);
      element.style.left = target + 'px';
    }
  }, 17)
}