var position = {
  x: 0,
  y: 0
};

var $car = document.querySelector('img');

document.addEventListener('keydown', rotateCar);

function rotateCar(e) {
  if (event.key === 'ArrowUp'){
  $car.className = 'north';
  } else if (event.key === 'ArrowRight') {
    $car.className = 'east';
  } else if (event.key === 'ArrowDown') {
    $car.className = 'south';
  } else if (event.key === 'ArrowLeft') {
    $car.className = 'west';
  }
}

document.addEventListener('keydown', function (e) {
  if (event.key === ' ') {
    var carGo = setInterval(startCar, .0016);
  }
});

function startCar() {
    position.x++
    $car.style.left = position.x + 'px';
}
