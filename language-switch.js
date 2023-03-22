document.addEventListener('DOMContentLoaded', function () {
  var languageSwitch = document.querySelector('.language-switch');
  if (languageSwitch) {
    languageSwitch.addEventListener('click', function () {
      var currentLanguage = languageSwitch.textContent;
      if (currentLanguage === 'English') {
        window.location.href = 'index.html';
      } else {
        window.location.href = 'index_de.html';
      }
    });
  }
});
