 /* document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.collapsible');
      
  });

  // Or with jQuery

  $(document).ready(function () {
      $('.collapsible').collapsible();

  });

  function test() {
      var text = document.getElementById("expand").textContent;
      var text2 = document.getElementById("expand").textContent;
      var text3 = document.getElementById("expand3").textContent;
      var text4 = document.getElementById("expand4").textContent;
      var text5 = document.getElementById("expand5").textContent;
      var text6 = document.getElementById("expand6").textContent;
      var text7 = document.getElementById("expand7").textContent;

      if (text == more || text2 == more || text3 == more || text4 == more || text5 == more || text6 == more || text7 == more) {

      }
  }

  function changeicon1() {
      var text = document.getElementById("expand").textContent;
      var less = "expand_less";
      var more = "expand_more";
      if (text == more) {
          $("#expand").text("expand_less");
          $("#expand2").text("expand_more");
          $("#expand3").text("expand_more");
          $("#expand4").text("expand_more");
          $("#expand5").text("expand_more");
          $("#expand6").text("expand_more");
          $("#expand7").text("expand_more");
          console.log("tex == more");
      } else if (text == less) {
          $("#expand").text("expand_more");
        /*$("#expand2").text("expand_less");
          $("#expand3").text("expand_less");
          $("#expand4").text("expand_less");
          $("#expand5").text("expand_less");
          $("#expand6").text("expand_less");
          $("#expand7").text("expand_less");
      }
  };

  function changeicon2() {
      var text2 = document.getElementById("expand2").textContent;
      var less = "expand_less";
      var more = "expand_more";
      if (text2 == more) {
          $("#expand2").text("expand_less");
         $("#expand").text("expand_more");
          $("#expand3").text("expand_more");
          $("#expand4").text("expand_more");
          $("#expand5").text("expand_more");
          $("#expand6").text("expand_more");
          $("#expand7").text("expand_more");
      } else if (text2 == less) {
        $("#expand2").text("expand_more");
        /*$("#expand").text("expand_less");
        $("#expand3").text("expand_less");
        $("#expand4").text("expand_less");
        $("#expand5").text("expand_less");
        $("#expand6").text("expand_less");
        $("#expand7").text("expand_less");
      }
  };

  function changeicon3() {
      var text3 = document.getElementById("expand3").textContent;
      var less = "expand_less";
      var more = "expand_more";
      if (text3 == more) {
          $("#expand3").text("expand_less");
      } else if (text3 == less) {
          $("#expand3").text("expand_more");
      }
  };

  function changeicon4() {
      var text4 = document.getElementById("expand4").textContent;
      var less = "expand_less";
      var more = "expand_more";
      if (text4 == more) {
          $("#expand4").text("expand_less");
      } else if (text4 == less) {
          $("#expand4").text("expand_more");
      }
  };

  function changeicon5() {
      var text5 = document.getElementById("expand5").textContent;
      var less = "expand_less";
      var more = "expand_more";
      if (text5 == more) {
          $("#expand5").text("expand_less");
      } else if (text5 == less) {
          $("#expand5").text("expand_more");
      }
  };

  function changeicon6() {
      var text6 = document.getElementById("expand6").textContent;
      var less = "expand_less";
      var more = "expand_more";
      if (text6 == more) {
          $("#expand6").text("expand_less");
      } else if (text6 == less) {
          $("#expand6").text("expand_more");
      }
  };

  function changeicon7() {
      var text7 = document.getElementById("expand7").textContent;
      var less = "expand_less";
      var more = "expand_more";
      if (text7 == more) {
          $("#expand7").text("expand_less");
      } else if (text7 == less) {
          $("#expand7").text("expand_more");
      }
  };
*/
          
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
