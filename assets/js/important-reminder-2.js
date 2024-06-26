document.getElementById('ticketLink').style.pointerEvents = 'none' // Disable link by default
document.getElementById('ticketLink').style.opacity = '0.5' // Make the link look disabled

document.getElementById('agree').addEventListener('change', function () {
  const link = document.getElementById('ticketLink')
  if (this.checked) {
    link.style.pointerEvents = 'auto' // Enable the link
    link.style.opacity = '1' // Make the link fully visible
  } else {
    link.style.pointerEvents = 'none' // Disable the link
    link.style.opacity = '0.5' // Make the link look disabled
  }
})

function checkConsent () {
  const checkbox = document.getElementById('agree')
  if (!checkbox.checked) {
    alert('Please agree to the festival guidelines to proceed.')
    return false
  }
  return true
}
