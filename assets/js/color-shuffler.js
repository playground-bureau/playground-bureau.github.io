// const colors = [
//   '#FFBC00',
//   '#FFA1E3',
//   '#FF00AC',
//   '#52CCFF',
//   '#00A448',
//   '#0016BE'
// ]

// // Function to shuffle an array
// function shuffleArray (array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1))
//     ;[array[i], array[j]] = [array[j], array[i]]
//   }
//   return array
// }

// // Function to update CSS variables with shuffled colors
// function updateColors () {
//   const shuffledColors = shuffleArray([...colors])

//   for (let i = 0; i < colors.length; i++) {
//     document.documentElement.style.setProperty(
//       `--color-${i + 1}`,
//       shuffledColors[i]
//     )
//   }
// }

// // Run the color update when the DOM is fully loaded
// document.addEventListener('DOMContentLoaded', updateColors)
