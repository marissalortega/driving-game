var $car = document.querySelector('img');

document.addEventListener('keydown', rotateCar);

function rotateCar(e) {
  console.log(event.key);

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
