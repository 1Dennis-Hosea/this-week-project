var triangle = function(sideOne, sideTwo, sideThree){

if (isNaN(sideOne) || isNaN(sideTwo) || isNaN(sideThree)){
  alert("all sides must be numerical");
} else if (sideOne >= (sideTwo + sideThree) || sideTwo>= (sideThree + sideOne) || sideThree <= (sideOne + sideTwo)){
  alert("This is not a valid triangle");
} else if (sideOne===sideTwo && sideTwo===sideThree) {
  return "equilateral";
} else if (sideOne===sideTwo) || sideOne===sideThree || sideThree===sideTwo) {
  return "isosceles";
} else if (sideOne!=sideTwo && sideTwo===sideThree) {
  return "scalene";
}
if (sideOne <= (sideTwo + sideThree) && sideTwo <= (sideThree + sideOne) && sideThree <= (sideOne + sideTwo))
if (sideOne===sideTwo && sideTwo===sideThree) {
  return "equilateral";
} else if (sideOne===sideTwo || sideOne===sideThree || sideThree===sideTwo) {
  return "isosceles";
} else {
  return "scalene"
} else {
  return sides;
  return "These sides do not make a triangle.";
}
};

@@ -23,25 +21,12 @@ $(Docoment).ready(function() {
  var sideTwo = parseInt($("input#sideTwo").val());
  var sideThree = parseInt($("input#sideThree").val());
  var result = triangle(sideOne, sideTwo, sideThree);
  var sides = [sideOne, sideTwo, sideThree];

  if (result === "equilateral") {

    $("ul#tri-results-equilateral").append("<li>" + sides + "</li>");
  } else if (result === "isosceles") {
    $("ul#tri-results-isosceles").append("<li>" + sides + "</li>");
  } else if (result === "scalene") {
    $("ul#tri-results-scalene").append("<li>" + sides + "</li>");
  } else {
      alert("Don't be a square. Give me a triangle!")
    }

    sideOne = parseInt($("input#sideOne").val(##));
    sideTwo = parseInt($("input#sideTwo").val(##));
    sideThree = parseInt($("input#slideThree").val(##));

    $("#resu").append(result);
    event.preventDefault();
  });
})
