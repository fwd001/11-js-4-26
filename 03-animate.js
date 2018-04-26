function animate(element, target, num) {
  num = num || 20;

  clearInterval(element.timeId)

  element.timeId = setInterval(function () {
    var current = element.offsetLeft;
    var step = current < target ? num : -num;
    if (Math.abs(target - current) > Math.abs(step)) {
      current += step;
      element.style.left = current + 'px';
    } else {
      clearInterval(element.timeId);
      element.style.left = target + 'px';
    }
  }, 17)
}