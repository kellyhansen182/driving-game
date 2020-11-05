var data = {
  direction: 'east',
  location: {
    x: 0,
    y: 0
  },
  moving: false
};

var $car = document.querySelector('img');

function changeDirection(e) {
  if (e.code === 'ArrowUp') {
    data.direction = 'north';
  } else if (e.code === 'ArrowRight') {
    data.direction = 'east';
  } else if (e.code === 'ArrowDown') {
    data.direction = 'south';
  } else if (e.code === 'ArrowLeft') {
    data.direction = 'west';
  }
  $car.className = data.direction;
}

function carMovement() {
  data.location.x = data.location.x + 8;
  $car.setAttribute('style', 'left:' + (data.location.x) + 'px;');
}

var carMovingInterval;

function startStopCar() {
  clearInterval(carMovingInterval);
  if (!data.moving) {
    carMovingInterval = setInterval(carMovement, 16);
    data.moving = true;
  } else {
    data.moving = false;
  }
}

document.addEventListener('keydown', function (e) {
  if (e.code === 'Space') {
    startStopCar();
  } else {
    changeDirection(e);
  }
});
