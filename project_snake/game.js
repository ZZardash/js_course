const snake = document.getElementById("snake");
const food = document.getElementById("food");
let snakeSize = 1;

document.addEventListener("keydown", moveSnake);
food.style.top = Math.floor(Math.random() * 490) + "px";
food.style.left = Math.floor(Math.random() * 490) + "px";

function moveSnake(e) {
    switch (e.keyCode) {
        case 38: //up arrow key
        snake.style.top = snake.offsetTop - 10 + "px";
        break;
        case 40: //down arrow key
        snake.style.top = snake.offsetTop + 10 + "px";
        break;
        case 37: //left arrow key
        snake.style.left = snake.offsetLeft - 10 + "px";
        break;
        case 39: //right arrow key
        snake.style.left = snake.offsetLeft + 10 + "px";
        break;
    }
    if (snake.offsetLeft === food.offsetLeft && snake.offsetTop === food.offsetTop) {
        food.style.top = Math.floor(Math.random() * 490) + "px";
        food.style.left = Math.floor(Math.random() * 490) + "px";
        snakeSize++;
        snake.style.width = 10 * snakeSize + "px";
        snake.style.height = 10 * snakeSize + "px";
    }
}