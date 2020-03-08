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
      input.value = value;
    }
  });
  $("form#enter").submit(function(event) {
    event.preventDefault();
    let date = $("#birthday").val();
    if (date.length === 0) {
      alert("Please select your birthdate");
      return;
    }
    $(".output").show();

    let age = new PersonAge(date);

    $("#ageEarth").text(age.calculateAgeOnEarth());

    $("#ageMercury").text(age.calculateAgeOnMercury());
    $("#ageVenus").text(age.calculateAgeOnVenus());
    $("#ageMars").text(age.calculateAgeOnMars());
    $("#ageJupiter").text(age.calculateAgeOnJupiter());

    $("#statusEarth").text(age.getStatusOnEarth());
    $("#statusMercury").text(age.getStatusOnMercury());
    $("#statusVenus").text(age.getStatusOnVenus());
    $("#statusMars").text(age.getStatusOnMars());
    $("#statusJupiter").text(age.getStatusOnJupiter());
  });
});
