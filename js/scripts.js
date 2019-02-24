$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var hair = $("select#hair").val();
    event.preventDefault();


    if (hair === 'fair' && gender === 'female') {
      $("#result").show()
      $("#celebrity").text("Madonna");
    }
    if (hair === 'brown' && gender === 'female') {
      $("#result").show()
      $("#celebrity").text("Monica Belucci")
    }
    if (hair === 'brown' && gender === 'male') {
      $("#result").show()
      $("#celebrity").text("Bradley Cooper")
    }
    if (hair === 'fair' && gender === 'male') {
      $("#result").show()
      $("#celebrity").text("Brad Pitt")
    }

    $("#result").show()

  });
});
