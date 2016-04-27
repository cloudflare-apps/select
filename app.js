(function () {
  let options = INSTALL_OPTIONS

  function updateElement() {
    Select.init({
      className: options.theme
    })
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateElement)
  }
  else {
    updateElement()
  }

  INSTALL_SCOPE = {
    setOptions(nextOptions) {
      const elements = Array.prototype.slice.call(document.querySelectorAll("." + options.theme))

      if (!document.documentElement.classList){
      }
      else {
        elements.forEach(element => {
          element.classList.remove(options.theme)
          element.classList.add(nextOptions.theme)
        })
      }

      options = nextOptions
    }
  }
}())
