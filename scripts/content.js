const body = document.body

const button = document.createElement('div')
button.style = `
  display: none;
  place-content: center;
  width: 50px;
  height: 50px;
  border: 2px solid #0284c7;
  background-color: #cbd5e1;
  border-radius: 50%;
  color: #0284c7;
  font-size: 20px;
  position: fixed;
  margin: auto;
  right: 0px;
  bottom: 10%;
  cursor: pointer;
  z-index: 999;
`
button.innerText = "TOP"
const showButton = debouce(() => {
  button.style.display = 'none'
})

document.addEventListener('wheel', () => {
  button.style.display = 'grid'
  showButton()
})

// bind click event
button.addEventListener('click', () => {
  // This prevents the page from scrolling down to where it was previously.
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  // This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded. This has Cross-browser support.
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
})

body.appendChild(button)

function debouce(fn, duration = 3000) {
  let timerId;
  return function () {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      fn()
    }, duration) 
  }
}