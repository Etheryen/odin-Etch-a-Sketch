let clear = document.getElementById('clear')

let screen = document.getElementById('screen')

let grid = document.createElement('div')
grid.id = 'grid'

let square = document.createElement('div')
square.className = 'square'

let x = 16

randomRGB = () => {
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  return [r, g, b]
}

render = (x) => {
  let newGrid = grid.cloneNode(true)
  screen.appendChild(newGrid)
  for(let i = 0; i < x*x; i++) {
    newGrid.appendChild(square.cloneNode(true))
  }
  
  let squares = document.querySelectorAll('.square')
  
  squares.forEach(s => {
    s.addEventListener('mouseover', () => {
      s.classList.add('hovered')
      s.style.backgroundColor = `rgb(${randomRGB()})`
    })
    s.style.width = `${800/x}px`
    s.style.height = `${800/x}px`
  })
}

clear.onclick = () => {
  let x = prompt('Enter grid size(default 16): ')
  if(x == null) return
  if(x === '') x = '16'
  x = parseInt(x)
  if(x > 100) {x = 100}
  
  document.getElementById('grid').remove()

  let squares = document.querySelectorAll('.square')

  squares.forEach(s => {
    s.addEventListener('mouseover', () => {
      s.remove()
    })
  })
  render(x)
}

render(x)