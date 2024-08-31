document.addEventListener('DOMContentLoaded', function () {
  const ticketLinks = document.querySelectorAll('.ticket-link a')
  const colors = ['#0016BE', '#FF00AC', '#52CCFF', '#FFA1E3', '#00A448']

  ticketLinks.forEach(ticketLink => {
    let colorIndex = 0
    let isAnimating = false

    function nextColor () {
      colorIndex = (colorIndex + 1) % colors.length
      return colors[colorIndex]
    }

    function animateColors () {
      if (!isAnimating) return

      ticketLink.style.color = nextColor()

      setTimeout(animateColors, 1000)
    }

    ticketLink.addEventListener('mouseenter', function () {
      isAnimating = true
      animateColors()
      ticketLink.style.transform = 'scale(1.05)'
    })

    ticketLink.addEventListener('mouseleave', function () {
      isAnimating = false
      ticketLink.style.color = ''
      ticketLink.style.transform = 'scale(1)'
    })
  })
})
