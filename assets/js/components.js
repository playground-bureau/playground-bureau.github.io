const components = {
  header: `
    <h1 class="blue">Welcome to <span class="green">the Playground Bureau</span>'s</h1>
    <h1 class="blue">World Wide Webpage!</h1>
    <hr/>
  `,
  footer: `
    <hr/>
    <p class="green"><em>Best viewed in Internet Explorer 2.0 or higher.</em></p>
    <p class="green"><em>Web page created using cutting-edge technology by Playground Bureau, 2024</em></p>
    <br>
  `
}

function renderComponent (elementId, componentName) {
  const element = document.getElementById(elementId)
  if (element && components[componentName]) {
    element.innerHTML = components[componentName]
  }
}

document.addEventListener('DOMContentLoaded', function () {
  renderComponent('header-component', 'header')
  renderComponent('footer-component', 'footer')
})
