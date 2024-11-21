/* 
Student Name: Reuel Christian Sundiam
Section: WD-202
*/

//Global variables

var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");

// Hamburger Menu Function

function hamburger() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}

// Quiz Section (HTML)

//Function to display the first answer
function htmlans1() {
    heading.style.display = "block";
    answer.textContent = "HyperText Markup Language";
}

//Function to display the second answer
function htmlans2() {
    heading.style.display = "block";
    answer.textContent = "Tim Berners Lee";
}

//Function to display the third answer
function htmlans3() {
    heading.style.display = "block";
    answer.textContent = "Standard Generalized Markup Language";
}

//Function to display the fourth answer
    function htmlans4() {
    heading.style.display = "block";
    answer.textContent = "HTML5";
}

//Function to display the fifth answer
function htmlans5() {
    heading.style.display = "block";
    answer.textContent = "That the current document is written in HTML5.";
}

// Quiz Section (CSS)

//Function to display the first answer
function cssans1() {
    heading.style.display = "block";
    answer.textContent = "Cascading Style Sheets";
}

//Function to display the second answer
function cssans2() {
    heading.style.display = "block";
    answer.textContent = "CSS3";
}

//Function to display the third answer
function cssans3() {
    heading.style.display = "block";
    answer.textContent = "* or asterisk";
}

//Function to display the fourth answer
    function cssans4() {
    heading.style.display = "block";
    answer.textContent = "Inline, Internal, and External";
}

//Function to display the fifth answer
function cssans5() {
    heading.style.display = "block";
    answer.textContent = "#";
}

// Function to alert user when entering JavaScript Page

window.onload = function() {
    if (window.location.href.indexOf('wel-final-sheet-js.html') > -1) {
        alert("PAGE UNDER CONSTRUCTION. COME BACK AGAIN SOON");
    }
};
