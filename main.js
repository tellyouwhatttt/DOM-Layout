//All changes must be completed in JS file. do not change anything in the HTML file//

//Change header title
const mainHeading = document.getElementById('main-heading');
let htmlContent = mainHeading.innerHTML;
mainHeading.innerHTML = '<div>New DOM Layout</div>'

//Change header background color
document.getElementById("page-header").classList.add("bg-success");
document.getElementById("page-header").classList.remove("bg-dark");

//add text to paragraphs 1 & 2
let para1 = document.getElementById('para1')
let para2 = document.getElementById('para2')
para1.innerHTML = '<p>The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.</p>'
para2.innerHTML = '<p>The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.</p>'

//add click event to existing button that will create a text when clicked
const button = document.getElementById('btn')
let para4 = document.getElementById('para4')

btn.addEventListener("click", addPara);
function addPara() {
    para4.innerHTML = "<p>The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.</p>"
};

//change the color of the cards
let red = document.getElementById("red")
red.classList.remove("bg-white");
red.classList.add("bg-danger");

let blue = document.getElementById("blue")
blue.classList.remove("bg-white");
blue.classList.add("bg-primary");

let yellow = document.getElementById("yellow")
yellow.classList.remove("bg-white");
yellow.classList.add("bg-warning");

let green = document.getElementById("green")
green.classList.remove("bg-white");
green.classList.add("bg-success");

let black = document.getElementById("black")
black.classList.remove("bg-white");
black.classList.add("bg-dark");

