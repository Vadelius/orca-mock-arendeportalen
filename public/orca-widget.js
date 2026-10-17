// Loads Orca's report widget (MOCK setup). Orca runs locally, so this works only on the local http copy of the
// site: an https page (GitHub Pages) can't load an http script (mixed content), and that is expected.
(function () {
  var orca = "http://127.0.0.1:5420";
  var key = "orca_ik_J7yDPENL632iCTueGtKIUJs1p1jsnutdjUcm53zMI4A";
  var s = document.createElement("script");
  s.src = orca + "/widget.js";
  s.async = true;
  s.setAttribute("data-orca-key", key);
  s.setAttribute("data-orca-build", "mock-0.1.0");
  document.head.appendChild(s);
})();
