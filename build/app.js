"use strict";

(function () {
  var options = INSTALL_OPTIONS;

  function updateElement() {
    Select.init({
      className: options.theme });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateElement);
  } else {
    updateElement();
  }

  INSTALL_SCOPE = {
    setOptions: function setOptions(nextOptions) {
      var elements = Array.from(document.querySelectorAll("." + options.theme));

      function changeArrayOptions(element) {
        element.classList.remove(options.theme);
        element.classList.add(nextOptions.theme);
      }

      elements.forEach(changeArrayOptions);

      options = nextOptions;
    }
  };
})();