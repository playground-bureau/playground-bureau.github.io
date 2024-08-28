document.addEventListener('DOMContentLoaded', function () {
  // Array of available GIF numbers
  const gifNumbers = Array.from({ length: 15 }, (_, i) => i + 1)

  // Randomly select a GIF number
  const randomNumber = gifNumbers[Math.floor(Math.random() * gifNumbers.length)]

  // Construct the GIF filename
  const gifFilename = `assets/images/logos/logo-gif-${randomNumber}.gif`

  // Select all logo GIF images
  const logoGifs = document.querySelectorAll('.logo-gif')

  // Update the src attribute for all logo GIF images
  logoGifs.forEach(gif => {
    gif.src = gifFilename
  })
})
