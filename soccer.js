let draggable = document.querySelectorAll('.draggable');

document.body.onmousedown = function (event) {
  let shiftX = event.clientX - document.body.getBoundingClientRect().left;
  let shiftY = event.clientY - document.body.getBoundingClientRect().top;

  for (let drag of draggable) {
    if (event.target.id == drag.id) {
      console.log(drag.id)
      let draggableInside = event.target;
      draggableInside.style.position = 'relative';
      draggableInside.style.zIndex = 1000;

      // moveAt(event.pageX, event.pageY);

      // переносит героя на координаты (pageX, pageY),
      // дополнительно учитывая изначальный сдвиг относительно указателя мыши
      function moveAt(pageX, pageY) {
        console.log(event.target.id)
        event.target.style.left = pageX - shiftX + 'px';
        event.target.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }

      // передвигаем мяч при событии mousemove
      document.addEventListener('mousemove', onMouseMove);

      // отпустить мяч, удалить ненужные обработчики
      draggableInside.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
      };

    }
  }
};

document.body.ondragstart = function () {
  return false;
};
