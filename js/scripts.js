$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var name=$("input#name");
    var age = parseInt($("input#age").val());
    var attractions =$("select#attractions").val();
    var activeStay = $("select#activeStay").val();
    var geography = $("#select#geography").val();
    event.preventDefault();



    if (geography === 'americas' || geography === 'europe' || geography === 'asia' && attractions === 'mountain' && activeStay === 'yes') {
      $("#result").show()
      $("#gateaway").text("skiing or hiking in the mountains. You could choose countries such as Japan, South Korea, Peru, Swtitzerlad, Armenia");
    }
    else if (age >= 60 && attractions === 'beach' || activeStay === 'no') {
      $("#result").show()
      $("#gateaway").text("enjoying sunshine on white sandy beaches. Some of our suggestions are Hawaii, Mexico, Bahamas or Greece.");
    }
    else if (age <= 60 && attractions === 'organized' && activeStay === 'yes') {
      $("#result").show()
      $("#gateaway").text("going abroad and disvovering new countries and new cultures. Discover China, Thailand or Japan for ancient easter cultures. Try France, Italy or Spain for medieval western cultures." );
    }
    else if (attractions === 'beach' && activeStay === 'yes') {
      $("#result").show()
      $("#gateaway").text("surfing in Australia, snorkeling in Egypt or diving in Alaska." );
    }
    else if (attractions === 'beach' && activeStay === 'yes') {
      $("#result").show()
      $("#gateaway").text("surfing in Australia, snorkeling in Egypt or diving in Alaska." );
    }

    else {
      $("#result").text("Please call 555-55-55 for further inquiries.");
    }


    $("#result").fadeIn();
    $("#quiz").fadeOut();


  });
});
