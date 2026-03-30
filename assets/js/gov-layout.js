document.addEventListener('DOMContentLoaded', function () {
  var header = document.getElementById('gov-header')
  if (!header) return

  var lang = header.dataset.lang || 'en'
  var langUrl = header.dataset.langUrl
  var langUrlEs = header.dataset.langUrlEs
  var isCA = lang === 'ca'
  var isES = lang === 'es'

  var homeUrl = isCA ? 'index-ca.html' : isES ? 'index-es.html' : 'index.html'
  var sealAlt = isCA ? 'Segell Oficial del Bureau' : isES ? 'Sello Oficial del Bureau' : 'Official Bureau Seal'
  var subtitle = isCA
    ? 'Govern Central \u00b7 Ministeri de la Felicitat'
    : isES
    ? 'Gobierno Central \u00b7 Ministerio de la Felicidad'
    : 'Central Government \u00b7 Ministry of Happiness'
  var subheaderText = isCA
    ? 'Un Lloc Web Oficial del Playground Bureau'
    : isES
    ? 'Un Sitio Web Oficial del Playground Bureau'
    : 'An Official Website of the Playground Bureau'

  var langToggle = ''
  if (langUrl) {
    if (isCA) {
      langToggle =
        '<div class="gov-header-lang">' +
          '<a href="' + langUrl + '">English</a> | ' +
          '<span class="current-lang">Catal\u00e0</span>' +
          (langUrlEs ? ' | <a href="' + langUrlEs + '">Espa\u00f1ol</a>' : '') +
        '</div>'
    } else if (isES) {
      langToggle =
        '<div class="gov-header-lang">' +
          '<a href="' + langUrl + '">English</a> | ' +
          (langUrlEs ? '<a href="' + langUrlEs + '">Catal\u00e0</a> | ' : '') +
          '<span class="current-lang">Espa\u00f1ol</span>' +
        '</div>'
    } else {
      langToggle =
        '<div class="gov-header-lang">' +
          '<span class="current-lang">English</span> | ' +
          '<a href="' + langUrl + '">Catal\u00e0</a>' +
          (langUrlEs ? ' | <a href="' + langUrlEs + '">Espa\u00f1ol</a>' : '') +
        '</div>'
    }
  }

  header.outerHTML =
    '<div class="gov-header">' +
      '<a href="' + homeUrl + '" class="gov-header-left">' +
        '<img src="assets/images/logos/PGB_logo_26_white.png" alt="' + sealAlt + '" class="gov-header-seal" />' +
        '<div class="gov-header-text">' +
          '<div class="gov-header-title">PLAYGROUND BUREAU</div>' +
          '<div class="gov-header-subtitle">' + subtitle + '</div>' +
        '</div>' +
      '</a>' +
      langToggle +
    '</div>' +
    '<hr/>' +
    '<div class="gov-subheader">' + subheaderText + '</div>'
})
