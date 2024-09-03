document.addEventListener('DOMContentLoaded', function () {
  const checkbox = document.getElementById('agree')
  const ticketLink = document.getElementById('ticket-link')

  checkbox.addEventListener('change', function () {
    if (this.checked) {
      ticketLink.classList.add('enabled')
    } else {
      ticketLink.classList.remove('enabled')
    }
  })
})

function checkConsent () {
  return document.getElementById('agree').checked
}
