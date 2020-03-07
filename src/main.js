import $ from "jquery";
import datepicker from "js-datepicker";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "js-datepicker/dist/datepicker.min.css";
import "./styles.css";
import mars from "../imgs/mars.jpg";
import venus from "../imgs/venus.jpg";
import earth from "../imgs/earth.jpg";
import mercury from "../imgs/mercury.jpg";
import jupiter from "../imgs/jupiter.jpg";
import { PersonAge } from "./age";

$(document).ready(function() {
  $("#mars").attr("src", mars);
  $("#venus").attr("src", venus);
  $("#earth").attr("src", earth);
  $("#mercury").attr("src", mercury);
  $("#jupiter").attr("src", jupiter);
  datepicker("#birthday", {
    formatter: (input, date) => {
      const value = date.toISOString().split("T")[0];
      input.value = value; // => 2000-12-31
    }
  });
  $("form#enter").submit(function(event) {
    event.preventDefault();

    var date = $("#birthday").val();
    console.log(date);

    let age = new PersonAge(date);

    $("#ageEarth").text(age.calculateAge());

    $("#ageMercury").text(age.calculateAgeMercury().toFixed(1));
    $("#ageVenus").text(age.calculateAgeVenus().toFixed(1));
    $("#ageMars").text(age.calculateAgeMars().toFixed(1));
    $("#ageJupiter").text(age.calculateAgeJupiter().toFixed(1));

    $("#leftEarth").text(age.leftAgeOnEarth().toFixed(1));
    $("#leftMercury").text(age.leftAgeOnMercury().toFixed(1));
    $("#leftVenus").text(age.leftAgeOnVenus().toFixed(1));
    $("#leftMars").text(age.leftAgeOnMars().toFixed(1));
    $("#leftJupiter").text(age.leftAgeOnJupiter().toFixed(1));

    $("#surpassEarth").text(age.surpassedAgeOnEarth().toFixed(1));
    $("#surpassMercury").text(age.surpassedAgeOnMercury().toFixed(1));
    $("#surpassVenus").text(age.surpassedAgeOnVenus().toFixed(1));
    $("#surpassMars").text(age.surpassedAgeOnMars().toFixed(1));
    $("#surpassJupiter").text(age.surpassedAgeOnJupiter().toFixed(1));
debugger
    if (age < 79) {
      $(".output")
        .addClass("not-passed-expetency")
        .removeClass("passed-expetency");
    } else {
      $(".output")
        .removeClass("not-passed-expetency")
        .addClass("passed-expetency");
    }

  });
});
