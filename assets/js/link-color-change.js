document.addEventListener('DOMContentLoaded', function () {
  const ticketLinks = document.querySelectorAll('.ticket-link')
  const colors = [
    '--color-1',
    '--color-2',
    '--color-3',
    '--color-4',
    '--color-5',
    '--color-6'
  ]

  ticketLinks.forEach(ticketLink => {
    let colorIndex = 0
    let intervalId

    function changeColor () {
      colorIndex = (colorIndex + 1) % colors.length
      ticketLink.style.color = `var(${colors[colorIndex]})`
    }

    ticketLink.addEventListener('mouseenter', function () {
      intervalId = setInterval(changeColor, 500) // Change color every 500ms (half second)
    })

    ticketLink.addEventListener('mouseleave', function () {
      clearInterval(intervalId)
      ticketLink.style.color = '' // Reset to initial color
    })
  })
})
