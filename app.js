(function () {
  let options = INSTALL_OPTIONS

  function updateElement () {
    window.Select.init({
      className: `select-theme-${options.theme}`
    })
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateElement)
  } else {
    updateElement()
  }
}())
