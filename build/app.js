"use strict";

(function () {
  var options = INSTALL_OPTIONS;

  function updateElement() {
    Select.init({
      className: options.theme
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateElement);
  } else {
    updateElement();
  }

  INSTALL_SCOPE = {
    setOptions: function setOptions(nextOptions) {
      if (!document.body.classList) return;

      var elements = Array.prototype.slice.call(document.querySelectorAll("." + options.theme));

      elements.forEach(function (element) {
        element.classList.remove(options.theme);
        element.classList.add(nextOptions.theme);
      });

      options = nextOptions;
    }
  };
})();