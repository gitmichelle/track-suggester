$(document).ready(function() {
  $("form#tracksuggester").submit(function(event) {
    var question1 = parseInt($("input:radio[name=question1]:checked").val());
    var question2 = parseInt($("input:radio[name=question2]:checked").val());
    var question3 = parseInt($("input:radio[name=question3]:checked").val());
    var question4 = parseInt($("input:radio[name=question4]:checked").val());
    var question5 = parseInt($("input:radio[name=question5]:checked").val());
    var question6 = parseInt($("input:radio[name=question6]:checked").val());
    var total = (question1 + question2 + question3 + question4 + question5 + question6);

    if (total <= 9){
      var total
    }
    event.preventDefault();
  });
});
