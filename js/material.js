let first_Year = document.querySelector(".First");
let second_Year = document.querySelector(".Second");
let third_Year = document.querySelector(".Third");
let fourth_Year = document.querySelector(".Fourth");

var firstYear_first = document.querySelector(".ff-semiseter");
var firstYear_second = document.querySelector(".fs-semiseter");
var secondYear_first = document.querySelector(".sf-semiseter");
var secondYear_second = document.querySelector(".ss-semiseter");
var thirdYear_first = document.querySelector(".tf-semiseter");
var thirdYear_second = document.querySelector(".ts-semiseter");
var fourthYear_first = document.querySelector(".fof-semiseter");
var fourthYear_second = document.querySelector(".fos-semiseter");

var SfirstYear_first = document.querySelectorAll(".ff-subject");
var SfirstYear_second = document.querySelectorAll(".fs-subject");
var SsecondYear_first = document.querySelectorAll(".sf-subject");
var SsecondYear_second = document.querySelectorAll(".ss-subject");
var SthirdYear_first = document.querySelectorAll(".tf-subject");
var SthirdYear_second = document.querySelectorAll(".ts-subject");
var SfourthYear_first = document.querySelectorAll(".fof-subject");
var SfourthYear_second = document.querySelectorAll(".fos-subject");

// var subjectDiv = document.querySelectorAll(".subject");
first_Year.onclick = () => {
  if (firstYear_first.style.display === "none") {
    firstYear_first.style.display = "block";
    firstYear_second.style.display = "block";
  } else {
    firstYear_first.style.display = "none";
    firstYear_second.style.display = "none";
  }
  //   subjectDiv.forEach((e) => {
  //     if (e.style.display === "none") e.style.display = "block";
  //     else e.style.display = "none";
  //   });
};
