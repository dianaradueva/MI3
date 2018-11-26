  document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.collapsible');
  });

  // Or with jQuery

  $(document).ready(function () {
      $('.collapsible').collapsible();

  });

  function changeicon() {
      var text = document.getElementById("expand").textContent;
      var text2 = document.getElementById("expand2").textContent;
      var text3 = document.getElementById("expand3").textContent;
      var text4 = document.getElementById("expand4").textContent;
      var text5 = document.getElementById("expand5").textContent;
      var text6 = document.getElementById("expand6").textContent;
      var text7 = document.getElementById("expand7").textContent;
      var less = "expand_less";
      var more = "expand_more";
      if (text == more) {
          $("#expand").text("expand_less");
      } else if (text == less) {
          $("#expand").text("expand_more");
      }
  };
