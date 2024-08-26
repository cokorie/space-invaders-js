const grid = document.querySelector('.grid');

for (let i = 0; i < 225; i++) {
    const square = document.createElement('div');
    grid.appendChild(square);
};

const alienInvaders = [
    0,1,2,3,4,5,6,7,8,9,
];