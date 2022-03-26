let clear = document.getElementById('clear');

let screen = document.getElementById('screen');

let grid = document.createElement('div');
grid.id = 'grid';

let square = document.createElement('div');
square.className = 'square';

let x = 16;

render = (x) => {
  let newGrid = grid.cloneNode(true)
  screen.appendChild(newGrid);
  for(let i = 0; i < 256; i++) {
    newGrid.appendChild(square.cloneNode(true));
  }
  
  let squares = document.querySelectorAll('.square');
  
  squares.forEach(s => {
    s.addEventListener('mouseover', e => {
      s.classList.add('hovered');
    })
  });
}

clear.onclick = e = () => {
  let x = prompt('Enter grid size(default 16): ');
  if(x != null) {
  if(x === '') {x = '16'};
  x = parseInt(x)
  }

  document.getElementById('grid').remove();

  let squares = document.getElementsByClassName('square');

  Array.from(squares).forEach(s => {
    s.addEventListener('mouseover', e => {
      s.remove();
    })
  });
  render(x);
};

render(x);